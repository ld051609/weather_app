import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen';
import TipScreen from '../components/TipScreen';
import ReportScreen from '../components/ReportScreen';
import ClosetScreen from '../components/ClosetScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StateProvider } from '../contexts/StateContext';  // Import the StateProvider

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <StateProvider>  {/* Wrap the navigator in the StateProvider */}
      <Tab.Navigator styles={styles.container} screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Closet" component={ClosetScreen} />
        <Tab.Screen name="Tips" component={TipScreen} />
        <Tab.Screen name="Report" component={ReportScreen} />
      </Tab.Navigator>
    </StateProvider>
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
