import React, { PureComponent } from "react"
import { StyleSheet, View, Text, Image } from "react-native"
import PropTypes from "prop-types"
import Dimensions from "Dimensions"

const { width, scale } = Dimensions.get("window")

export default class HomeItem extends PureComponent {
  static propTypes = {
    item: PropTypes.object
  }

  render () {
    return (
      <View>
        <View style={ styles.headerContainer }>
          <Image source={ require("../../resource/image/avatar.png") } style={ styles.avatar } />       
          <Text style={ styles.headerText }>美女在这里_8888</Text>
          <Text style={ styles.track }>追踪</Text>
        </View>
        <Image source={ require("../../resource/image/photo-1.png") } resizeMode="contain" style={ styles.photo } />
        <View style={ styles.operationContainer }>
          <View style={ styles.operation }>
            <Image source={ require("./img/like.png") } resizeMode="contain" style={ styles.icon } />
            <Image source={ require("./img/comment.png") } resizeMode="contain" style={ styles.icon } />
            <Image source={ require("./img/share.png") } resizeMode="contain" style={ styles.icon } />
            <Image source={ require("./img/download.png") } resizeMode="contain" style={ styles.icon } />
          </View>
          <Image source={ require("./img/token.png") } resizeMode="contain" style={ styles.icon } />
        </View>      
        <Text style={ styles.description }>{ this.props.item.description }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10 / scale
  },
  avatar: {
    width: 58 / scale,
    height: 63 / scale
  },
  headerText: {
    fontSize: 36 / scale,
    color: "#000",
    marginHorizontal: 5
  },
  track: {
    fontSize: 36 / scale,
    color: "#6A6AFF",
  },
  photo: {
    width: width,
    height: 1010 / scale
  },
  operationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20 / scale,
    paddingRight: 15,
    paddingBottom: 10 / scale,
    paddingLeft: 10
  },
  operation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 230 / scale
  },
  icon: {
    width: 35 / scale,
    height: 35 / scale
  },
  description: {
    fontSize: 36 / scale,
    color: "#000",
    lineHeight: 38 / scale,
    paddingTop: 10 / scale,
    paddingHorizontal: 10,
    paddingBottom: 10 / scale
  }
})