var Repo = require('./Repo');

var repo = new Repo();

// NOTE all method calls are thru the 'execute' method, and all actions are recorded
repo.execute('save', {
    name: 'Task 1'
});

repo.execute('save', {
    name: 'Task 2'
});

console.log(repo.tasks);
console.log(repo.commands);

console.log('Clear all the tasks');
repo.tasks = [];
console.log(repo.tasks);

// NOTE all the recoreded action can be replayed
console.log('Replay saved actions');
repo.replay();

console.log(repo.tasks);
