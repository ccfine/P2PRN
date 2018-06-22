import React, { Component } from "react"
import { StyleSheet, ImageBackground, Text } from "react-native"
import NavigationBar from "../../component/navigationBar/NavigationBar.js"

export default class ShareHomePage extends Component {
  render () {
    return (
      <ImageBackground source={ require("./img/bg.png") } style={ styles.container }>
        <NavigationBar title={ this.props.navigation.state.params.title } />
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})