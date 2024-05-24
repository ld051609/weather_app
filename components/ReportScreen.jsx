import { SafeAreaView, StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
// this page allows user to upload their carbon footprint
const ReportScreen = () => {
  const triviaData = [
    {
      question: 'What is the highest temperature ever recorded on Earth?', answer: "134 °F (56.7 °C) in Furnace, Creek Ranche, California, USA, on July 10, 1913.", state: false
    },
    {
      question: "What causes lighting?", answer: "Lightning is caused by discharge of electricity from a thunderstorm. It occurs wehn the electric charges within the cloud become unbaclanced.", state: false
    },
    {
      question: "What is the most rainfall ever recorded in a single year?", answer: "467.4 inches (11,871 mm) at Mawsynram, India, in 1985.", state: false
    },
    {
      question: "What scale is used to measure the intensity of hurricanes?", answer: "The Saffir-Simpson Hurricane Wind Scale.", state: false
    },
    {
      question: "What is the name of the phenomenon where it rains while the sun is shining?", answer: "A sunshower.", state: false
    },
    {
      question: "What is the term for a long period of abnormallu low rainfall?", answer: "A drought.", state: false
    },
    {
      question: "Which layer of the Earth's atmosphere contains the ozone layer?", answer: "The stratosphere.", state: false
    },
    {
      question: "What instrument is used to measure atmpspheric pressure?", answer: "A barometer.", state: false
    },
    {
      question: "What is a tornado over water called", answer: "A waterspout.", state: false
    },
    {
      question: "What is the term for a weather event characterized by the rapid descent of coid air, often brining strong winds and storms?" , answer: "A downburst.", state: false
    }
  ]
  const onPress = (index) => {
    triviaData[index].state = !triviaData[index].state
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={styles.heading}>Trivia Area</Text>
        </View>

        <View>
          {triviaData.map((data, index) => (
            <View key={index} style={styles.question}>
              <Text>{data.question}</Text>
              <TouchableOpacity style={styles.button}  onPress={() => onPress(index)}>
                <Text>Show Answer!!</Text>
                {data.state && <Text>Answer: {data.answer}</Text>}
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
      


    </SafeAreaView>
  )
}

export default ReportScreen

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  question: {
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
  },
  button:{
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    color: 'white',
    textAlign: 'center',
  }

})