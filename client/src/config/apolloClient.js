import { InMemoryCache, ApolloClient } from '@apollo/client';
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';

const cache = new InMemoryCache();

export const initPersistCache = () => persistCache({
  cache,
  storage: new LocalStorageWrapper(window.localStorage),
});

// TO THE MOON!!
// (Bitcoin, the Apollo mission, do you get it??)
// sorry I won't do it again...
const client = new ApolloClient({
  cache,
  uri: 'http://localhost:9000/graphql',
});

export default client;
