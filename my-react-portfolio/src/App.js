import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { GlobalStyle } from './global.styles'
import Header from './components/HeaderMain/Header'
import { About } from './Pages/About/About'
import { Work } from './Pages/Work/Work'
import { Contact } from './Pages/Contact/Contact'
import { Home } from './Pages/Home/Home'
import './App.css'

const App = () => {
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
