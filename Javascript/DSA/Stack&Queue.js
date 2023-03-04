/*
Q1. Student A took Student B's Laptop and started playing with him by changing his password. B
requested A to reveal the password, but A doesn't want to end the fun by revealing the password straightaway, so he asked B to select a number N. Then he gave a set of N numbers, stating that if he takes the modulo of, a sum of the given numbers with the smallest prime number from the given set of numbers if exists, else by finding the smallest prime divisor of sum, would give him the age of his loved ones. So spinning the given numbers that many times in an anticlockwise direction he will get the password for his device.

Example:

N = 6
Input: 90 45 37 80 1 46
Output: 80 1 46 90 45 37

N = 5
Input: 90 45 78 27 63
Output: 27 63 90 45 78

*/

const arrN = [90,45,37,80,1,46]

class queue{
    constructor(){
        this.elements = []
    }
    enqueue(item){
        this.elements.push(item)
    }
    dequeue(){
        return this.elements.shift()
    }
    print(){
        console.log(this.elements)
    }

    sum = 0
    add(){
        this.elements.filter(item => {
            this.sum += item
        })
    }

    isPrime(num) {
    
        if (num === 1 || num === 0) {
          return false;
        }
        for (var i = 2; i <= num / 2; i++) {
          if (num % i == 0) {
            return false;
          }
        }
        return true;
    }

    prime = []

    findPrime(){
        this.elements.forEach(element =>{
        if(this.isPrime(element)){
                this.prime.push(element)
            }
        })
    }

    smallestDivisor(n) {
        if (n % 2 == 0)
            return 2;
    
        for (var i = 3; i * i <= n; i += 2) {
            if (n % i == 0)
                return i;
        }
        return n;
    }

    rotateValue = 0
    findRotateValue(){
        this.add()
        this.findPrime()
        if(this.prime.length !== 0){
            var min = this.prime[0]
            this.prime.forEach((element) => {
                if (min > element) min = element;
            });

        this.rotateValue = this.sum % min
        }
        else{
            this.rotateValue = smallestDivisor(this.sum)
        }
    }

    antiRotate(){
        for(var i=0; i<this.rotateValue; i++){
            var temp = this.dequeue()
            this.enqueue(temp)
        }
    }
}

let q1 = new queue()

arrN.forEach(item =>{
    q1.enqueue(item)
})

q1.findRotateValue()
q1.antiRotate()
// console.log(q1)

/*
Q2. Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).
*/

class stack{
    constructor(){
        this.insertionQueue = []
        this.deletionQueue = []
    }

    push(item){
        this.insertionQueue.push(item);
    }

    pop(){
        console.log(`Original Queue: ${this.insertionQueue}`)
        if(this.deletionQueue.length === 0){
            while(this.insertionQueue.length>0){
                var temp = this.insertionQueue.pop()
                this.deletionQueue.push(temp)
            }
        }
        console.log(`Deletion Queue: ${this.deletionQueue}`)

        // deleting the element 
        var popped = this.deletionQueue.shift()

        while(this.deletionQueue.length>0){
            var temp = this.deletionQueue.pop()
            this.insertionQueue.push(temp)
        }
        console.log("Final Queue:")
        console.log(this.insertionQueue)

        return popped;
    }

    top(){
        return this.insertionQueue[this.insertionQueue.length-1]
    }

    isEmpty(){
        return this.insertionQueue.length == 0
    }
 }

 let s1 = new stack()
 s1.push(10)
 s1.push(20)
 s1.push(30)
 s1.push(40)
 s1.push(50)

//  console.log("Deleted element:" + s1.pop())
//  console.log(s1.top())
//  console.log(s1.isEmpty())

