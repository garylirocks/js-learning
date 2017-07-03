/** NOTE think command pattern as a remote controller, all other methods are routed thru it
 *          and in this way, you can record all method calls, and later on you can rollback or replay any action
 **/

class Repo {
    constructor() {
        this.tasks = [];
        this.commands = [];
    }

    get(id) {
        console.log('Getting task ' + id);
        return {
            name: 'new task from db'
        }
    }

    save(task) {
        this.tasks.push(task);
        console.log('Saving ' + task.name);
    }

    execute(action) {
        var args = Array.prototype.slice.call(arguments, 1);

        this.commands.push({
            'action': action,
            'args': args
        });

        if (this[action]) {
            return this[action](args[0]);
        }
    }

    replay() {
        this.commands.forEach((e) => {
            this[e.action](e.args[0]);
        });
    }
}

module.exports = Repo;
