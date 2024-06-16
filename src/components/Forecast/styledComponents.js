import styled from 'styled-components'

export const HourWeatherContainer = styled.ul`
  padding: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const HourWeatherListItem = styled.li`
  list-style-type: none;
  background-image: ${props =>
    props.isDarkTheme
      ? 'linear-gradient(to bottom, #CE0566, #CE0566,  #E1418E, #F99E6B)'
      : 'linear-gradient(to right, #DBD7D6, #A29E9B)'};
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
  padding: 10px;
  border-radius: 7px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
`
export const Time = styled.h4``

export const Temperature = styled.p``
