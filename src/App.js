import './App.css';
import React from "react"
import Popular from "./components/Popular"
import "../src/index.css"
import Battle from "./components/Battle"
import { ThemeProvider } from "../src/contexts/theme"
import Nav from "./components/Nav"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Results from "./components/Results"

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
    const name = ''
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              <Nav />
              <Route exact path='/' component={Popular}></Route>
              <Route exact path='/battle' component={Battle}></Route>
              <Route path='/battle/results' component={Results}></Route>
            </div>
          </div>
        </ThemeProvider>
      </Router>

    )
  }

}

export default App;
