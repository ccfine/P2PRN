import React, { Component } from "react"
import { StyleSheet, ImageBackground, View } from "react-native"
import Dimensions from "Dimensions"
import NavigationBar from "../../component/navigationBar/NavigationBar.js"
import MultiButton from "../../component/multiButton/MultiButton.js"

const { width, scale } = Dimensions.get("window")

export default class ShareAddPage extends Component {
  constructor () {
    super()
    this.handleGoBack = this.handleGoBack.bind(this)
  }

  handleGoBack () {
    this.props.navigation.navigate("ShareContentPage")
  }

  render () {
    return (
      <ImageBackground source={ require("./img/bg.png") } style={ styles.container }>
        <NavigationBar title={ this.props.navigation.state.params.title } goBack={ this.handleGoBack } />
        <View style={ styles.contentContainer }>
          <View style={ styles.confirmContainer }>
            <MultiButton title="确认" goForward={ this.handleGoBack } />
          </View>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40 / scale
  },
  contentContainer: {
    marginTop: 150 / scale,
    paddingHorizontal: 20
  },
  confirmContainer: {
    alignSelf: "flex-end",
    marginTop: 20
  }
})