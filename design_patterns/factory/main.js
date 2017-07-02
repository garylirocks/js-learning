
var repoFactory = require('./repoFactory.js');

var task1 = repoFactory.task.get(1);
repoFactory.task.save(task1);
