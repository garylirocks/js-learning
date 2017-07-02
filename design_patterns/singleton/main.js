/**
 * both main.js and taskHandler.js have this line
        require('./Repo')

    since Node caches the result of any require call, so they actually got the same object
 */

var repo = require('./Repo');
var handler = require('./taskHandler');

repo.save('main 1');
repo.save('main 2');

handler.save();
handler.save();
handler.save();
