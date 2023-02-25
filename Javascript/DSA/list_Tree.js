/*
Exercise 1: 
Create a program that accepts the student data as input from the user. The student data should contain the following information:
*Student id
*Student name
*Student marks in 5 subjects

Store this information in a tree data structure where each node represents a single student. The tree should be a binary search tree and use the percentage of each student as a criterion for storing objects. After storing all the information, the user will enter the name of a student and his/her grades should be displayed on the screen.
*/

class Node{
    constructor(id, name, marks, per){
        this.studentId = id
        this.studentName = name
        this.studentMarks = marks  // marks is an array storing marks of 5 subjects
        this.percentage = per
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(id, name, marks, per){
        let newNode = new Node(id,name,marks,per)
    }
}

let student = new BinarySearchTree()
var arr = [50,60,80,90,100]
for(i=0;i<arr.length;i++) var total = total + arr[i]
var per = total/arr.length
student.insert(1011, "ganesh", arr, per)











/*
Exercise 2: 
Create a program that allows users to enter customer data. The customer data should include the following information:

*Customer Id
*Customer Name
*Purchase date(dd/mm/yy)
*Bill amount

Store this information in a linked list. The program should provide three options for viewing information:

*View all customer data in sorted order based on bill amount
*View the total purchase amount for a specific year
*View details of a specific customer based on name

*/

class node{
    constructor(id, name, date, bill){
        this.customer_id = id
        this.customer_name = name
        this.purchase_date = date
        this.bill_amount = bill
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.tail = this.head
        this.length = 1;
    }

    append(id, name, date, bill){
        const newNode = new node(id, name, date, bill);
        if(this.head == null){
            this.head = newNode;
        }
        if(this.head.next == null){
            this.head.next = newNode
            this.tail = newNode
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;   
            this.length++;
        }
    
       return this;
    }

    details(name){
        let currentNode = this.head;

        while(currentNode !== null){
            if(currentNode.customer_name === name){
                console.log(`Customer ID: ${currentNode.customer_id}`)
                console.log(`Customer Name: ${currentNode.customer_name}`)
                console.log(`Purchase Date: ${currentNode.purchase_date}`)
                console.log(`Bill Amount: ${currentNode.bill_amount}`)
            }
            currentNode = currentNode.next;
        }
        return "invalid name";
    }

    totalPurchase(year){
        var curr = this.head
        var total = 0
        while(curr!==null){
            var y = (curr.purchase_date.split('/'))[2]
            if(y == year) total += curr.bill_amount
            curr = curr.next
        }
        console.log(`Total Purchase in year ${year} : ${total}`)
    }
}

let cust1 = new linkedList()
cust1.append(101, "suresh", "15/12/2022", 1020)
cust1.append(102,"vishu","12/12/2022",2000)
cust1.append(103,"abc","2/2/2023",20)
// console.log(cust1)
// console.log(cust1.sort())
// console.log(cust1)
cust1.details("vishu")
cust1.totalPurchase("2023")




// deleteTail(){
//     let currentNode = this.head;

//     while(currentNode.next.next !== null){
//         currentNode = currentNode.next;
//     }
//     currentNode.next = null;
//     this.tail = currentNode;
//     this.length--;
// }

// deleteHead(){
//     this.head = this.head.next;
//     this.length--;
//     return this;
// }

// delete(index){
//     let count = 1;
//     let currentNode = this.head;

//     if(index == 0){
//         this.deleteHead()
//     }
//     else if(currentNode.next.next == null){
//         this.deleteTail();
//     }
//     else{
            
//         while(count < index){
//             currentNode = currentNode.next;
//             count++;
//         }

//         currentNode.next = currentNode.next.next;
//         this.length--;
//         return this;
//     }
// }

// sort(){
//     var curr = this.head
//     var maxBill = curr.bill_amount
//     var index = 1
//     let temp = new linkedList()
    
//     while(curr!==null){
//         if(maxBill < curr.bill_amount){
//             maxBill = curr.bill_amount
//             var tempNode = curr
//             var count = index
//         } 
//         curr = curr.next
//         index++
//     }
    
//     // console.log(tempNode.customer_id)
//     temp.append(tempNode.customer_id, tempNode.customer_name, tempNode.purchase_date, tempNode.bill_amount)
//     this.delete(count)
//     var len = this.length
//     if(len > 0){
//         this.sort()
//     }
    
//     console.log(this.length)
// }