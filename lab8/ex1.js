function LinkedList(val) {
    this.next = null;
    this.val = val;
}

LinkedList.prototype.add = function (val) {
    if (this.next == null) {
        this.next = new LinkedList(val);
    } else {
        this.next.add(val);
    }
}

LinkedList.prototype.remove = function (arg, prev) {
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

LinkedList.prototype.print = function () {
    let result = 'LinkedList{';
    if (this.next) {
        let current = this.next;
        while (current) {
            if(current.next == null){
                result += current.val;
            }else{
                result += current.val + ',';
            }
            current = current.next;
        }
    }
    result += '}';
    console.log(result);
}

linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //Expected Result: LinkedList{1,2,3};
linkedlist.remove(2);
linkedlist.print(); //Expected Result: LinkedList{1,3};