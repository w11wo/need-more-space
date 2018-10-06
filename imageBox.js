import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  buttonBox: {
    flexGrow: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#FFF',
    paddingTop: 5,
    marginLeft: 7,
    marginRight: 7,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "200",
    color: '#FFF',
  },
  planet: {
    height: 150,
    width: 150,
  },
})

export class ImageBox extends React.Component {
  static propTypes = {
    name: PropTypes.string,
  }

  _onPress = (props) => {
    this.props.onPress(this.props)
  }

  render() {
    var imgSource = this.props.imgSource
    return (
      <TouchableOpacity style={styles.buttonBox} activeOpacity={1} onPress={this._onPress}>
        <Image style={styles.planet} source={imgSource}/>
        <Text style={styles.buttonText}>{this.props.name}</Text>
      </TouchableOpacity>
    )
  }
}
