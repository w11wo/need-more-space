import React from 'react'
import { createAppContainer, createStackNavigator, createBottomTabNavigator, SafeAreaView } from 'react-navigation'
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
  tabBarIcon: ({ tintColor }) => (
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
  tabBarIcon: ({ tintColor }) => (
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
      shadowRadius: 2,
      shadowOffset: {
        width: 0,
        height: -2,
      },
      shadowOpacity: 0.5,
      shadowColor: '#000',
      elevation: 4,
    },
  }
},
{
  initialRouteName: 'Solar',
})

const App = createAppContainer(SolarSystemStack);

export default App;