import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, StatusBar } from 'react-native'
import Expo from 'expo'
import { SafeAreaView } from 'react-navigation'

import { ImageBox } from '../imageBox.js'
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
  header: {
    fontSize: 22,
    fontWeight: '500',
    color: '#FFF',
    marginTop: 7,
    marginBottom: 7,
  },
  atmosphere: {
    marginLeft: 15,
  },
  planet: {
    height: 350,
    width: 350,
  },
  planetBox: {
    alignItems: 'center',
  },
  moons: {
    marginBottom: 10,
  },
})

export default class PlanetDetailScreen extends React.Component {
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

  navigateToMoonDetails = (props) => {
    this.props.navigation.navigate('MoonDetails', {
      props: props,
    })
  }

  render() {
    var props = this.props.navigation.getParam('props')
    var name = props.name
    var db = getPlanetDetails()
    var planet = db[name]
    var link = planet.link
    var aphelion = planet.aphelion
    var perihelion = planet.perihelion
    var orbitalPeriod = planet.orbitalPeriod
    var moons = planet.moons
    var moonsArray = []
    var mass = planet.mass
    var volume = planet.volume
    var gravity = planet.gravity
    var temperature = planet.temperature
    var pressure = planet.pressure
    var atmosphere = planet.atmosphere
    var composition = []

    if (atmosphere == "N/A") {
      let j = 0
      composition.push(<Text key={j} style={styles.paragraph}>N/A</Text>)
    } else {
      for (i = 0; i < atmosphere.length; i++) {
        composition.push(<Text key={i} style={[styles.paragraph, styles.atmosphere]}>• {atmosphere[i]}</Text>)
      }
    }

    if (moons == "N/A") {
      let j = 0
      moonsArray.push(<Text key={j} style={styles.paragraph}>N/A</Text>)
    } else {
      for (i = 0; i < moons.length; i++) {
        moonsArray.push(<View key={i} style={styles.moons}><ImageBox imgSource={moons[i]["link"]} name={moons[i]["name"]} planet={name} index={i} onPress={this.navigateToMoonDetails}/></View>)
      }
    }

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <ScrollView>
          <View style={styles.planetBox}>
            <Image style={styles.planet} source={link}/>
          </View>
          <Text style={styles.header}>Orbital Characteristics</Text>
          <Text style={styles.paragraph}>Aphelion: {aphelion}</Text>
          <Text style={styles.paragraph}>Perihelion: {perihelion}</Text>
          <Text style={styles.paragraph}>Orbital Period: {orbitalPeriod}</Text>
          <Text style={styles.paragraph}>Major Moons:</Text>
          {moonsArray}
          <Text style={styles.header}>Physical Characteristics</Text>
          <Text style={styles.paragraph}>Mass: {mass}</Text>
          <Text style={styles.paragraph}>Volume: {volume}</Text>
          <Text style={styles.paragraph}>Surface Gravity: {gravity}</Text>
          <Text style={styles.paragraph}>Mean Temperature: {temperature}</Text>
          <Text style={styles.header}>Atmosphere</Text>
          <Text style={styles.paragraph}>Pressure: {pressure}</Text>
          <Text style={styles.paragraph}>Composition:</Text>
          {composition}
        </ScrollView>
      </SafeAreaView>
    )
  }
}
