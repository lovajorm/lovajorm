import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'

function App() {
    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Route path='/'>
                        <Home />
                    </Route>
                    {/* <Route path='/projects'>
                        <Projects />
                    </Route>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/Contact'>
                        <Contact />
                    </Route> */}
                </Switch>
            </Router>
        </div>
    )
}

export default App
