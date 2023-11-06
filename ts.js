var Thing = /** @class */ (function () {
    function Thing(name) {
        this.name = name;
    }
    Thing.prototype.swim = function () {
        return "Nage comme un canard";
    };
    return Thing;
}());
var duck = new Thing("Nanar");
console.log(duck.swim());
