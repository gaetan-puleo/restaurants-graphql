import React, { useEffect, useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import client, { initPersistCache } from './config/apolloClient';
import styles from './App.module.scss';
import Main from './controllers/Main';

function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (!loaded) {
      initPersistCache().then(setLoaded(true));
    }
  }, [loaded]);

  if (!loaded) {
    return <div>App loading ...</div>;
  }
  return (
    <ApolloProvider client={client}>
      <div className={styles.app}>
        <Main />
      </div>
    </ApolloProvider>
  );
}

export default App;
