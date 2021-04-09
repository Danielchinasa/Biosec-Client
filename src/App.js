import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './Pages/Homepage'
import Update from './Components/Update'
import Create from './Components/Create'
import Nav from './Components/Nav'
import Archive from './Pages/Archive'
import Logs from './Pages/Logs'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/employee/create' component={Create} exact />
          <Route path='/employee/:id' component={Update} exact />
          <Route path='/archives' component={Archive} exact />
          <Route path='/logs' component={Logs} exact />
        </Switch>
      </div>
    </Router>
  )
}

export default App
