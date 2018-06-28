import React, { Component } from "react"
import { StyleSheet, ImageBackground, View, Text, TextInput, TouchableOpacity, Image } from "react-native"
import Dimensions from "Dimensions"
import NavigationBar from "../../component/navigationBar/NavigationBar.js"

const { width, scale } = Dimensions.get("window")

export default class ShareContentPage extends Component {
  constructor () {
    super()
    this.handleGoBack = this.handleGoBack.bind(this)
  }

  handleGoBack () {
    this.props.navigation.navigate("ShareHomePage")
  }

  render () {
    const data = ["https://www.baidu.com", "https://www.taobao.com"] 
    return (
      <ImageBackground source={ require("./img/bg.png") } style={ styles.container }>
        <NavigationBar title={ this.props.navigation.state.params.title } goBack={ this.handleGoBack } />
        <View style={ styles.contentContainer }>
          <Text style={ styles.titleText }>分享内容</Text>
          { data.map( item => {
            return (
              <View key={ item } style={ styles.summaryContainer }>
                <View style={ styles.uploadContainer }>
                  <View style={ styles.inputContainer }>
                    <TextInput value={ item } style={ styles.contentText } />
                  </View>
                </View>
                <View style={ styles.deleteContainer }>
                  <View style={ styles.inputContainer }>
                    <TextInput placeholder="请输入标题内容" style={ styles.contentText } />
                  </View>
                  <TouchableOpacity>
                    <Image source={ require("./img/delete.png") } resizeMode="contain" style={ styles.delete } />
                  </TouchableOpacity>
                </View>
              </View>
            )
          }) }
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
  inputContainer: {
    backgroundColor: "#4320BA",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  contentText: {
    color: "#fff",
    fontSize: 45 / scale,
    padding: 0
  },
  contentContainer: {
    marginTop: 150 / scale,
    paddingHorizontal: 20
  },
  titleText: {
    color: "#fff",
    fontSize: 50 / scale
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  uploadContainer: {
    width: (width - 50) / 2,
  },
  deleteContainer: {
    width: (width - 50) / 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  delete: {
    width: 30 / scale,
    height: 30 / scale
  }
})