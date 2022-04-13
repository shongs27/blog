// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

/** Google Analytics Data API sample quickstart application.

 This application demonstrates the usage of the Analytics Data API using
 service account credentials from a JSON file downloaded from
 the Google Cloud Console.

 Before you start the application, please review the comments starting with
 "TODO(developer)" and update the code to use correct values.

 Usage:
 npm install
 node quickstart_json_credentials.js
 */

const path = require('path');

async function main(
  propertyId = 'YOUR-GA4-PROPERTY-ID',
  credentialsJsonPath = ''
) {
  // [START analyticsdata_json_credentials_quickstart]
  /**
   * TODO(developer): Uncomment this variable and replace with your
   *   Google Analytics 4 property ID before running the sample.
   */
  propertyId = '306815728';

  // [START analyticsdata_json_credentials_initialize]
  /** TODO(developer): Uncomment this variable and replace with a valid path to
   *  the credentials.json file for your service account downloaded from the
   *  Cloud Console.
   */
  credentialsJsonPath = path.resolve(__dirname, 'credentials.json');

  // Imports the Google Analytics Data API client library.
  const { BetaAnalyticsDataClient } = require('@google-analytics/data');

  // Explicitly use service account credentials by specifying
  // the private key file.
  const analyticsDataClient = new BetaAnalyticsDataClient({
    keyFilename: credentialsJsonPath,
  });
  // [END analyticsdata_json_credentials_initialize]

  // Runs a simple report.

  async function runRealtimeReport() {
    const [response] = await analyticsDataClient.runRealtimeReport({
      property: `properties/${propertyId}`,

      dimensions: [{ name: 'country' }],
      metrics: [{ name: 'activeUsers' }],
      metricAggregations: ['TOTAL'],
      keepEmptyRows: true,
    });

    return response;
  }

  async function runReport() {
    // [START analyticsdata_json_credentials_run_report]
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dimensions: [{ name: 'date' }],
      metrics: [{ name: 'activeUsers' }],
      dateRanges: [{ startDate: '30daysAgo', endDate: 'yesterday' }],
      orderBys: [
        {
          dimension: { orderType: 'NUMERIC', dimensionName: 'date' },
          desc: true,
        },
        { metric: { metricName: 'activeUsers' }, desc: false },
      ],
      keepEmptyRows: true,
      metricAggregations: ['TOTAL'],
    });
    // [END analyticsdata_json_credentials_run_report]

    return response;
  }

  // 두 API에서 데이터 받아오기
  const [realTimeReport, report] = await Promise.all([
    runRealtimeReport(),
    runReport(),
  ]);

  // 원하는 데이터로 가공
  const result = {
    realTimeUsers: realTimeReport.totals[0].metricValues[0].value || '0',
    yesterdayActiveUsers: report.rows[0].metricValues[0].value,
    monthActiveUsers: String(
      report.rows.reduce(
        (acc, cur) => acc + Number(cur.metricValues[0].value),
        0
      )
    ),
    etc: report.totals[0].metricValues[0].value,
  };
  return result;
  // [END analyticsdata_json_credentials_quickstart]
}

// process.on('unhandledRejection', (err) => {
//   console.error(err.message);
//   process.exitCode = 1;
// });
main(...process.argv.slice(2));

module.exports = main;
