import {ApolloServer} from 'apollo-server'
import 'dotenv/config'
import { typeDefs } from './graphql/TypeDefs/typedefs.js'
import { resolvers } from './graphql/Resolvers/resolvers.js'
import Connection from './db/connection.js'

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const port = process.env.PORT
const url = process.env.MONGO_URL

server.listen(port, () => {
    Connection(url)
    console.log(`Server is up and running on http://localhost:${port}`)
})