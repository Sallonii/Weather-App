import {Component} from 'react'
import WeatherForecast from './components/WeatherForecast'

import ThemeContext from './context/ThemeContext'

import './App.css'

class App extends Component {
  state = {isDarkTheme: false}

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <WeatherForecast />
      </ThemeContext.Provider>
    )
  }
}

export default App
