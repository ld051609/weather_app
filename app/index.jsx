import React, { createContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'; 
import HomeScreen from '../components/HomeScreen';
import TipScreen from '../components/TipScreen';
import ReportScreen from '../components/ReportScreen'; 
import ClosetScreen from '../components/ClosetScreen';
const Stack = createStackNavigator();

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const StateContext = createContext();

function MyTabs() {
  const [imgIcon, setImgIcon] = React.useState('');
  return (
    <Tab.Navigator styles={styles.container} screenOptions={{headerShown: false}}>
      <StateContext.Provider value={ {imgIcon, setImgIcon}}>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Closet" component={ClosetScreen}/>
      </StateContext.Provider>
      <Tab.Screen name="Tips" component={TipScreen} />
      <Tab.Screen name="Report" component={ReportScreen} />



    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F51B5',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default MyTabs;
