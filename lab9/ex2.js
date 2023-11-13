class Student {
    constructor(stdId) {
        this.studentId = stdId;
        this.answers = [];
    }
    addAnswer(question) {
            this.answers.push(question);
    }

}
class Question {
    constructor(qid, ans) {
        this.qid = qid;
        this.answer = ans;
    }
    checkAnswer(answer) {
        if (this.answer === answer) return true;
        return false;
    }
}
class Quiz {
    constructor(questions, students) {
        this.questions = new Map();
        questions.forEach(e => {
            this.questions.set(e.qid, e);
        });
        this.students = students;
    }
    scoreStudentBySid(stdId) {
        const std = this.students.find(s => s.studentId === stdId);

        if (std) {
            return std.answers.reduce((score, answer) => {
                const question = this.questions.get(answer.qid);
                return score + (question.checkAnswer(answer.answer) ? 1 : 0);
            }, 0);
        }

        return 0;
    }
    getAverageScore() {

            const totalPoints = this.students
                            .reduce((total, student) => total + 
                            this.scoreStudentBySid(student.studentId), 0);
            return totalPoints / this.students.length;
    }

}


const student1 = new Student(10);

student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));

const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));

const students = [student1, student2];

const questions = [new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];

const quiz = new Quiz(questions, students);

let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3

let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2

let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5