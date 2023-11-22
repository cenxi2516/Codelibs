Function.prototype.inherit = function(ParentChild) {
    const ChildClass = this;
    ChildClass.prototype = Object.create(ParentChild.prototype, {
        constructor: {
            configurable: true,
            enumerable: false,
            writable: true,
            value: ChildClass
        }
    });
};
