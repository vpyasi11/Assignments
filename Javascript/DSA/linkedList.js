class node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedList{
    constructor(value){
        this.head = {value: value, next:null};
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new node(value);
        if(this.head == null){
            this.head = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;   
            this.length++;
        }
    
       return this;
    }

    print(){
        const arr = [];
        let currentNode = this.head;

        while(currentNode !== null){
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr
    }
}

let list = new linkedList(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);

/*
Question 1: Write a program to reverse a linked list with a pointer given to the head node as given below:
    Input: Head of the following linked list: 

    1->2->3->4->null

    Output: Linked list should be changed to:

    4->3->2->1->null
*/

// Reverse using array by passing list as argument

function reverse(list){

    // storing nodes into array in reverse
    const arr = list.print()
    let temp = []
    for(i=arr.length-1;i>=0;i--){
        temp[i] = arr[arr.length-i-1]
    }

    // storing array of reversed list into other list
    const li = new linkedList(temp[0])
    for(i=1;i<temp.length;i++) li.append(temp[i])
    list = li
    console.log(list.print())
}

// reverse(list)   // function call

// Reverse using array by passing pointer to head

function reversee(head){
    let li = new linkedList(head.value)
    var curr = head.next
    while(curr!==null){
        li.append(curr.value)
        curr = curr.next
    }
    console.log("Original: " + list.print())
    li = reverse(li)
    return li
}

// reversee(list.head)   // function call

/*
Question 2: Write a program to create a function that takes two sorted linked lists in ascending order as input and returns a single sorted linked list in ascending order. 
Input:

    list1= 1->2->3

    list2=4->5->6

    Output :  sortedlist = 1->2->3->4->5->6
*/

let list1 = new linkedList(10)
list1.append(20)
list1.append(30)
list1.append(40)
list1.append(50)

let list2 = new linkedList(60)
list2.append(70)
list2.append(80)
list2.append(90)
list2.append(100)

function sortedlist(l1,l2){

    // check if first list passed is greater or lesser
    if(l1.head>l2.head){
        sortedlist(l2,l1)
    }

    // storing nodes of first list into sorted list
    var sorted = new linkedList(l1.head.value)
    var curr = l1.head.next
    while(curr!==null){
        sorted.append(curr.value)
        curr = curr.next
    }
    
    // storing nodes of second list into sorted list
    var curr = l2.head
    while(curr!==null){
        sorted.append(curr.value)
        curr = curr.next
    }

    console.log("list 1: " + l1.print())
    console.log("list 2: " + l2.print())
    console.log(sorted.print())
}

// sortedlist(list1,list2)  // function call

/* 
Question 3: You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.
*/

let num1 = new linkedList(7)
num1.append(1)
num1.append(6)

let num2 = new linkedList(5)
num2.append(9)
num2.append(2)

// converting a list into number
function listToNum(list, order = "reverse"){ 

    var curr = list.head
    var arr = []

    if(order === "reverse"){
        while(curr !== null){
            arr.unshift(curr.value)
            curr = curr.next
        }
    }
    else{
        while(curr !== null){
            arr.push(curr.value)
            curr = curr.next
        }
    }

    var num = parseInt(arr.join(''))
    return num
}

// converting a number into list
function numToList(num, order = "reverse"){
    
    var arr = String(num).split('')

    if(order === "reverse"){
        let result = new linkedList(parseInt(arr[arr.length-1]))
        for(var i = arr.length-2; i>=0; i--){
            arr[i] = parseInt(arr[i])
            result.append(arr[i])
        }
        return result
    }
    else{
        let result = new linkedList(parseInt(arr[0]))
        for(var i = 1; i<arr.length; i++){
            arr[i] = parseInt(arr[i])
            result.append(arr[i])
        }
        return result
    }
}

/*
Task 1:
Input: (7-> 1-> 6) + (5 -> 9 -> 2).That is, 617 + 295.
Output: 2 -> 1 -> 9. That is 912.
*/

function addReverse(num1, num2){

    var n1 = listToNum(num1)
    var n2 = listToNum(num2)

    let sum = n1 + n2

    console.log(`Adding: ${n1} + ${n2} = ${sum} (in reverse list)`)
    console.log(numToList(sum).print())
}

// addReverse(num1, num2)   // function call

/*
Task 2: Suppose the digits are stored in a forward order.
Repeat the above problem.
Input:(6 -> 1-> 7) + (2 -> 9 -> 5).That is,617+295.
Output: 9 -> 1 -> 2. That is 912. 
*/

function addForward(num1, num2){

    var n1 = listToNum(num1,"forward")
    var n2 = listToNum(num2,"forward")

    let sum = n1 + n2

    console.log(`Adding: ${n1} + ${n2} = ${sum} (in forward list)`)
    console.log(numToList(sum, "forward").print())
    
}

// addForward(num1, num2)    // function call



// ********  See output by removing comments from function calls ********* 

// Question 1: To reverse a linked list
    // reversee(list.head)

// Question 2: To return a sorted list in ascending order
    // sortedlist(list1, list2) 

// Question 3: To add two numbers from two list and return the sum as a linked list
// (for digits stored in reverse order and forward order)
    // addReverse(num1, num2)
    // addForward(num1, num2)