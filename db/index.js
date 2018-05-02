
const authors = [
  { name: "Marijn Haverbeke", age: 39, id: 1 },
  { name: "Addy Osmani", age: 43, id: 2 },
  { name: "Axel Rauschmayer", age: 27, id: 3 },
  { name: "Eric Elliott", age: 34, id: 4 },
  { name: "Nicholas C. Zakas", age: 44, id: 5 },
  { name: "Kyle Simpson", age: 34, id: 6 },
  { name: "Richard E. Silverman", age: 43, id: 7 },
  { name: "Glenn Block, et al.", age: 23, id: 8 }
]

const books = [
  {
    "id": "1",
    "title": "Eloquent JavaScript, Second Edition",
    "subtitle": "A Modern Introduction to Programming",
    "authorId": 1,
    "published": "2014-12-14T00:00:00.000Z",
    "publisher": "No Starch Press",
    "pages": 472,
    "description": "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
    "website": "http://eloquentjavascript.net/"
  },
  {
    "id": "2",
    "title": "Learning JavaScript Design Patterns",
    "subtitle": "A JavaScript and jQuery Developer's Guide",
    "authorId": 2,
    "published": "2012-07-01T00:00:00.000Z",
    "publisher": "O'Reilly Media",
    "pages": 254,
    "description": "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
    "website": "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/"
  },
  {
    "id": "4",
    "title": "Speaking JavaScript",
    "subtitle": "An In-Depth Guide for Programmers",
    "authorId": 3,
    "published": "2014-02-01T00:00:00.000Z",
    "publisher": "O'Reilly Media",
    "pages": 460,
    "description": "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
    "website": "http://speakingjs.com/"
  },
  {
    "id": "5",
    "title": "Programming JavaScript Applications",
    "subtitle": "Robust Web Architecture with Node, HTML5, and Modern JS Libraries",
    "authorId": 4,
    "published": "2014-07-01T00:00:00.000Z",
    "publisher": "O'Reilly Media",
    "pages": 254,
    "description": "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
    "website": "http://chimera.labs.oreilly.com/books/1234000000262/index.html"
  },
  {
    "id": "6",
    "title": "Understanding ECMAScript 6",
    "subtitle": "The Definitive Guide for JavaScript Developers",
    "authorId": 5,
    "published": "2016-09-03T00:00:00.000Z",
    "publisher": "No Starch Press",
    "pages": 352,
    "description": "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
    "website": "https://leanpub.com/understandinges6/read"
  },
  {
    "id": "7",
    "title": "You Don't Know JS",
    "subtitle": "ES6 & Beyond",
    "authorId": 6,
    "published": "2015-12-27T00:00:00.000Z",
    "publisher": "O'Reilly Media",
    "pages": 278,
    "description": "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the 'You Don’t Know JS' series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.",
    "website": "https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20&%20beyond"
  },
  {
    "id": "8",
    "title": "Git Pocket Guide",
    "subtitle": "A Working Introduction",
    "authorId": 7,
    "published": "2013-08-02T00:00:00.000Z",
    "publisher": "O'Reilly Media",
    "pages": 234,
    "description": "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git experience.",
    "website": "http://chimera.labs.oreilly.com/books/1230000000561/index.html"
  },
  {
    "id": "9",
    "title": "Designing Evolvable Web APIs with ASP.NET",
    "subtitle": "Harnessing the Power of the Web",
    "authorId": 8,
    "published": "2014-04-07T00:00:00.000Z",
    "publisher": "O'Reilly Media",
    "pages": 538,
    "description": "Design and build Web APIs for a broad range of clients—including browsers and mobile devices—that can adapt to change over time. This practical, hands-on guide takes you through the theory and tools you need to build evolvable HTTP services with Microsoft’s ASP.NET Web API framework. In the process, you’ll learn how design and implement a real-world Web API.",
    "website": "http://chimera.labs.oreilly.com/books/1234000001708/index.html"
  }
]


module.exports = {
  getAllBooks: function () {
    return books
  },

  getAllBooksByAuthorId: function (authorId) {
    return books.filter(book => book.authorId === authorId)
  },

  getAuthorFriends: function (authorId) {
    return authors.filter(author => author.id !== authorId)
  },

  getBookById: function (bookId) {
    return books.find(book => book.id === bookId)
  },

  getBookByTitle: function (name) {
    return books.filter(book => book.title.startsWith(name))
  },

  getAllAuthors: function () {
    return authors
  },

  getAuthorById: function (authorId) {
    return authors.find(author => author.id === authorId)
  },

  getAuthorByName: function (name) {
    return authors.filter(author => author.name.startsWith(name))
  }

}