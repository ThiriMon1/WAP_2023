function Student(fName,lName){
    this.firstName = fName;
    this.lastName = lName;
    this.grades = [];
}

Student.prototype.inputNewGrade = function(newGrade){
    this.grades.push(newGrade);
}

Student.prototype.computeAverage = function(){
    return this.grades.reduce((avg, grade, index, arr) => avg + (grade/arr.length),0);
}

const student1 = new Student("John", "Smith");
student1.inputNewGrade(86);
student1.inputNewGrade(90);
student1.inputNewGrade(91);
const avg = student1.computeAverage();
console.log(student1, avg);

const student2 = new Student("Ellen", "Minth");
student2.inputNewGrade(88);
student2.inputNewGrade(99);
student2.inputNewGrade(88);
const avg2 = student2.computeAverage();
console.log(student2, avg);