var Class = (function () {
    function createClass(properties) {

        var createFunction = function () { // function-at, koito se wrashta i warhu kojto shte se izwika new
            this.init.apply(this, arguments);
        }

        for (prop in properties) {
            createFunction.prototype[prop] = this.properties[prop];
        }

        if (!createFunction.prototype.init) {
            createFunction.prototype.init = function () {
            }
        }

        return createFunction;
    }

    Function.prototype.inherit = function (parent) {
        oldPrototype = this.prototype;
        this.prototype = new parent();
        this._superConstructor = parent;

        for (var prop in oldPrototype) {
            this.prototype[prop] = oldPrototype[prop];
        }
    }

    return {
        create: createClass,
    }
}());