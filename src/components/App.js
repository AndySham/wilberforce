import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Nav from './Nav'
import Content from './Content'
import Media from './Media'
import './App.css'

function App() {
    return (
        <Router>
            <div id="app">
                <Nav/>
                <Content/>
                <Media/>
            </div>
        </Router>
    )
}

export default App
