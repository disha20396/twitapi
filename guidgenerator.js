const { getuuid } = require('./crypto');

console.log(getuuid().replace(/-/gi, ''));