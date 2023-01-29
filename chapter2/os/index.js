const os = require("os");
const currentOS = {
    name: os.type(),
    arch: os.arch(),
    platform: os.platform(),
    release: os.release(),
    version: os.version()
}
console.log(currentOS);
console.log(os.uptime());
console.log(os.userInfo());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.cpus());
console.log(os.networkInterfaces());
