var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (a) {
        this.data.push(a);
    };
    Queue.prototype.pop = function () {
        return this.data.shift();
    };
    return Queue;
}());
var queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
console.log(queue.pop()); // affiche 1
console.log(queue.pop()); // le 2e element
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop()); // undefined car plus rien à afficher
var queueArray = new Queue();
queueArray.push([1, 2]);
queueArray.push([3, 4]);
queueArray.push([5, 6]);
queueArray.push([7, 8]);
console.log(queueArray.pop()); // affiche [1,2]
console.log(queueArray.pop());
