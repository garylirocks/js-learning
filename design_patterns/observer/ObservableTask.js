/**
 * NOTE here we are actually extending Task using a decorator pattern, converting it into a subject in observer pattern
 **/

var Task = require('./Task');
var ObserverList = require('./ObserverList');

var ObservableTask = function(data) {
    Task.call(this, data);
    this.observers = new ObserverList();
};

ObservableTask.prototype.addObserver = function(observer) {
    this.observers.add(observer);
};

ObservableTask.prototype.removeObserver = function(observer) {
    this.observers.remove(observer);
};

ObservableTask.prototype.notify = function(context) {
    var obCount = this.observers.count();

    for (var i = 0; i < obCount; i++) {
        this.observers.get(i)(context);
    }
};

ObservableTask.prototype.save = function() {
    this.notify(this);
    Task.prototype.save.call(this);
};

module.exports = ObservableTask;
