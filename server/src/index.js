import  {ApolloServer, gql } from 'apollo-server';
import fs from 'fs';

// A map of functions which return data for the schema.
import resolvers from './resolvers.js';
// The GraphQL schema
const schema = fs.readFileSync('./schema.graphql', {encoding: 'utf8'})
const typeDefs = gql(schema);


const server = new ApolloServer({
  typeDefs,
  resolvers,
	cors: true
});

server.listen({port: 9000}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
