"use strict";

var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");
var _defineProperties = require("@babel/runtime/helpers/defineProperties");
var _createClass = require("@babel/runtime/helpers/createClass");

var Person = /*#__PURE__*/function () {
  function Person() {
    _classCallCheck(this, Person);
  }

  _createClass(Person, [{
    key: "sayname",
    value: function sayname() {
      return 'name';
    }
  }]);

  return Person;
}();

var john = new Person();
console.log(john);