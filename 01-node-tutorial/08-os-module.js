// ?in-order to use thsese built-in modules
// * we need to provide only module name -> ('__name__')
// * use _single_ for multi usecasees, {} for 4-5 useczaes 
const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS)
