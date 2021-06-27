import React from 'react';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';

import styles from './App.module.scss';
import Main from './controllers/Main';

// TO THE MOON!! 
// (Bitcoin, the Apollo mission, do you get it??) 
// sorry I won't do it again...
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:9000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className={styles.app}>
        <Main />
      </div>
    </ApolloProvider>
  );
}

export default App;
