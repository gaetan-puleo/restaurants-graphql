import React from 'react'
import styles from './App.module.css'

function App () {
  return (
    <div className={styles.test}>
      <h2>Welcome to React App</h2>
      <h3>Date : {new Date().toDateString()}</h3>
    </div>
  )
}

export default App
