class Queue<T> {
    data: T[] = [];
  
    push(a: T): void {
      this.data.push(a);
    }
  
    pop(): T | undefined {
      return this.data.shift();
    }
  }
  
let queue = new Queue<number>();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);

console.log(queue.pop()) // affiche 1
console.log(queue.pop()) // le 2e element
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop()) // undefined car plus rien à afficher

let queueArray = new Queue<number[]>();
queueArray.push([1, 2]);
queueArray.push([3, 4]);
queueArray.push([5, 6]);
queueArray.push([7, 8]);

console.log(queueArray.pop()); // affiche [1,2]
console.log(queueArray.pop());