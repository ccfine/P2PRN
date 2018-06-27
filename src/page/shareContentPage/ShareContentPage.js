import React, { Component } from "react"
import { StyleSheet, ImageBackground } from "react-native"
import Dimensions from "Dimensions"
import NavigationBar from "../../component/navigationBar/NavigationBar.js"

const { scale } = Dimensions.get("window")

export default class ShareContentPage extends Component {
  constructor () {
    super()
    this.handleGoBack = this.handleGoBack.bind(this)
  }

  handleGoBack () {
    this.props.navigation.navigate("ShareHomePage")
  }

  render () {
    return (
      <ImageBackground source={ require("./img/bg.png") } style={ styles.container }>
        <NavigationBar title={ this.props.navigation.state.params.title } goBack={ this.handleGoBack } />
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40 / scale
  }
})