const express = require('express')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const schema = require('./schema')

const port = process.env.PORT || 3000

const app =  express()

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(port, (req, res) => {
    console.log(`${chalk.green('[foredev-apollo-server]')} starte on port ${port}`)
})