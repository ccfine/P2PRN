import React, { Component } from "react"
import { StyleSheet, ImageBackground, View, Text, TextInput, TouchableOpacity, Image, Modal } from "react-native"
import Dimensions from "Dimensions"
import NavigationBar from "../../component/navigationBar/NavigationBar.js"
import MultiButton from "../../component/multiButton/MultiButton.js"

const { width, scale } = Dimensions.get("window")

export default class ShareContentPage extends Component {
  constructor () {
    super()
    this.state = {
      data: ["https://www.baidu.com", "https://www.taobao.com"],
      modalVisible: false
    }
    this.handleGoBack = this.handleGoBack.bind(this)
    this.handleSwitchAdd = this.handleSwitchAdd.bind(this)
    this.handleToggleModal = this.handleToggleModal.bind(this)
  }

  handleGoBack () {
    this.props.navigation.navigate("ShareHomePage")
  }

  handleDelete (index) {
    this.setState({
      data: this.state.data.splice(index, 1)
    }) 
  }

  handleSwitchAdd () {
    this.props.navigation.navigate("ShareAddPage", {
      title: this.props.navigation.state.params.title
    })
  }

  handleToggleModal () {
    this.setState({
      modalVisible: !this.state.modalVisible
    })
  }

  render () {
    return (
      <ImageBackground source={ require("./img/bg.png") } style={ styles.container }>
        <Modal animationType={ "fade" } transparent={ true } visible={ this.state.modalVisible } onRequestClose={ () => {} }>
          <View style={ styles.modalContainer }>
            <Text style={ styles.msgText }>你的内容正在处理中</Text>
            <Image source={ require("./img/logo.png") } resizeMode="contain" style={ styles.logo } />
            <Text style={ styles.precentText }>
              85 <Text style={{ fontSize: 40 / scale }}>%</Text>
            </Text>
            <MultiButton title="取消" goForward={ this.handleToggleModal } />
          </View>
        </Modal>
        <NavigationBar title={ this.props.navigation.state.params.title } goBack={ this.handleGoBack } />
        <View style={ styles.contentContainer }>
          <Text style={ styles.titleText }>分享内容</Text>
          { this.state.data.map( (item, index) => {
            return (
              <View key={ item } style={ styles.summaryContainer }>
                <View style={{ width: (width - 50) / 2 }}>
                  <View style={ styles.inputContainer }>
                    <TextInput value={ item } underlineColorAndroid="transparent" style={ styles.contentText } />
                  </View>
                  <TouchableOpacity activeOpacity={ 1 } style={ styles.uploadContainer }>
                    <Image source={ require("./img/upload.png") } resizeMode="contain" style={ styles.upload } />
                  </TouchableOpacity>
                </View>
                <View style={ styles.deleteContainer }>
                  <View style={ styles.inputContainer }>
                    <TextInput placeholder="请输入标题内容" placeholderTextColor="#fff" underlineColorAndroid="transparent" style={ styles.contentText } />
                  </View>
                  <TouchableOpacity onPress={ () => this.handleDelete(index) }>
                    <Image source={ require("./img/delete.png") } resizeMode="contain" style={ styles.delete } />
                  </TouchableOpacity>
                </View>
              </View>
            )
          }) }
          <ImageBackground source={ require("./img/addbg.png") } resizeMode="cover" style={ styles.addBg }>
            <TouchableOpacity style={ styles.addContainer }>
              <Image source={ require("./img/add.png") } resizeMode="contain" style={ styles.add } />
              <Text style={ styles.contentText } onPress={ this.handleSwitchAdd }>添加</Text>
            </TouchableOpacity>
          </ImageBackground>
          <View>
            <Text>富文本编辑框</Text>
          </View>
          <View style={ styles.footContainer }>
            <Text style={ [styles.contentText, { marginRight: 15 }] } onPress={ this.handleGoBack }>上一步</Text>
            <MultiButton title="分享" goForward={ this.handleToggleModal } />
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
  inputContainer: {
    width: (width - 50) / 2 - 5 - (35 / scale),
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
    position: "absolute",
    top: 0,
    right: 0,
    width: 100 / scale,
    height: 100 / scale,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  upload: {
    width: 50 / scale,
    height: 50 / scale
  },
  deleteContainer: {
    width: (width - 50) / 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  delete: {
    width: 35 / scale,
    height: 35 / scale
  },
  addBg: {
    width: 240 / scale,
    height: 75 / scale,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15
  },
  addContainer: {
    width: 150 / scale,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  add: {
    width: 35 / scale,
    height: 35 / scale
  },
  footContainer: {
    marginTop: 15,
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center"
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#000",
    opacity: 0.8,
    justifyContent: "center",
    alignItems: "center"
  },
  msgText: {
    color: "#fff",
    fontSize: 60 / scale,
    letterSpacing: 2,
    marginBottom: 20
  },
  logo: {
    width: 205 / scale,
    height: 145 / scale,
    marginBottom: 10
  },
  precentText: {
    color: "#fff",
    fontSize: 45 / scale,
    marginBottom: 20
  }
})