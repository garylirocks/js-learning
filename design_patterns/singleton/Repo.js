
class Repo {
    constructor() {
        this.called = 0;
    }

    save(task) {
        this.called++;
        console.log('Saving' + task + ' Called ' + this.called + ' times');
    }
}

/*
 NOTE by returning an object, every time this file is required, the same cached object is returned
        that means it's a singleton instance

    if you want to create more instances, export the function, not the object
*/
module.exports = new Repo();
