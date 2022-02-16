import styled from '@emotion/styled';

import { mainTitle, subtitle } from '../../../fixture/title';

const Section = styled.section({
  '& h1, & h3': {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default function Title() {
  return (
    <Section>
      <h1>{mainTitle}</h1>
      <h3>{subtitle}</h3>
    </Section>
  );
}
