const path = require('path');

module.exports = {
  entry: ['./polyfill.js', './a.js'],
  output: {
    filename: 'b.js',
    path: path.resolve(__dirname, '')
  },
  mode: 'development'
};