import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0627' : 'transparent')};
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

export const ContentContainer = styled.div``

export const LocationContainer = styled.div``

export const LocationContentContainer = styled.div`
  background-image: linear-gradient(
    to top,
    ${props => (props.isDarkTheme ? '#F25E8B' : '#9CA3AA')},
    red
  );
  width: 100%;
  border-radius: 7px;
  @media screen and (min-width: 500px) {
    width: 30%;
  }
  margin: 20px;
  padding: 10px;
`
export const NowTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NowText = styled.p`
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
  font-weight: 600;
`

export const NowIcon = styled.img``

export const Temperature = styled.h1`
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`
export const WeatherStatus = styled.p``
