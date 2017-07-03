/**
 * NOTE the mediator pattern is just another form of observer pattern, unlike the observer pattern, in mediator pattern,
 *          the subject does not need to know anything about observers, it just publish to a channel in the mediator
 */
 
var Task = require('./Task');
var Mediator = require('./Mediator');
var LoggingService = require('./LoggingService');

var task1 = new Task({
    name: 'Demo Task',
    user: 'John'
});

Mediator.subscribe('complete', LoggingService, LoggingService.update);

task1.complete = function() {
    Mediator.publish('complete', this);
    Task.prototype.complete.call(this);
};

task1.complete();
