const pluginTailwind = require('eleventy-plugin-tailwindcss');

module.exports = (config) => {
  config.addPlugin(pluginTailwind, {
    src: 'src/assets/css/*'
  });

  return {
    dir: {
      input: 'src',
      output: '_site'
    }
    }
};