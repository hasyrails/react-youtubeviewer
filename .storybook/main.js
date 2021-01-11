const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.jsx'], // ここを書き換える（`js`ではなく`jsx`であることに注意）
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: (config) => {
    config.resolve.alias['~'] = path.join(__dirname, '../src/');
    return config;
  },
};
