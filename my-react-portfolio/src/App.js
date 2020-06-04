import React from 'react'
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom'
import { GlobalStyle } from './global.styles'
import Header from './components/Header';
import './App.css'

const App = () {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/work' component={Work} />
        <Route exact path='/about' component={Contact} />
      </Switch>
    </Router>
  )
}

export default App