/*
Q3. Delete a node from a binary search tree (BST) keeping the following things in mind as follows :
If the node is a leaf node

If the node has 1 child node

If the node has 2 child nodes.
*/

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value)
        if(this.root == null){
            this.root = newNode;
        }
        else{
            let curr = this.root;
            while(true){
                if(value>curr.value){      
                    if(curr.right == null){
                        curr.right = newNode;
                        break;
                    }
                    else{
                        curr = curr.right;
                    }
                }
                else if(value<curr.value){
                    if(curr.left == null){
                        curr.left = newNode;
                        break;
                    }
                    else{
                        curr = curr.left;
                    }
                }
            }
        }
    }
    remove(value){
       
        var curr = this.root
        if(this.root.value == value){
            return console.log("Error: cannot delete root")
        }
        while(curr){
            
            if(curr.left.value == value){
                curr.left.value = null
                curr = curr.left
                if(curr.left && curr.right){
                    console.log("Deleted node: " + value)
                    console.log("2 child node: " + curr.left.value +" & "+ curr.right.value)
                    var temp = curr.left.value
                    var temp1 = curr.right.value
                    this.remove(curr.left)
                    this.remove(curr.right)
                    this.insert(temp)
                    this.insert(temp1)
                    break
                }
                if(curr.left || curr.right){
                    console.log("Deleted node: " + value)
                    console.log("1 child node")
                    if(curr.left){
                        var temp = curr.left.value
                        this.remove(curr.left)
                        this.insert(temp)
                    }
                    else{
                        var temp = curr.right.value
                        this.remove(curr.right)
                        this.insert(temp)
                    }
                    break
                }
                else{
                    console.log("Deleted node: " + value)
                    console.log("leaf node")
                    break
                }
            }
            if(curr.right.value == value){
                curr.right.value = null
                curr = curr.right
                if(curr.left && curr.right){
                    console.log("Deleted node: " + value)
                    console.log("2 child node: " + curr.left.value +" & "+ curr.right.value)
                    var temp = curr.left.value
                    var temp1 = curr.right.value
                    this.remove(curr.left)
                    this.remove(curr.right)
                    this.insert(temp)
                    this.insert(temp1)
                    break
                }
                if(curr.left || curr.right){
                    console.log("Deleted node: " + value)
                    console.log("1 child node" )
                    if(curr.left){
                        var temp = curr.left.value
                        this.remove(curr.left)
                        this.insert(temp)
                    }
                    else{
                        var temp = curr.right.value
                        this.remove(curr.right)
                        this.insert(temp)
                    }
                    break
                }
                else{
                    console.log("Deleted node: " + value)
                    console.log("leaf node")
                    break
                }
            }
            if(value < curr.value){
                curr = curr.left;
            }
            else{
                curr = curr.right;
            }
        }
        return this
    }

    arr = []
    inorder(node){
        if(node!==null){
            this.inorder(node.left)
            // console.log(node.value)
            this.arr.push(node.value)
            this.inorder(node.right)
        }
    }

    print(){
        this.arr = []
        this.inorder(this.root)
        console.log(this.arr)
    }
}

let t1 = new BinarySearchTree()
t1.insert(10)
t1.insert(20)
t1.insert(30)
t1.insert(5)
t1.insert(6)
t1.insert(4)
t1.insert(25)
t1.insert(15)

// console.log("Original Tree")
// t1.print()
// t1.remove(25)
// console.log("\nModified Tree")
// t1.print()

/*
Q4. Given a park with few sensors present, cross it by taking the shortest safe path without activating the sensors.
The park is in the form of an m× n matrix, and we need to find the shortest path from any cell in the first column to any cell in the last column of the matrix. The sensors are marked by the value 0 in the matrix, and all its eight adjacent cells can also activate the sensors. The path can only be constructed out of cells having value 1, and at any given moment, we can only move one step in one of the four directions. The valid moves are:

Go Up: (a, b) ——> (a – 1, b)

Go Left: (a, b) ——> (a, b – 1)

Go Down: (a, b) ——> (a + 1, b)

Go Right: (a, b) ——> (a, b + 1)
*/

var m = 6
var n = 4

// initialize 2D Array
var arr = new Array(m);
for (var i = 0; i < m; i++) {
    arr[i] = new Array(n);
}

for(i=0;i<m;i++){
    for(j=0;j<n;j++){
        arr[i][j] = 1
    }
}

function shortPath(position, target){
    position = arr[position][0]
    target = arr[target][n-1]

    

    if(arr[position][1] != 0){
        position = arr[position][1]
    }
}
// console.log(arr)

/*
Q5. Given a binary tree, write an efficient algorithm to delete the entire binary tree. 
Here, you have to make use of an iterative way where you perform a level order traversal on the tree.

Note: The idea here is to delete each node in the queue one by one.

*/

class Queue{
    constructor(){
        this.elements = []
    }

    enqueue(item){
        this.elements.push(item)
    }

    dequeue(){
        return this.elements.shift()
    }
}

class node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class bst{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new node(value)
        if(this.root == null){
            this.root = newNode;
        }
        else{
            let curr = this.root;
            while(true){
                if(value>curr.value){      
                    if(curr.right == null){
                        curr.right = newNode;
                        break;
                    }
                    else{
                        curr = curr.right;
                    }
                }
                else if(value<curr.value){
                    if(curr.left == null){
                        curr.left = newNode;
                        break;
                    }
                    else{
                        curr = curr.left;
                    }
                }
            }
        }
    }

    levelTraversal(node){
        
        let q1 = new Queue()
        if(node!==null){
            q1.enqueue(node)
            this.levelTraversal(node.left)
            this.levelTraversal(node.right)
        }
        q1.dequeue()
    }
}

let t = new bst()
t.insert(70);
t.insert(60);
t.insert(65);
t.insert(90);
t.insert(55);
t.insert(80);
t.insert(100);

// t.levelTraversal(this.root)

