module.exports = {
  // plugins: ['@babel/plugin-transform-runtime'],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { browsers: ['>5% in KR', 'last 2 chrome versions'] },
      },
    ],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
};
