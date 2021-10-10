import './App.css';
import React from "react"
import Popular from "./components/Popular"
import "../src/index.css"
import Battle from "./components/Battle"
import { ThemeProvider } from "../src/contexts/theme"

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
  render () {
    return (
      <ThemeProvider value={this.state}>
        <div className="container">
          <Battle />
        </div>
      </ThemeProvider>
    )
  }

}

export default App;
