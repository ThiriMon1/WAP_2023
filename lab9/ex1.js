class LinkedList {
    constructor(val) {
        this.next = null;
        this.val = val;
    }

    add(val) {
        if (this.next == null) {
            this.next = new LinkedList(val);
        } else {
            this.next.add(val);
        }
    }

    remove(arg, prev) {
        if (this.val === arg) {
            if (prev) {
                prev.next = this.next;
            } else {
                linkedlist = this.next;
            }
        } else {
            if (this.next)
                this.next.remove(arg, this);
        }
    }

    print() {
        let result = 'LinkedList{';
        if (this.next) {
            let current = this.next;
            while (current) {
                if (current.next == null) {
                    result += current.val;
                } else {
                    result += current.val + ',';
                }
                current = current.next;
            }
        }
        result += '}';
        console.log(result);
    }

}

let linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //Expected Result: LinkedList{1,2,3};
linkedlist.remove(2);
linkedlist.print(); //Expected Result: LinkedList{1,3};