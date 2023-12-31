console.log("******* wrapper*********");
let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList: function () {

        this.students.forEach((student) => {

            console.log(this.title + ": " + student

            );

        });

    }

};

group.showList();

console.log("******* bind*********");

let group1 = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList1: function () {

        this.students.forEach(function (student) {

            console.log(this.title + ": " + student

            );

        }.bind(this));

    }

};

group1.showList1();

/*console.log("*******solution3 : second argument of for each*********");
let group2 = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList2: function () {

        this.students.forEach(function (student) {

            console.log(this.title + ": " + student

            );

        },this);

    }

};

group2.showList2();*/

console.log("******* storing 'this' in variable*********");
let group3 = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList3: function () {
        var self = this;
        this.students.forEach(function (student) {

            console.log(self.title + ": " + student

            );

        });

    }

};

group3.showList3();

/*console.log("*******solution5 : using external function*********");
function std(student){
    console.log(this.title + ": " + student);
}
let group4 = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList4: function () {

        this.students.forEach(std,this);

    }

};

group4.showList4();*/

console.log("**********call + wrapper*************")
let group4 = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList4: function () {

        this.students.forEach((stu) =>{
            (function (student) {

                console.log(this.title + ": " + student);

            }).call(this,stu);
        });

    }

};

group4.showList4();

console.log("**********apply + wrapper*************")
let group5 = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList5: function () {

        this.students.forEach((stu) =>{
            (function (student) {

                console.log(this.title + ": " + student);

            }).apply(this,[stu]);
        });

    }

};

group5.showList5();