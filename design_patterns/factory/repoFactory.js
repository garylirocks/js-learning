
var repoFactory = function() {
    var repoList = [
        {
            name: 'task',
            source: './taskRepository'
        },
        {
            name: 'user',
            source: './userRepository'
        }
    ];

    repoList.forEach((repo) => {
        this[repo.name] = require(repo.source)
    });
};

module.exports = new repoFactory();
