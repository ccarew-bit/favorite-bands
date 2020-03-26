import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import PinkFloyd from './pages/PinkFloyd'
import LedZeppelin from './pages/LedZeppelin'
import JimiHendrix from './pages/JimiHendrix'

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pinkfloyd">Pink Floyd</Link>
          </li>
          <li>
            <Link to="/jimihendrix">Jimi Hendrix</Link>
          </li>
          <li>
            <Link to="/ledZeppelin">Led Zeppelin</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/pinkfloyd" component={PinkFloyd}></Route>
        <Route exact path="/jimihendrix" component={JimiHendrix}></Route>
        <Route exact path="/ledZeppelin" component={LedZeppelin}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
