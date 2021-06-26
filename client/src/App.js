import React from 'react'
import {ApolloProvider, InMemoryCache, ApolloClient} from '@apollo/client'

import styles from './App.module.scss'
import Main from './pages/Main'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:9000/graphql"
});

function App () {
  return (
		<ApolloProvider client={client}>
			<div className={styles.app}>
				<Main />
			</div>
		</ApolloProvider>
  )
}

export default App
