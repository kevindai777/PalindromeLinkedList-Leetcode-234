//Objective is to see whether a linked list is a palindrome.

class Node {
    constructor(val, next = null) { //if next is not given, assume it is empty
      this.val = val
      this.next = next
    }
}

class LinkedList {
    constructor() {
      this.head = null
    }

    addNodeToBack(data) {
        let current = this.head //initialize to beginning
    
        if (!this.head) { //if the list is empty...
            this.head = new Node(data)
        } else {
            while (current.next) {
                current = current.next //move along the list
            }
            current.next = new Node(data)
        }
    }
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(2)
head.next.next.next.next = new Node(1)


//O(n) solution that adds all values into an array then uses a 2-pointer
//approach to see whether it's a palindrome.

let arr = []
let curr = head
    
while (curr) {
    arr.push(curr.val)
    curr = curr.next
}
    
let left = 0
let right = arr.length - 1
    
while (left < right) {
    if (arr[left] !== arr[right]) {
        return false
    }
    left++
    right--
}
    
return true
