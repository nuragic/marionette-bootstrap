({
  dir: '../../dist',
  mainConfigFile: 'config.js',
  modules: [
    {
      name: 'config'
    }
  ],
  fileExclusionRegExp: /^\.git/,
  optimizeCss: 'standard',
  removeCombined: true
})
