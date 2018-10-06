import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, StatusBar } from 'react-native'
import Expo from 'expo'
import { SafeAreaView } from 'react-navigation'

import { getPlanetDetails } from '../DatabaseAPI.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  paragraph: {
    fontSize: 20,
    fontWeight: '300',
    color: '#FFF',
    marginBottom: 5,
  },
  caption: {
    fontSize: 16,
    fontWeight: '300',
    color: '#FFF',
    marginBottom: 5,
    textAlign: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: '500',
    color: '#FFF',
    marginTop: 7,
    marginBottom: 7,
  },
  photosphere: {
    marginLeft: 15,
  },
  star: {
    height: 350,
    width: 350,
  },
  starBox: {
    alignItems: 'center',
  },
})

export default class StarDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.props.name}`,
    headerStyle: {
      backgroundColor: '#000',
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {
      fontWeight: '300',
      color: '#FFF',
      fontSize: 20,
    },
  })

  render() {
    var props = this.props.navigation.getParam('props')
    var name = props.name
    var db = getPlanetDetails()
    var star = db[name]
    var link = star.link
    var distance = star.distance
    var galacticPeriod = star.galacticPeriod
    var mass = star.mass
    var volume = star.volume
    var gravity = star.gravity
    var temperature = star.temperature
    var luminosity = star.luminosity
    var photosphere = star.photosphere
    var composition = []

    for (i = 0; i < photosphere.length; i++) {
      composition.push(<Text key={i} style={[styles.paragraph, styles.photosphere]}>• {photosphere[i]}</Text>)
    }

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <ScrollView>
          <View style={styles.starBox}>
            <Image style={styles.star} source={link}/>
          </View>
          <Text style={styles.header}>Orbital Characteristics</Text>
          <Text style={styles.paragraph}>Distance from Milky Way: {distance}</Text>
          <Text style={styles.paragraph}>Galactic Period: {galacticPeriod}</Text>
          <Text style={styles.header}>Physical Characteristics</Text>
          <Text style={styles.paragraph}>Mass: {mass}</Text>
          <Text style={styles.paragraph}>Volume: {volume}</Text>
          <Text style={styles.paragraph}>Equatorial Surface Gravity: {gravity}</Text>
          <Text style={styles.paragraph}>Photosphere Temperature: {temperature}</Text>
          <Text style={styles.paragraph}>Luminosity: {luminosity}</Text>
          <Text style={styles.header}>Photosphere</Text>
          <Text style={styles.paragraph}>Composition:</Text>
          {composition}
        </ScrollView>
      </SafeAreaView>
    )
  }
}
