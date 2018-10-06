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
  planet: {
    height: 350,
    width: 350,
  },
  planetBox: {
    alignItems: 'center',
  },
})

export default class MoonDetailScreen extends React.Component {
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
    var planetName = props.planet
    var index = props.index
    var db = getPlanetDetails()
    var moon = db[planetName]["moons"][index]
    var link = moon.link
    var caption
    var captionText
    var apoapsis = moon.apoapsis
    var periapsis = moon.periapsis
    var orbitalPeriod = moon.orbitalPeriod
    var mass = moon.mass
    var volume = moon.volume
    var gravity = moon.gravity
    var temperature = moon.temperature

    try {
      caption = moon.caption
      captionComponent = <Text style={styles.caption}>{caption}</Text>
    }
    catch(error) {
      caption = null
      captionComponent = null
    }

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <ScrollView>
          <View style={styles.planetBox}>
            <Image style={styles.planet} source={link}/>
            {captionComponent}
          </View>
          <Text style={styles.header}>Orbital Characteristics</Text>
          <Text style={styles.paragraph}>Apoapsis: {apoapsis}</Text>
          <Text style={styles.paragraph}>Periapsis: {periapsis}</Text>
          <Text style={styles.paragraph}>Orbital Period: {orbitalPeriod}</Text>
          <Text style={styles.header}>Physical Characteristics</Text>
          <Text style={styles.paragraph}>Mass: {mass}</Text>
          <Text style={styles.paragraph}>Volume: {volume}</Text>
          <Text style={styles.paragraph}>Surface Gravity: {gravity}</Text>
          <Text style={styles.paragraph}>Mean Temperature: {temperature}</Text>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
