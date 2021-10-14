import './App.css';
import React from "react"
import Popular from "./components/Popular"
import "../src/index.css"
import Battle from "./components/Battle"
import { ThemeProvider } from "../src/contexts/theme"
import Nav from "./components/Nav"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Results from "./components/Results"

class App extends React.Component {
  
  state = {
    theme: 'light',
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === 'light' ? 'dark' : 'light'
      }))
    }
  }
  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              <Nav />
              <Switch>
                <Route exact path='/' component={Popular}></Route>
                <Route exact path='/battle' component={Battle}></Route>
                <Route path='/battle/results' component={Results}></Route>
                <Route render={() => <h1>404 Page</h1>}/>
              </Switch>
            </div>
          </div>
        </ThemeProvider>
      </Router>

    )
  }

}

export default App;
