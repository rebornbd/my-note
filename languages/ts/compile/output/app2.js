"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var products1 = ["bike", "shirt"];
var products2 = [];
var products3 = [1, 3];
var products4 = [];
var products5 = [true, false];
var products6 = [];
var products7 = [{}, ""];
var products8 = [];
var products9 = ["", "", 1, null];
var products10 = ["", "", 1, null];
var foo = function (obj) {
    return __assign(__assign({}, obj), { id: 'id' });
};
var f = foo({
    name: 'rahim'
});
console.log(f);
var items = [10, '', true];
