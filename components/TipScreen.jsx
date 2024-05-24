import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

const TipScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>General Weather Tips</Text>
      
      <View style={styles.section}>
        <Text style={styles.subheading1}>Thunderstorms</Text>
        <Text style={styles.tip}>• <span style={styles.strong}>Stay Indoors:</span> When you hear thunder, go inside immeidately. Avoid sing electrical appliances and landline phones during a storm.</Text>
        <Text style={styles.tip}>• <span style={styles.strong}>Seek Shelter:</span> If you're caught outside, avoi open fields, hilltops, and tall objects like tree. Stay away from water bodies.</Text>

        

      </View>

      <View style={styles.section}>
        <Text style={styles.subheading1}>Heatwaves</Text>
        <Text style={styles.tip}>• <span style={styles.strong}>Stay Hydrated:</span> Drink plenty of water, even if you don't feel thirsty. Avoid drinks with caffeine or alcohol.</Text>
        <Text style={styles.tip}>• <span style={styles.strong}>Stay Cool:</span> Spend time in air-conditioned buildings. If you don't have AC, visit public places like malls or libraries. Wear lightweight, loose-fitting clothing.</Text>

        
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading1}>Snowstorms</Text>
        <Text style={styles.tip}>• <span style={styles.strong}>Stay Warm:</span> Dress in layers to retain body heat. Wear a har, gloves, and a scraf. Keep dry to prevent hypothermia.</Text>
        <Text style={styles.tip}>• <span style={styles.strong}>Stay Inside:</span> Avoid traveling unless absolutely necessary. If you must go out, make sure your vehicle is equipped with an emergency kit.</Text>
        
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading1}>Heavy Rain and Flooding</Text>
        <Text style={styles.tip}>• <span style={styles.strong}>Avoid Flooded Areas:</span> Never drive or walk through floodwaters. Just six inches of moving water can knock you down, and one foot of water can sweep away your vehicle</Text>
        <Text style={styles.tip}>• <span style={styles.strong}>Prepare Your HOme:</span> Clear gutters and drains to preven water accumulation. Move valuable items to higher levels in your home.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading1}>Extreme Cold</Text>
        <Text style={styles.tip}>• <span style={styles.strong}>Protect Exposed Skin:</span> Frostbite can occur quickly in extremely cold temperatures. Wear a hat, gloves, and scarf to cover exposed skin</Text>
        <Text style={styles.tip}>• <span style={styles.strong}>Insulate Your Home:</span> Keep your home heated and use extra insulation to retain warmth. Keep a supply of warm blankets and winter gear.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading1}>High Winds</Text>
        <Text style={styles.tip}>• <span style={styles.strong}>Secure Loose Objects:</span> High winds can turn everyday items into dangerous projectiles. Secure outdoor furniture, trash cans, and other loose items.</Text>
        <Text style={styles.tip}>• <span style={styles.strong}>Stay Away from Windows:</span> If inisde, keep away from windows to avoid injury from shattered glass. If outside, seek shelter immediately.</Text>
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
  subheading1: {
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
  strong:{
    fontWeight: 'bold',
    color: 'black'
  }
});

export default TipScreen;
