import { InMemoryCache, ApolloClient, merge } from '@apollo/client';
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';

const cache = new InMemoryCache({
  typePolicies: {
		Query: {
			fields: {
				restaurants: {
					merge(existing = [], incoming) {
						// Remove duplicated entries with reduce
						// An object cannot have 2 times the same key
						// At the end we convert back the object to an array
            const withoutDuplicateObj = [ ...existing, ...incoming ]
							.reduce((acc, curr) => ({
							...acc, 
							[curr.__ref]: curr
						}), {});
						return Object.values(withoutDuplicateObj);
					}
				} 
			}
		}
	}
});

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
