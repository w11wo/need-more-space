import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator, createBottomTabNavigator, SafeAreaView } from 'react-navigation'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

import SolarSystemScreen from './screens/solarSystemScreen.js'
import PlanetDetailScreen from './screens/planetDetailScreen.js'
import MoonDetailScreen from './screens/moonDetailScreen.js'
import StarDetailScreen from './screens/starDetailScreen.js'

import RocketScreen from './screens/rocketScreen.js'
import RocketDetailScreen from './screens/rocketDetailScreen.js'

const SolarSystemStack = createStackNavigator({
  SolarSystem: SolarSystemScreen,
  PlanetDetails: PlanetDetailScreen,
  MoonDetails: MoonDetailScreen,
  StarDetails: StarDetailScreen,
},
{
  initialRouteName: 'SolarSystem',
})

SolarSystemStack.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <Ionicons
      name={"md-globe"}
      size={25}
      color={tintColor}
    />
  )
}

const RocketsStack = createStackNavigator({
  RocketsHomeScreen: RocketScreen,
  RocketDetails: RocketDetailScreen
},
{
  initialRouteName: 'RocketsHomeScreen',
})

RocketsStack.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <MaterialCommunityIcons
      name={"rocket"}
      size={25}
      color={tintColor}
    />
  )
}

const MainTabs = createBottomTabNavigator({
  Solar: SolarSystemStack,
  Rockets: RocketsStack,
},
{
  tabBarOptions: {
    activeTintColor: "#FFF",
    activeBackgroundColor: "#000",
    inactiveBackgroundColor: "#000",
    showLabel: false,
    style: {
      backgroundColor: '#000',
    },
  }
},
{
  initialRouteName: 'Solar',
})

export default class App extends React.Component {
  render () {
    return (
      <MainTabs />
    )
  }
}
