function add(a,b) {
    const sum = a + b;
    return sum;
}
function mul(a,b) {
    const sum = a + b;
    return sum;
}
// old school eg, common module export/import
module.exports = add; // export
const SUM = require("./this file name") //  import

// ecma module export -
// !use.mjs extension
// !add -> "type": "module" in package.json
// !cannot use 'require' in its allies file once it become ecma module 
export add; // export 
import { add, add as addtonum } from "./file name"; // import

export default mul; // export 
import asfsafkweafniu from "./file name"; // import -> mul will import
import { sum, mul } from "./file name"; // import -> import both but name should be same in thi approch
import * from "./file  name"; // import -> import evevrthing

