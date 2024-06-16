import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {
  HourWeatherContainer,
  HourWeatherListItem,
  Time,
  Temperature,
} from './styledComponents'

import './index.css'

class Forecast extends Component {
  state = {hourlyWeather: []}

  componentDidMount() {
    this.getForecast()
  }

  // Format date to 12-hour format
  getTimeFormat = dateObject => format(dateObject, 'hh:mm a')

  // Success callback to handle API response data
  onSuccess = data => {
    const list = data.list.slice(0, 3)
    const updatedData = list.map(eachItem => ({
      id: uuidv4(),
      temp: parseInt(eachItem.main.temp),
      iconId: eachItem.weather[0].icon,
      time: this.getTimeFormat(new Date(eachItem.dt_txt)),
    }))
    this.setState({hourlyWeather: updatedData})
  }

  // Fetch forecast data from API
  getForecast = async () => {
    const {lat, lon} = this.props
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lon=${lon}&lat=${lat}&appid=32cc29d9a651c19326f4a3682fde1f50&units=metric`
    const response = await fetch(apiUrl)
    if (response.ok) {
      const data = await response.json()
      this.onSuccess(data)
    }
  }

  render() {
    const {hourlyWeather} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <HourWeatherContainer>
              {hourlyWeather.map(eachItem => (
                <HourWeatherListItem
                  key={eachItem.id}
                  isDarkTheme={isDarkTheme}
                >
                  <Time>{eachItem.time}</Time>
                  <img
                    alt="icon"
                    src={`http://openweathermap.org/img/wn/${eachItem.iconId}.png`}
                  />
                  <Temperature>{eachItem.temp}°c</Temperature>
                </HourWeatherListItem>
              ))}
            </HourWeatherContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Forecast
