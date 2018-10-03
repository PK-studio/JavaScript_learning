const expect = require("chai").expect;
const fetch = require('node-fetch');
const chaiTetch = require("chai-fetch").expect;
const classLibrary = require("./index");

const books = [
  {"id": "1", "author": "aaa", "title": "aaa"},
  {"id": "2", "author": "bbb", "title": "bbb"},
  {"id": "3", "author": "aaa", "title": "cd"},
  {"id": "4", "author": "ccc", "title": "cd"},
];

describe("test library", () => {
  let library, findBook, clearData, pushData;
  beforeEach(() => {
    library = new classLibrary();
    findBook = library.findBook;
    addBook = library.addBook;
    pushData = library.pushData;
  })

  it("init test", () => {
    expect(library).to.be.ok;
  });
  
  it("find book by id", () => {
    expect(findBook(books, 'id', "1")).to.be.a('object');
    expect(findBook(books, 'id', '1')).to.be.equal(books[0]);
  })
  it("find books by author", () => {
    expect(findBook(books, 'author', "aaa")).to.be.a('array');
    expect(findBook(books, 'author', "aaa")).to.eql([books[0],books[2]]);
  })
  it("find books by title", () => {
    expect(findBook(books, 'title', "cd")).to.be.a('array');
    expect(findBook(books, 'title', "cd")).to.eql([books[2],books[3]]);
  })

  it("push data to library", () => {
    expect(pushData(books)).to.eql(books);
  })

  it("addBook to library", () => {
    expect(addBook({"author": "first", "title": "first"})).to.eql({"id": "1", "author": "first", "title": "first"});
    expect(library.books).to.deep.include({"id": "1", "author": "first", "title": "first"});
  })
})
