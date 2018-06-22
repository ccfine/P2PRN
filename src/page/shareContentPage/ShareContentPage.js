import React, { Component } from "react"
import { StyleSheet, ImageBackground } from "react-native"
import NavigationBar from "../../component/navigationBar/NavigationBar.js"

export default class ShareContentPage extends Component {
  render () {
    return (
      <ImageBackground source={ require("./img/bg.png") } style={ styles.container }>
        <NavigationBar />
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})