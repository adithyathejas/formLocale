var head;
 
     class Node {
        constructor(val) {
            this.data = val;
            this.next = null;
        }
    }
 
    function reverse(node,prev,current,next) {
    var prev = null;
    var current = node;
    var next = null;
    if(current==null){
        node = prev;
        return node;

    }
else{
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    reverse(node,prev,current,next)
}       
           
        }
        
    
 
    function printList(node) {
        while (node != null) {
            process.stdout.write(node.data + " ");
            node = node.next;
        }
        console.log(" ")
    }
     
        head = new Node(85);
        head.next = new Node(15);
        head.next.next = new Node(4);
        head.next.next.next = new Node(20);
 
        printList(head);
        head = reverse(head);
        printList(head);
 
