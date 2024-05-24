import React, { useEffect, useContext } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from 'react-native-elements';
import { StateContext } from '../contexts/StateContext';  // Import the StateContext

const HomeScreen = () => {
  const { imgIcon, setImgIcon } = useContext(StateContext);  // Access the context
  const [searchPlace, setSearchPlace] = React.useState('');
  const [weatherData, setWeatherData] = React.useState({});
  const [weatherData5, setWeatherData5] = React.useState([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchLocation(searchPlace);
    }, 1000); // Debounce time (milliseconds)

    return () => clearTimeout(delayDebounceFn);
  }, [searchPlace]);


  const fetchLocation = async (cityName) => {
    try {
      const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=b140760e91b6e86d318cf1518006b467`);
      const data = await response.json();
      console.log('Location data', data);
      // Fetch data api for 1 day only
      fetchWeather(data[0]['lat'], data[0]['lon']);
      // Fetch data api for 5 days forecast
      fetchWeatherForecast(data[0]['lat'], data[0]['lon']);
    } catch (error) {
      console.log('Error fetching location data', error);
    }
  };

  const fetchWeather = async (lat, lon) => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=b140760e91b6e86d318cf1518006b467`);
      const weatherData = await res.json();
      setWeatherData({
        'temperature': weatherData['current']['temp'],
        'condition': weatherData['current']['weather'][0]['description']
      });
      setImgIcon(`https://openweathermap.org/img/wn/${weatherData['current']['weather'][0]['icon']}@2x.png`);
    } catch (error) {
      console.log('Error fetching weather data', error);
    }
  };

  const fetchWeatherForecast = async (lat, lon) => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=b140760e91b6e86d318cf1518006b467`);
      const weatherData = await res.json();
      const forecastData = weatherData['list'].map((data) => ({
        'temperature': data['main']['temp'],
        'icon': data['weather'][0]['icon']
      }));
      setWeatherData5(forecastData);
    } catch (error) {
      console.log('Error fetching weather forecast data', error);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <SearchBar
          placeholder='Locations (i.e. Paris, Tokyo)'
          onChangeText={setSearchPlace}
          value={searchPlace}
        />

        <View>
          <Text style={styles.heading1}>Current Weather</Text>
          <View style={styles.container1}>
            <Image source={{ uri: imgIcon }} style={{ width: 50, height: 50 }} />
            <Text>{weatherData['temperature']}°F</Text>
            <Text>{weatherData['condition']}</Text>
          </View>
        </View>

        <View>
          <Text style={styles.heading1}>Weather Forecast (Next 5 Days)</Text>
          <View style={styles.weatherForecast}>
            {/* Spread the data into 5 days */}
            {weatherData5.map((weatherDataSub5, index) => (
              <View style={styles.weatherForecastSub} key={index}>
                {/* 1st line is the date */}
                <Text>Day {index + 1}</Text> 
                {/* Second line is icon image + temperature */}
                <View style={styles.tempAndIcon}>
                  <Text>{weatherDataSub5['temperature']}°F</Text>
                  <Image source={{ uri: weatherDataSub5['icon'] }} style={{ width: 50, height: 50 }} />
                </View>
              </View>
            ))}
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
  },
  heading1: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  weatherForecast: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
  },
  weatherForecastSub: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  tempAndIcon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    gap: 5,
  }
});

export default HomeScreen;
