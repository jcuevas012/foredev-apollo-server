const db = require('../db')
const chalk = require('chalk')

module.exports = {
  Query: {
    books: function(rootValue, args){
      return db.getAllBooks()
    },
    book: function(rootValue, args){
      return db.getBookById(args.id)
    },
    bookByTitle: function (rootValue, { title }) {
      return db.getBookByTitle(title)
    },

    authors: function () {
      return db.getAllAuthors()
    },
    author: function (rootValue, { id }) {
      return db.getAuthorById(id)
    },
    authorByName: function (rootValue, { name }) {
      return db.getAuthorByName(title)
    }
  },

  // typeDefs resolves graph relationships

  Book: {
    author(book) {
      console.log(`${chalk.green('resolving author graph in  book ')}`)
      return db.getAuthorById(book.authorId)
    }
  },

  Author: {
    books(author) {
      console.log(`${chalk.green('resolving books graph in  author ')}`)
      return db.getAllBooksByAuthorId(author.id)
    },

    friends(author) {
      console.log(`${chalk.green('resolving friends graph in  author ')}`)
      return db.getAuthorFriends(author.id)
    }
  }

}



/*
  bookingDetails/:boookindId
  payments/:boookindId
  

*/