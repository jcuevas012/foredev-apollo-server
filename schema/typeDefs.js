const typeDefs = `
  type Book {
    id: ID!
    title: String
    subtitle: String
    authorId: Int
    author: Author
    published: String
    publisher: String
    pages: Int
    description: String
    website: String
  }


  type Author {
    id: ID!
    name: String
    age: String
    books: [Book]
    friends: [Author]
  }

  type Query {
    books: [Book]
    book(id: ID): Book
    bookByTitle(name: String): Book

    authors: [Author]
    author(id: ID): Author
    authorByName(name: String!): Author
  }
`


module.exports = typeDefs