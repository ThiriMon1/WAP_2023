let books =[
    {id:1, title: 'book1', ISBN:'A00002', publishedDate:'2003Apr11', author:'Mr.A'},
    {id:2, title: 'book2', ISBN:'A00022', publishedDate:'2003Apr12', author:'Mr.B'},
    {id:3, title: 'book3', ISBN:'A00033', publishedDate:'2003Apr13', author:'Mr.C'},    
];

let counter = 4;

module.exports = class Book{
    constructor(id, title, ISBN, publishedDate, author){
        this.id = id;
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    static findAllBooks(){
        return books;
    }

    static findBookById(id){
        return books.find(b => b.id == id);
    }

    save(){
        this.id=counter++;
        books.push(this);
    }

    updateById(id){
        const index = books.findIndex(b => b.id == id);
        if(index > -1){
            this.id = id;
            books[index] = this;
        }else{
            throw new Error(`book with ID: ${id} cannot find`);
        }
    }

    static deleteById(id){
       const index = books.findIndex(b => b.id == id);
       if(index > -1){
        books.slice(index,1);
       }else{
        throw new Error(`book with ID: ${id} cannot find`);
       }
    }



}