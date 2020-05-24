var babelCore = require("@babel/core");
var es6Code = 'var fn = (num) => num + 2';
var options = {
  presets: ["@babel/env"]
};
var result = babelCore.transform(es6Code, options);
console.log(result);
console.log('--------------');
console.log('--------------');
console.log(result.code);
