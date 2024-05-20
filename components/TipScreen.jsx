import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

const TipScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Eco-friendly Tips</Text>
      
      <View style={styles.section}>
        <Text style={styles.subheading}>Energy Saving</Text>
        <Text style={styles.tip}>• Switch to LED Bulbs</Text>
        <Text style={styles.tip}>• Unplug Devices</Text>
        <Text style={styles.tip}>• Use Smart Power Strips</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Water Conservation</Text>
        <Text style={styles.tip}>• Fix Leaks</Text>
        <Text style={styles.tip}>• Shorter Showers</Text>
        <Text style={styles.tip}>• Install Low-flow Fixtures</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Waste Reduction</Text>
        <Text style={styles.tip}>• Recycle</Text>
        <Text style={styles.tip}>• Compost</Text>
        <Text style={styles.tip}>• Reusable Bags</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Sustainable Transportation</Text>
        <Text style={styles.tip}>• Carpool</Text>
        <Text style={styles.tip}>• Public Transit</Text>
        <Text style={styles.tip}>• Bike or Walk</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Eco-friendly Shopping</Text>
        <Text style={styles.tip}>• Buy Local</Text>
        <Text style={styles.tip}>• Choose Eco-friendly Products</Text>
        <Text style={styles.tip}>• Reduce Packaging</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Home Improvements</Text>
        <Text style={styles.tip}>• Insulate Your Home</Text>
        <Text style={styles.tip}>• Install Solar Panels</Text>
        <Text style={styles.tip}>• Energy-efficient Appliances</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Dietary Choices</Text>
        <Text style={styles.tip}>• Reduce Meat Consumption</Text>
        <Text style={styles.tip}>• Eat Seasonal</Text>
        <Text style={styles.tip}>• Minimize Food Waste</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Gardening and Outdoors</Text>
        <Text style={styles.tip}>• Plant Trees</Text>
        <Text style={styles.tip}>• Grow Your Own Food</Text>
        <Text style={styles.tip}>• Use Organic Fertilizers</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 10,
    marginTop: 10,

  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    backgroundColor: '#444546',
    color: 'white',
    padding: 5,
    paddingLeft: 15
  },
  tip: {
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 20,
  },
});

export default TipScreen;
