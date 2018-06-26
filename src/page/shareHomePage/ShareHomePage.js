import React, { Component } from "react"
import { StyleSheet, ImageBackground, View, Text, TextInput } from "react-native"
import Dimensions from "Dimensions"
import NavigationBar from "../../component/navigationBar/NavigationBar.js"

const { scale } = Dimensions.get("window")

export default class ShareHomePage extends Component {
  constructor () {
    super()
    this.state = {
      title: "",
      actor: "",
      type: "动作片"
    }
    this.handleGoBack = this.handleGoBack.bind(this)
  }

  handleGoBack () {
    this.props.navigation.navigate("HomePage")
  }

  handleChangeText (key, value) {
    this.setState({
      [key]: value
    })
  }

  render () {
    const type = ["爱情片", "必看片", "悬疑片", "动作片", "奇怪系列", "萝莉", "大叔", "老师片", "娱乐", "国事", "论坛", "搞笑", "粉红色", "性感", "火辣", "明星", "八卦"]
    return (
      <ImageBackground source={ require("./img/bg.png") } style={ styles.container }>
        <NavigationBar title={ this.props.navigation.state.params.title } goBack={ this.handleGoBack } />
        <View style={ styles.contentContainer }>
          <View style={ styles.titleContainer }>
            <TextInput value={ this.state.title } onChangeText={ text => this.handleChangeText("title", text) } autoFocus={ true } 
                       placeholder="请在此输入标题..." placeholderTextColor="#fff" underlineColorAndroid="transparent" style={ styles.contentText } 
            />
          </View>
          <View style={ styles.actorContainer }>
            <Text style={ styles.titleText }>导演/演员</Text>
            <View style={ styles.inputContainer }>
              <TextInput value={ this.state.actor } onChangeText={ text => this.handleChangeText("actor", text) } placeholder="周杰伦 黄秋生"
                         placeholderTextColor="#fff" underlineColorAndroid="transparent" style={ styles.contentText } 
              />
            </View>
          </View>
          <View>
            <Text style={ styles.titleText }>分类</Text>
            <View style={ styles.inputContainer }>
              <TextInput value={ this.state.type } editable={ false } underlineColorAndroid="transparent" style={ styles.contentText } />
            </View>
            <View style={ styles.typeList }>
              <Text style={ styles.typeText }>热门分类：</Text>
              { type.map( item => (
                <Text key={ item } style={ styles.typeText }>{ item }</Text>
              ) ) }
            </View>
          </View>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40 / scale,
  },
  titleText: {
    color: "#fff",
    fontSize: 50 / scale
  },
  contentText: {
    color: "#fff",
    fontSize: 45 / scale,
    padding: 0
  },
  inputContainer: {
    backgroundColor: "#4320BA",
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  contentContainer: {
    marginTop: 150 / scale,
    paddingHorizontal: 20
  },
  titleContainer: {
    borderBottomColor: "#8372E2",
    borderBottomWidth: 1
  },
  actorContainer: {
    marginVertical: 100 / scale
  },
  typeList: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center"
  },
  typeText: {
    color: "#fff",
    fontSize: 40 / scale
  }
})