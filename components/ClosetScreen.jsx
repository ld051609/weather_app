import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ClosetScreen = ({imgIcon}) => {
  const [clothes, setClothes] = React.useState([])
  const onPress = () => {
    if (imgIcon == '01d.png' || imgIcon == '01n.png') {
      setClothes(['t-shirt.png', 'shorts.png', 'sunglasses.png'])
    }
    else if (imgIcon == '02d.png' || imgIcon == '02n.png') {
      setClothes(['t-shirt.png', 'sweater.png', 'pants.png'])
    }
    else if (imgIcon == '03d.png' || imgIcon == '03n.png') {
      setClothes(['t-shirt.png', 'jacket.png', 'jeans.png'])
    }
    else if (imgIcon == '04d.png' || imgIcon == '04n.png') {
      setClothes(['t-shirt.png', 'hoodie.png', 'pants.png'])
    }
    else if (imgIcon == '09d.png' || imgIcon == '09n.png') {
      setClothes(['raincoat.png', 'poncho.png', 'boot.png'])
    }
    else if (imgIcon == '10d.png' || imgIcon == '10n.png') {
      setClothes(['raincoat.png', 'boot.png', 'pants.png'])
    }
    else if (imgIcon == '11d.png' || imgIcon == '11n.png') {
      setClothes(['raincoat.png', 'boot.png', 'pants.png'])
    }
    else if (imgIcon == '13d.png' || imgIcon == '13n.png') {
      setClothes(['coat.png', 'scarf.png', 'gloves.png'])
    }
    else if (imgIcon == '50d.png' || imgIcon == '50n.png') {
      setClothes(['sweater.png', 'coat.png', 'jeans.png'])
    } 
    else {
      setClothes(['t-shirt.png', 'shorts.png', 'shoes.png'])
    }

  }
  return (
    <SafeAreaView>

      <TouchableOpacity styles={styles.button} onPress={onPress}>
          <Text>Press for Clothes</Text>
      </TouchableOpacity>
      
      <View style={styles.clothes}>
        {clothes.map((clothe, index) => {
          return <Image key={index} source={require(`@expo/assets/${clothe}`)}  style={styles.img}/>
        })}
      </View>
    </SafeAreaView>
  )
}

export default ClosetScreen

const styles = StyleSheet.create({
  clothes: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center'
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
})