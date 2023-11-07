/*let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList: function () {

        this.students.forEach(function (student) {

            console.log(this.title + ": " + student

            );

        });

    }

};

group.showList();*/
//solution1:wrapper
let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList: function () {

        this.students.forEach(function (student) {

          
            );

        });

    }

};

group.showList();

console.log("*********test");

let user = {
    firstName: "John",
    sayHi() {
    console.log(`Hello, ${this.firstName}!`);
    }
    };
    user.sayHi(); //works
    setTimeout(() => user.sayHi(), 2000); //problem!