import './App.css';
import React from "react"
import Popular from "./components/Popular"
import "../src/index.css"
import Battle from "./components/Battle"
import { ThemeProvider } from "../src/contexts/theme"
import Nav from "./components/Nav"
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: 'light',
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === 'light' ? 'dark' : 'light'
        }))
      }
    }
  }
  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              <Nav />
              <Route exact path='/' component={Popular}></Route>
              <Route path='/battle' component={Battle}></Route>
            </div>
          </div>
        </ThemeProvider>
      </Router>

    )
  }

}

export default App;
