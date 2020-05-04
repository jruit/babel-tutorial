
const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', './a.js'],
  output: {
    filename: 'b.js',
    path: path.resolve(__dirname, '')
  },
  mode: 'development'
};