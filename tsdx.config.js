const copy = require('rollup-plugin-copy');

module.exports = {
  rollup(config) {
    config.plugins.push(copy({
      targets: [
        { src: 'src/templates/**/*', dest: 'dist/templates' },
        { src: 'src/components/**/*', dest: 'dist/components' },
      ],
    }));
    return config;
  },
};
