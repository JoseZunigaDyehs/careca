import React from 'react'
import GlobalStyle from './GlobalStyle'
import { CardProvider } from 'context'
import { Board } from 'screens'

function App() {
  return (
    <>
      <GlobalStyle />
      <CardProvider>
        <Board />
      </CardProvider>
    </>
  )
}

export default App
