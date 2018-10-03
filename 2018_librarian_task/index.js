class myLibrary{
  constructor(){
    this.books = []
    this.pushData = this.pushData.bind(this);
    this.addBook = this.addBook.bind(this);
  }

  findBook(data, prop, val){
    let result = null;
    if (prop === 'id'){
      result = data.find(elem => elem[prop] == val);
    }else{
      result = data.filter(elem => elem[prop] == val);
    }
    return result;
  }

  pushData(newBooks){
    this.books = newBooks;
    return this.books;
  }

  addBook(bookToAdd){
    const idNum = this.books.length + 1;
    bookToAdd.id = idNum.toString();
    this.books.push(bookToAdd);
    return bookToAdd;
  }
};
module.exports = myLibrary;