import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { GlobalStyle } from './global.styles'
import { About } from './Pages/About/About'
import { Work } from './Pages/Work/Work'
import { ContactPage } from './Pages/Contact/Contact'
import { Home } from './Pages/Home/Home'
import './App.css'

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/work' component={Work} />
        <Route exact path='/contact' component={ContactPage} />
      </Switch>
    </Router>
  )
}

export default App
