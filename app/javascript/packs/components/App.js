import React from 'react'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'

const App = () => {
  const domain = 'http://localhost:3000'

  return(
    <div id='app'>
      <Nav />
      <Main domain={domain} />
      <Footer />
    </div>
  )
}

export default App