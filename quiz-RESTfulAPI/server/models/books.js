let books = [
    {
        bookId: 1,
        title: 'Node.js',
        author: {
            authorId: 303,
            firstname: 'Edward1',
            lastname: 'Jack'
        }
    },
    {
        bookId: 2,
        title: 'Node1.js',
        author: {
            authorId: 3032,
            firstname: 'edward1',
            lastname: 'Jack1'
        }
    },
    {
        bookId: 3,
        title: 'Node3.js',
        author: {
            authorId: 3033,
            firstname: 'ddward3',
            lastname: 'Jack3'
        }
    },
    // Add more books as needed
];
let counter = 4;
module.exports = class Book {

    constructor(bookId, title, authorId, firstname, lastname) {
        this.bookId = bookId;
        this.title = title;
        this.author = {
            authorId: authorId,
            firstname: firstname,
            lastname: lastname,
        };
    }

    static getBookbyId(bookId){
         const bookIndex = books.findIndex(book => book.bookId == bookId);
        if(bookIndex > -1){
            return books[bookIndex];
        }else{
            throw new Error('Not found');
        }
    }

    save(){
      //  const bookId = books.length > 0 ? books[books.length - 1].bookId + 1 : 1;
        this.bookId= counter++;
        books.push(this);
    }

   static getBookbyFirstname(firstname){
        console.log(firstname);
        const result = books.filter(book => book.author.firstname.includes(firstname));
        return result;
    }

    static getBookbyFirstLetterOfFirstName(firstname){
        return books.filter(book => book.author.firstname.toLowerCase().includes(firstname.toLowerCase()));
    }
}