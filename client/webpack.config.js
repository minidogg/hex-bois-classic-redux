const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'game_bundle.js',
    path: path.resolve(__dirname, 'web'),
  },
};