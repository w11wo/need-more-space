import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, StatusBar } from 'react-native'
import Expo from 'expo'
import { SafeAreaView } from 'react-navigation'

import { ImageBox } from '../imageBox.js'
import { getRocketDetails } from '../DatabaseAPI.js'

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
  bottomMargin: {
    marginBottom: 2,
    marginTop: 2,
  },
  leftMargin: {
    marginLeft: 15,
  },
  siteImage: {
    width: 350,
  },
  siteView:{
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  rocket: {
    height: 500,
    width: 350,
  },
  rocketBox: {
    alignItems: 'center',
  },
})

export default class RocketDetailScreen extends React.Component {
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
    var db = getRocketDetails()
    var rocket = db[name]
    var link = rocket.link
    var role = rocket.function
    var manufacturer = rocket.manufacturer
    var origin = rocket.origin
    var currentVersion = rocket.currentVersion
    var height = rocket.height
    var diameter = rocket.diameter
    var mass = rocket.mass
    var capacity = rocket.capacity
    var capacityArray = []
    var launchSites = rocket.launchSites
    var launchSitesArray = []
    var totalLaunches = rocket.totalLaunches
    var firstFlight = rocket.firstFlight
    var stages = rocket.stages
    var stagesArray = []
    var numberOfStages = stages.length

    for (i = 0; i < capacity.length; i++) {
      capacityArray.push(
        <View key={i} style={styles.bottomMargin}>
          <Text style={styles.paragraph}>• Payload to {capacity[i]["destination"]}:</Text>
          <Text style={[styles.paragraph, styles.leftMargin]}>{capacity[i]["payload"]}</Text>
        </View>
      )
    }

    for (i = 0; i < launchSites.length; i++) {
      launchSitesArray.push(
        <View key={i}>
          <Text key={i} style={[styles.paragraph, styles.leftMargin]}>• {launchSites[i]["name"]}</Text>
          <View style={styles.siteView}>
            <Image style={styles.siteImage} source={launchSites[i]["link"]}/>
          </View>
        </View>
      )
    }

    for (i = 0; i < stages.length; i++) {
      stagesArray.push(
        <View key={i} style={styles.bottomMargin}>
          <Text style={styles.paragraph}>• Stage {i+1}</Text>
          <Text style={[styles.paragraph, styles.leftMargin]}>Engines: {stages[i]["engines"]}</Text>
          <Text style={[styles.paragraph, styles.leftMargin]}>Thrust: {stages[i]["thrust"]}</Text>
          <Text style={[styles.paragraph, styles.leftMargin]}>Burn Time: {stages[i]["burnTime"]}</Text>
          <Text style={[styles.paragraph, styles.leftMargin]}>Fuel: {stages[i]["fuel"]}</Text>
        </View>
      )
    }

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <ScrollView>
          <View style={styles.rocketBox}>
            <Image style={styles.rocket} source={link}/>
          </View>
          <Text style={styles.header}>Details</Text>
          <Text style={styles.paragraph}>Function: {role}</Text>
          <Text style={styles.paragraph}>Manufacturer: {manufacturer}</Text>
          <Text style={styles.paragraph}>Country of Origin: {origin}</Text>
          <Text style={styles.paragraph}>Current Version: {currentVersion}</Text>
          <Text style={styles.header}>Dimensions</Text>
          <Text style={styles.paragraph}>Height: {height}</Text>
          <Text style={styles.paragraph}>Diameter: {diameter}</Text>
          <Text style={styles.paragraph}>Mass: {mass}</Text>
          <Text style={styles.paragraph}>Stages: {numberOfStages}</Text>
          <Text style={styles.header}>Capacity</Text>
          {capacityArray}
          <Text style={styles.header}>Launch History</Text>
          <Text style={styles.paragraph}>Launch Sites:</Text>
          {launchSitesArray}
          <Text style={styles.paragraph}>Total Launches: {totalLaunches}</Text>
          <Text style={styles.paragraph}>First Flight: {firstFlight}</Text>
          <Text style={styles.header}>Stages</Text>
          {stagesArray}
        </ScrollView>
      </SafeAreaView>
    )
  }
}
