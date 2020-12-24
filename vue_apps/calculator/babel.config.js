// instrument code only during testing
const plugins = []
if (process.env.NODE_ENV === 'test') {
  plugins.push([
    'babel-plugin-istanbul',
    {
      // specify some options for NYC instrumentation here
      // like tell it to instrument both JavaScript and Vue files
      extension: ['.js', '.vue'],
    },
  ])
}

module.exports = {
  presets: ['@vue/app'],
  plugins,
}
