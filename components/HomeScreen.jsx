import { View, Text, Image, ScrollView, StyleSheet} from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SearchBar } from "react-native-elements";

// import {useContext, createContext} from 'react';

const HomeScreen = () => {
  const [searchPlace, setSearchPlace] = React.useState('');
  // const [locationData, setLocationData] = React.useState({});
  const [weatherData, setWeatherData] = React.useState({});
  const [weatherData5, setWeatherData5] = React.useState([]);
  // const [imgIcon, setImgIcon] = React.useContext(StateCo);
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchLocation(searchPlace);
    }, 1000); // Debounce time (milliseconds)

    return () => clearTimeout(delayDebounceFn);
  }, [searchPlace]);

  const fetchLocation = async (cityName) => {
    try {
      const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=be4489cf46a06b204f6270677dcf836f`);
      const data = await response.json();
      console.log('Location data', data);
      // fetch data api for 1 day only
      fetchWeather(data[0]['lat'], data[0]['lon']);
      // fetch data api for 5 days forecast
      fetchWeatherForecast(data[0]['lat'], data[0]['lon']);

    } catch (error) {
      console.log('Error fetching location data', error);
    }
  };

  const fetchWeather = async (lat, lon) => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=be4489cf46a06b204f6270677dcf836f`);
      const weatherData = await res.json();
      setWeatherData({
        'temperature': weatherData['current']['temp'],
        'condition': weatherData['current']['weather'][0]['description']
      })
      setImgIcon(`https://openweathermap.org/img/wn/${weatherData['current']['weather'][0]['icon']}@2x.png` )
      
    } catch (error) {
      console.log('Error fetching weather data', error);
      
    }
  }

  const fetchWeatherForecast = async (lat, lon) => {
    try {
      
      const res = await fetch(`api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=be4489cf46a06b204f6270677dcf836f`);
      const weatherData = await res.json();
      weatherData['list'].map((data) => {
        setWeatherData5([
          ...weatherData5,
          {
            'temperature': data['main']['temp'],
            'icon': data['weather'][0]['icon']  
          }
        ])
      });


    } catch (error) {
      console.log('Error fetching weather forecast data', error); 
      
    }
  }

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
            <Image></Image>
            <Text>{weatherData['temperature']}°F</Text>
            <Text>{weatherData['condition']}</Text>
          </View>
        </View>

        <View>
          <Text style={styles.heading1}>Weather Forecast (Next 5 Days)</Text>
          <View style={styles.weatherForecast}>
            <View style={styles.weatherForecastSub}>
              <Text>Mon</Text>
              <View style={styles.tempAndIcon}>
                <Text>{weatherData5[0]['temperature']}°F</Text>
                <Image></Image>

              </View>
            </View>

            <View style={styles.weatherForecastSub}>
              <Text>Tue</Text>
              <View style={styles.tempAndIcon}>
                <Text>{weatherData5[0]['temperature']}°°F</Text>
                <Image></Image>
              </View>
            </View>

            <View style={styles.weatherForecastSub}>
              <Text>Wed</Text>
              <View style={styles.tempAndIcon}>
                <Text>70°F</Text>
                <Image></Image>
              </View>
            </View>

            <View style={styles.weatherForecastSub}>
              <Text>Thu</Text>
              <View style={styles.tempAndIcon}>
                <Text>70°F</Text>
                <Image></Image>
              </View>
            </View>

            <View style={styles.weatherForecastSub}>
              <Text>Fri</Text>
              <View style={styles.tempAndIcon}>
                <Text>70°F</Text>
                <Image></Image>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container1:{
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


// Adjust for Mon, Tue
// Readjust the image section
// Open the api again