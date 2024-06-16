# Weather Forecast App

This project is a **Weather Forecast** app built using React, providing real-time weather information for any location. The app features both current weather conditions and a 3-hourly forecast for the next 9 hours. Users can toggle between light and dark themes.

## Instructions to Run the Application Locally

### Prerequisites

- Node.js (version 12 or later)
- npm (version 6 or later)

### Set Up Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sallonii/Weather-App.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd weather-forecast-app
   ```
3. **Install the dependencies:**
   ```bash
   npm install
   ```
4. **Start the application:**
   ```bash
   npm start
   ```

The app should now be running on `http://localhost:3000`.

## Functionality

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities:

- Initially, the app should fetch and display weather details for a default location (e.g., Hyderabad).
- The user can search for weather details of other cities by entering the city name and clicking the search icon or pressing the Enter key.
- The app should display the current weather details including temperature, weather status, wind speed, humidity, visibility, feels-like temperature, pressure, sunrise, and sunset times.
- The app should also display a 3-hourly forecast for the next 9 hours.
- The theme of the app can be toggled between light and dark modes.

</details>

## Brief Description of the Approach and Technologies Used

### Approach

The Weather Forecast app is built using a modular approach with React components to ensure scalability and maintainability. The app fetches weather data from the OpenWeatherMap API, processes it, and displays it in a user-friendly interface. Key features include real-time weather updates, theme toggling between light and dark modes, and a responsive design to ensure compatibility across various devices.

### Technologies Used

- **React**: For building the user interface.
- **Styled-components**: For styling React components with CSS.
- **date-fns**: For date and time formatting.
- **uuid**: For generating unique IDs for list items.
- **OpenWeatherMap API**: For fetching weather data.

### Component Structure

- **WeatherForecast**: The main component that handles the overall weather data and user interactions.
- **Forecast**: A sub-component that handles the 3-hourly weather forecast.

## Known Issues or Limitations

- **API Key Security**: The API key for OpenWeatherMap is stored in the frontend, which is not secure for a production environment. It's recommended to use a backend server to handle API requests and protect the API key.
- **Error Handling**: Currently, the app handles some errors (e.g., city not found) but might need more comprehensive error handling for network issues or unexpected API responses.
- **Performance**: The app fetches data every time the user searches for a new location. Implementing caching or local storage could improve performance.
- **Accessibility**: While the app is designed to be user-friendly, additional accessibility improvements could be made to support screen readers and keyboard navigation.

## Future Enhancements

- **Unit Testing**: Add unit tests using Jest and React Testing Library.
- **Advanced Forecast**: Include daily forecasts for the upcoming week.
- **Localization**: Support multiple languages for a wider audience.
- **Enhanced UI**: Improve the user interface with animations and additional weather metrics.

Feel free to contribute to this project by submitting issues or pull requests on the [GitHub repository](https://github.com/Sallonii/Weather-App).
