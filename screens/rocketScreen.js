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

export default class RocketScreen extends React.Component {
  static navigationOptions = {
    title: 'Rockets',
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

  navigateToRocketDetails = (props) => {
    this.props.navigation.navigate('RocketDetails', {
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
              <ImageBox imgSource={require('../assets/falcon9.jpg')} name={"Falcon 9"} onPress={this.navigateToRocketDetails}/>
              <ImageBox imgSource={require('../assets/falcon-heavy.jpg')} name={"Falcon Heavy"} onPress={this.navigateToRocketDetails}/>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
