module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false
      }
    ]
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    [
      'component',
      {
        libraryName: 'mint-ui',
        style: true
      }
    ]
  ]
};
