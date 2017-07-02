
var repo = require('./Repo');

var taskHandler = function() {
    return {
        save: function() {
            repo.save('Hi from taskHandler');
        }
    }
}

module.exports = taskHandler();
