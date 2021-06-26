const { ApolloServer, gql } = require('apollo-server');
const fs =  require('fs')
// The GraphQL schema
const schema = fs.readFileSync('./schema.graphql', {encoding: 'utf8'})
const typeDefs = gql(schema);

// A map of functions which return data for the schema.
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({port: 9000}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
