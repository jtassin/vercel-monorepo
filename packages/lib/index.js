"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = void 0;
const lodash_1 = __importDefault(require("lodash"));
function name() {
    return lodash_1.default.upperCase('name from lib');
}
exports.name = name;
