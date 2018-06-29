import React, { Component } from "react"
import { StyleSheet, ImageBackground, View, Text, TextInput } from "react-native"
import { RadioGroup, RadioButton } from "react-native-flexi-radio-button"
import Dimensions from "Dimensions"
import NavigationBar from "../../component/navigationBar/NavigationBar.js"
import MultiButton from "../../component/multiButton/MultiButton.js"

const { scale } = Dimensions.get("window")

export default class ShareHomePage extends Component {
  constructor () {
    super()
    this.state = {
      title: "",
      actor: "",
      type: "动作片",
      display: "横屏"
    }
    this.handleGoBack = this.handleGoBack.bind(this)
    this.handleGoForward = this.handleGoForward.bind(this)
  }

  handleGoBack () {
    this.props.navigation.navigate("HomePage")
  }

  handleGoForward () {
    this.props.navigation.navigate("ShareContentPage", {
      title: this.props.navigation.state.params.title
    })
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
              <Text style={ styles.typeTitle }>热门分类：</Text>
              { type.map( item => (
                <Text key={ item } onPress={ () => this.handleChangeText("type", item) }
                      style={ this.state.type === item? styles.typeText: styles.unselectedType }
                >{ item }</Text>
              ) ) }
            </View>
          </View>
          <View style={ styles.displayContainer }>
            <Text style={ styles.titleText }>内容显示</Text>
            <RadioGroup thickness={ 1 } size={ 60 / scale } selectedIndex={ 0 } color="#712FCA"
                        onSelect={ (index, value) => this.handleChangeText("display", value)} style={ styles.radioContainer }
            >
              <RadioButton value={ "横屏" } color="#fff" style={ styles.radio }>
                <Text style={ this.state.display === "横屏"? styles.contentText: styles.unselectedRadio }>横屏</Text>
              </RadioButton>
              <RadioButton value={ "竖屏" } color="#fff" style={ styles.radio }>
                <Text style={ this.state.display === "竖屏"? styles.contentText: styles.unselectedRadio }>竖屏</Text>
              </RadioButton>
            </RadioGroup>
          </View>
          <View style={ styles.nextContainer }>
            <MultiButton title="下一步" goForward={ this.handleGoForward } />
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
  typeTitle: {
    color: "#fff",
    fontSize: 40 / scale
  },
  typeText: {
    color: "#fff",
    fontSize: 40 / scale,
    paddingVertical: 10 / scale,
    paddingHorizontal: 20 / scale,
    marginBottom: 10 / scale,
    backgroundColor: "#121595",
    borderRadius: 60 / scale
  },
  unselectedType: {
    color: "#fff",
    fontSize: 40 / scale,
    paddingVertical: 10 / scale,
    paddingHorizontal: 20 / scale,
    marginBottom: 10 / scale,
    backgroundColor: "transparent",
    borderRadius: 60 / scale
  },
  displayContainer: {
    marginTop: 100 / scale,
    marginBottom: 200 / scale
  },
  radioContainer: {
    flexDirection: "row",
    marginTop: 10
  },
  radio: {
    padding: 0,
    marginRight: 60 / scale,
    width: 170 / scale,
    justifyContent: "space-between",
    alignItems: "center"
  },
  unselectedRadio: {
    color: "#7B73D0",
    fontSize: 45 / scale
  },
  nextContainer: {
    alignSelf: "flex-end"
  }
})