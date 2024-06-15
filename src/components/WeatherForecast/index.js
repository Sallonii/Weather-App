import {Component} from 'react'

import {FaSearch, FaMoon, FaSun} from 'react-icons/fa'

import ThemeContext from '../../context/ThemeContext'

import {
  MainContainer,
  HeaderContainer,
  Logo,
  InputContainer,
  InputElement,
  ReactIcon,
  ReactThemeIcon,
  ContentContainer,
  LocationContainer,
  LocationContentContainer,
  NowTextContainer,
  NowText,
  NowIcon,
  Temperature,
  WeatherStatus,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class WeatherForecast extends Component {
  state = {weatherData: {}, weatherStatus: apiConstants.initial}

  componentDidMount() {
    this.getWeatherReport()
  }

  convertUnixTo12HourFormat = unixValue => {
    const date = new Date(unixValue * 1000)

    let hours = date.getHours()
    let minutes = date.getMinutes()

    const ampm = hours > 12 ? 'PM' : 'AM'
    hours %= 12
    hours = hours !== 0 ? hours : 12

    minutes = minutes < 10 ? `${0}minutes` : minutes

    const timeString = `${hours}:${minutes} ${ampm}`
    return timeString
  }

  onSuccess = data => {
    const formattedData = {
      lon: data.coord.lon,
      lat: data.coord.lat,
      name: data.name,
      visibility: `${data.visibility / 1000} Km`,
      main: {
        feelsLike: data.main.feels_like,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temp: `${parseInt(data.main.temp)}°c`,
      },
      sys: {
        sunrise: this.convertUnixTo12HourFormat(data.sys.sunrise),
        sunset: this.convertUnixTo12HourFormat(data.sys.sunset),
      },
      weather: {
        description: data.weather[0].description,
        iconId: data.weather[0].icon,
        status: data.weather[0].main,
      },
      wind: {
        speed: data.wind.speed,
        deg: data.wind.deg,
      },
    }
    this.setState({
      weatherData: formattedData,
      weatherStatus: apiConstants.success,
    })
  }

  getWeatherReport = async () => {
    const options = {
      method: 'GET',
    }

    const api = `https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=32cc29d9a651c19326f4a3682fde1f50&units=metric`
    const response = await fetch(api, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess(data)
    }
  }

  renderHeader = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value

        const onClickingThemeIcon = () => {
          toggleTheme()
        }

        return (
          <HeaderContainer isDarkTheme={isDarkTheme}>
            <Logo
              src="https://res.cloudinary.com/dwj8ezxgi/image/upload/v1718458392/weather-icon_fmkhxd.png"
              alt="logo"
            />
            <InputContainer>
              <InputElement />
              <ReactIcon>
                <FaSearch />
              </ReactIcon>
            </InputContainer>
            <ReactThemeIcon
              isDarkTheme={isDarkTheme}
              onClick={onClickingThemeIcon}
            >
              {isDarkTheme ? <FaSun /> : <FaMoon />}
            </ReactThemeIcon>
          </HeaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderMainPage = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {weatherData} = this.state

        console.log(weatherData)
        const {main, weather} = weatherData
        const {iconId, status} = weather
        const iconUrl = `http://openweathermap.org/img/wn/${iconId}.png`

        return (
          <ContentContainer>
            <LocationContainer>
              <LocationContentContainer isDarkTheme={isDarkTheme}>
                <NowTextContainer>
                  <NowText isDarkTheme={isDarkTheme}>Now</NowText>
                  <NowIcon alt="now" src={iconUrl} />
                </NowTextContainer>
                <Temperature isDarkTheme={isDarkTheme}>{main.temp}</Temperature>
                <WeatherStatus>{status}</WeatherStatus>
                <hr />
              </LocationContentContainer>
            </LocationContainer>
          </ContentContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderWeather = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <MainContainer isDarkTheme={isDarkTheme}>
            {this.renderHeader()}
            {this.renderMainPage()}
          </MainContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  getWeather = () => {
    const {weatherStatus} = this.state
    switch (weatherStatus) {
      case apiConstants.success:
        return this.renderWeather()
      default:
        return null
    }
  }

  render() {
    return <>{this.getWeather()}</>
  }
}

export default WeatherForecast
