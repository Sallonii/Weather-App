import {Component} from 'react'
import './index.css'
import {
  FaSearch,
  FaMoon,
  FaSun,
  FaTemperatureLow,
  FaRegMoon,
  FaSadCry,
} from 'react-icons/fa'
import {IoLocation, IoSpeedometer} from 'react-icons/io5'
import {CgCalendarDates} from 'react-icons/cg'
import {WiHumidity} from 'react-icons/wi'
import {MdVisibility} from 'react-icons/md'
import {format} from 'date-fns'
import Loader from 'react-loader-spinner'

import Forecast from '../Forecast'
import ThemeContext from '../../context/ThemeContext'
import {
  MainContainer,
  HeaderContainer,
  MainHeading,
  Logo,
  InputContainer,
  InputElement,
  ReactIcon,
  ReactThemeIcon,
  LoaderContainer,
  NowCardContainer,
  WeatherStatsLi,
  SunriseSunsetContainer,
} from './styledComponents'

// Constants to manage API request states
const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class WeatherForecast extends Component {
  state = {
    weatherData: {},
    weatherStatus: apiConstants.initial,
    currentDate: '',
    currentLocation: 'Hyderabad',
    location: '',
  }

  componentDidMount() {
    this.getWeatherReport()
  }

  // Handle input change
  onChangingInput = event => {
    this.setState({location: event.target.value})
  }

  // Handle search action
  onClickingSearch = () => {
    const {location} = this.state
    this.setState({currentLocation: location}, this.getWeatherReport)
  }

  // Handle Enter key press for search
  handleKeyDown = event => {
    if (event.key === 'Enter') {
      this.onClickingSearch()
    }
  }

  // Convert Unix timestamp to 12-hour time format
  convertUnixTo12HourFormat = unixValue => {
    const date = new Date(unixValue * 1000)
    this.setState({currentDate: format(date, 'EEEE dd, MMM')})

    let hours = date.getHours()
    let minutes = date.getMinutes()

    const ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12 || 12
    minutes = minutes < 10 ? `0${minutes}` : minutes

    return `${hours}:${minutes} ${ampm}`
  }

  // Success callback to handle API response data
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
        temp: `${parseInt(data.main.temp, 10)}°c`,
      },
      sys: {
        sunrise: this.convertUnixTo12HourFormat(data.sys.sunrise),
        sunset: this.convertUnixTo12HourFormat(data.sys.sunset),
        country: data.sys.country,
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

  // Fetch weather data from API
  getWeatherReport = async () => {
    this.setState({weatherStatus: apiConstants.inProgress})
    const {currentLocation} = this.state

    const api = `https://api.openweathermap.org/data/2.5/weather?q=${currentLocation}&appid=32cc29d9a651c19326f4a3682fde1f50&units=metric`
    const response = await fetch(api)

    if (response.status === 404) {
      this.setState({weatherStatus: apiConstants.failure})
    } else if (response.ok) {
      const data = await response.json()
      this.onSuccess(data)
    }
  }

  renderMainPage = () => (
    <ThemeContext.Consumer>
      {({isDarkTheme}) => {
        const {weatherData, currentDate} = this.state
        const {
          main,
          weather,
          lat,
          lon,
          name,
          visibility,
          sys,
          wind,
        } = weatherData
        const {iconId, status} = weather
        const iconUrl = `http://openweathermap.org/img/wn/${iconId}.png`

        return (
          <div className="content-main-container">
            <div className="now-and-future-container">
              <NowCardContainer isDarkTheme={isDarkTheme}>
                <div className="now-and-icon-container">
                  <p>Now</p>
                  <img alt="weather icon" src={iconUrl} />
                </div>
                <h1>{main.temp}</h1>
                <p>{status}</p>
                <hr />
                <div className="icon-and-text">
                  <CgCalendarDates />
                  <p>{currentDate}</p>
                </div>
                <div className="icon-and-text">
                  <IoLocation />
                  <p>
                    {name},{sys.country}
                  </p>
                </div>
              </NowCardContainer>
              <NowCardContainer isDarkTheme={isDarkTheme}>
                <h1>Wind</h1>
                <p>Speed: {wind.speed}</p>
                <p>Degree: {wind.deg}</p>
              </NowCardContainer>
            </div>
            <div className="weather-stats-container">
              <ul className="weather-ul-container">
                <WeatherStatsLi isDarkTheme={isDarkTheme}>
                  <p>Humidity</p>
                  <div className="weather-stats-card-child">
                    <WiHumidity fontSize="30px" />
                    <p>{main.humidity}%</p>
                  </div>
                </WeatherStatsLi>
                <WeatherStatsLi isDarkTheme={isDarkTheme}>
                  <p>Visibility</p>
                  <div className="weather-stats-card-child">
                    <MdVisibility fontSize="30px" />
                    <p>{visibility}</p>
                  </div>
                </WeatherStatsLi>
                <WeatherStatsLi isDarkTheme={isDarkTheme}>
                  <p>Feels Like</p>
                  <div className="weather-stats-card-child">
                    <FaTemperatureLow fontSize="30px" />
                    <p>{main.feelsLike}</p>
                  </div>
                </WeatherStatsLi>
                <WeatherStatsLi isDarkTheme={isDarkTheme}>
                  <p>Pressure</p>
                  <div className="weather-stats-card-child">
                    <IoSpeedometer fontSize="30px" />
                    <p>{main.pressure}hPa</p>
                  </div>
                </WeatherStatsLi>
              </ul>
              <SunriseSunsetContainer isDarkTheme={isDarkTheme}>
                <p className="sun-heading">Sunrise & Sunset</p>
                <div className="sunrise-sunset-item">
                  <div className="sun-item">
                    <FaSun fontSize="30px" />
                    <div>
                      <h4>Sunrise</h4>
                      <p>{sys.sunrise}</p>
                    </div>
                  </div>
                  <div className="sun-item">
                    <FaRegMoon fontSize="30px" />
                    <div>
                      <h4>Sunset</h4>
                      <p>{sys.sunset}</p>
                    </div>
                  </div>
                </div>
              </SunriseSunsetContainer>
              <Forecast lat={lat} lon={lon} />
            </div>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderWeather = () => (
    <ThemeContext.Consumer>
      {({isDarkTheme}) => (
        <MainContainer isDarkTheme={isDarkTheme}>
          <MainHeading isDarkTheme={isDarkTheme}>Today Highlights</MainHeading>
          {this.renderMainPage()}
        </MainContainer>
      )}
    </ThemeContext.Consumer>
  )

  renderLoader = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <LoaderContainer isDarkTheme={isDarkTheme} data-testid="loader">
            <Loader type="ThreeDots" color="#3b82f6" height={50} width={50} />
            <p>Fetching Details</p>
          </LoaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderFailure = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <LoaderContainer isDarkTheme={isDarkTheme}>
            <FaSadCry fontSize="50px" />
            <h1>Enter Valid City</h1>
          </LoaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  getWeather = () => {
    const {weatherStatus} = this.state
    switch (weatherStatus) {
      case apiConstants.success:
        return this.renderWeather()
      case apiConstants.inProgress:
        return this.renderLoader()
      case apiConstants.failure:
        return this.renderFailure()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {({isDarkTheme, toggleTheme}) => {
          const onClickingThemeIcon = () => {
            toggleTheme()
          }

          return (
            <>
              <HeaderContainer isDarkTheme={isDarkTheme}>
                <Logo
                  src="https://res.cloudinary.com/dwj8ezxgi/image/upload/v1718458392/weather-icon_fmkhxd.png"
                  alt="logo"
                />
                <InputContainer>
                  <InputElement
                    onChange={this.onChangingInput}
                    onKeyDown={this.handleKeyDown}
                    placeholder="Enter City Name, Code..."
                  />
                  <ReactIcon onClick={this.onClickingSearch}>
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
              {this.getWeather()}
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default WeatherForecast
