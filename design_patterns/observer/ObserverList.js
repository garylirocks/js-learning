function ObserverList() {
    this.observerList = [];
}

ObserverList.prototype.add = function(obj) {
    return this.observerList.push(obj);
};

ObserverList.prototype.count = function() {
    return this.observerList.length;
};

ObserverList.prototype.get = function(index) {
    if (-1 < index && index < this.observerList.length) {
        return this.observerList[index];
    }
};

ObserverList.prototype.remove = function(obj) {
    var index = this.observerList.indexOf(obj);
    this.observerList.splice(index, 1);
};

module.exports = ObserverList;
