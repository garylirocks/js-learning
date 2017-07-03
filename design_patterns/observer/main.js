
var ObservableTask = require('./ObservableTask');
var LoggingService = require('./LoggingService');

var task1 = new ObservableTask({
    name: 'Demo Task',
    user: 'John'
});

task1.addObserver(LoggingService.update);
task1.save();

task1.removeObserver(LoggingService.update);
task1.save();
