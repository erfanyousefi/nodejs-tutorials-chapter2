//Modules
//Es Module => import, export, export default
//CommonJS Module => require, module.exports.foo = , module.exports = 

// const {add, subtract, myName} = require("./commonjs-module");
// const foo = require("./commonjs-module");
 import Str, {add, subtract} from "./es-module.js"

console.log(add(2, 5), subtract(5, 3), Str);
