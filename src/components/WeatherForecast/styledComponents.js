import styled from 'styled-components'

export const MainContainer = styled.div`
  background-image: ${props =>
    props.isDarkTheme
      ? 'linear-gradient(to right, #780f71, #2a0528, #110520)'
      : 'none'};
  min-height: 100vh;
  padding: 5px;
`

export const HeaderContainer = styled.div`
  min-height: 10vh;
  padding: 2px;
  padding-left: 10px;
  padding-right: 10px
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#161017' : '#DDDCE4')};

  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const MainHeading = styled.h1`
  background-image: ${props =>
    props.isDarkTheme
      ? 'linear-gradient(to right, #780f71, #2a0528, #110520)'
      : 'none'};
  margin: 0px;
  padding: 20px;
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`

export const Logo = styled.img`
  height: 50px;
`

export const InputContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  width: 80%;
  @media screen and (min-width: 767px) {
    width: 50%;
  }
  transition: width 0.8s ease;
  &:hover {
    width: 85%; /* Increase width slightly on hover */

    @media screen and (min-width: 767px) {
      width: 55%; /* Increase width slightly on hover for larger screens */
    }
  }
  margin-left: 5px;
  margin-right: 5px;
`

export const InputElement = styled.input`
  width: 80%;
  border: none;
  height: 100%;
  outline: none;
  font-size: 20px;
`
export const ReactIcon = styled.div`
  font-size: 15px;
  cursor: pointer;
  width: 40px;
  margin: 2px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 100px;
  transition: background-color 0.8s ease;
  &:hover {
    background-color: #fa4981;
    color: white;
  }
`
export const ReactThemeIcon = styled.div`
  font-size: 15px;
  margin: 2px;
  cursor: pointer;
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`
export const LoaderContainer = styled.div`
  min-height: 100vh;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: ${props =>
    props.isDarkTheme
      ? 'linear-gradient(to bottom, #CE0566, #CE0566,  #E1418E, #F99E6B)'
      : 'linear-gradient(to right, #DBD7D6, #A29E9B)'};
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`
export const NowCardContainer = styled.div`
  background-image: ${props =>
    props.isDarkTheme
      ? 'linear-gradient(to bottom, #CE0566, #CE0566,  #E1418E, #F99E6B)'
      : 'linear-gradient(to right, #DBD7D6, #A29E9B)'};
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
`
export const WeatherStatsLi = styled.li`
  list-style-type: none;
  background-image: ${props =>
    props.isDarkTheme
      ? 'linear-gradient(to bottom, #CE0566, #CE0566,  #E1418E, #F99E6B)'
      : 'linear-gradient(to right, #DBD7D6, #A29E9B)'};
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
  width: 150px;
  border-radius: 7px;
  padding: 5px;
  margin-top: 10px;
  height: 100px;
`
export const SunriseSunsetContainer = styled.div`
  background-image: ${props =>
    props.isDarkTheme
      ? 'linear-gradient(to bottom, #CE0566, #CE0566,  #E1418E, #F99E6B)'
      : 'linear-gradient(to right, #DBD7D6, #A29E9B)'};
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
  margin: 10px;
  padding: 10px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => (props.isDarkTheme ? '#CE0566' : 'black')};
`
