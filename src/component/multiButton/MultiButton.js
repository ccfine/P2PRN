import React, { Component } from "react"
import { StyleSheet, ImageBackground, TouchableOpacity, Text } from "react-native"
import PropTypes from "prop-types"
import Dimensions from "Dimensions"

const { scale } = Dimensions.get("window")

export default class MultiButton extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    goForward: PropTypes.func.isRequired
  }

  constructor () {
    super()
    this.state = {
      isActive: false
    }
    this.handleSwitchActive = this.handleSwitchActive.bind(this)
  }

  handleSwitchActive () {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  render () {
    const img = this.state.isActive? require("./img/bgActive.png"): require("./img/bg.png")
    return (
      <ImageBackground source={ img } resizeMode="cover" style={ styles.container }>
        <TouchableOpacity onPress={ this.props.goForward } onPressIn={ this.handleSwitchActive } onPressOut={ this.handleSwitchActive }>
          <Text style={ styles.title }>{ this.props.title }</Text>
        </TouchableOpacity>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 230 / scale,
    height: 85 / scale,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "#fff",
    fontSize: 40 / scale
  }
})