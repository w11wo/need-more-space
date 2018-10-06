import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, ImageBackground, StatusBar } from 'react-native'
import Expo from 'expo'
import { SafeAreaView } from 'react-navigation'

import { ImageBox } from '../imageBox.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
    marginBottom: 7,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
})

export default class SolarSystemScreen extends React.Component {
  static navigationOptions = {
    title: 'Solar System',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: '#000',
    },
    headerTitleStyle: {
      fontWeight: '300',
      color: '#FFF',
      fontSize: 20,
    },
  }

  navigateToPlanetDetails = (props) => {
    this.props.navigation.navigate('PlanetDetails', {
      props: props,
    })
  }

  navigateToStarDetails = (props) => {
    this.props.navigation.navigate('StarDetails', {
      props: props,
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <ScrollView>
          <View style={styles.column}>
            <View style={styles.row}>
              <ImageBox imgSource={require('../assets/sun.jpg')} name={"Sun"} onPress={this.navigateToStarDetails}/>
              <ImageBox imgSource={require('../assets/mercury.jpg')} name={"Mercury"} onPress={this.navigateToPlanetDetails}/>
            </View>
            <View style={styles.row}>
              <ImageBox imgSource={require('../assets/venus.jpg')} name={"Venus"} onPress={this.navigateToPlanetDetails}/>
              <ImageBox imgSource={require('../assets/earth.jpg')} name={"Earth"} onPress={this.navigateToPlanetDetails}/>
            </View>
            <View style={styles.row}>
              <ImageBox imgSource={require('../assets/mars.jpg')} name={"Mars"} onPress={this.navigateToPlanetDetails}/>
              <ImageBox imgSource={require('../assets/jupiter.jpg')} name={"Jupiter"} onPress={this.navigateToPlanetDetails}/>
            </View>
            <View style={styles.row}>
              <ImageBox imgSource={require('../assets/saturn.jpg')} name={"Saturn"} onPress={this.navigateToPlanetDetails}/>
              <ImageBox imgSource={require('../assets/uranus.jpg')} name={"Uranus"} onPress={this.navigateToPlanetDetails}/>
            </View>
            <View style={styles.row}>
              <ImageBox imgSource={require('../assets/neptune.jpg')} name={"Neptune"} onPress={this.navigateToPlanetDetails}/>
              <ImageBox imgSource={require('../assets/ceres.jpg')} name={"Ceres"} onPress={this.navigateToPlanetDetails}/>
            </View>
            <View style={styles.row}>
              <ImageBox imgSource={require('../assets/pluto.jpg')} name={"Pluto"} onPress={this.navigateToPlanetDetails}/>
              <ImageBox imgSource={require('../assets/haumea.jpg')} name={"Haumea"} onPress={this.navigateToPlanetDetails}/>
            </View>
            <View style={styles.row}>
              <ImageBox imgSource={require('../assets/makemake.jpg')} name={"Makemake"} onPress={this.navigateToPlanetDetails}/>
              <ImageBox imgSource={require('../assets/eris.jpg')} name={"Eris"} onPress={this.navigateToPlanetDetails}/>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
