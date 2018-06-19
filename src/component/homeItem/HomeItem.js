import React, { PureComponent } from "react"
import { StyleSheet, View, Text, Image } from "react-native"
import PropTypes from "prop-types"
import Dimensions from "Dimensions"

const { width } = Dimensions.get("window")

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
    paddingVertical: 5
  },
  avatar: {
    width: 29,
    height: 31.5
  },
  headerText: {
    fontSize: 9,
    color: "#000",
    marginHorizontal: 5
  },
  track: {
    fontSize: 9,
    color: "#6A6AFF",
  },
  photo: {
    width: width,
    height: 505
  },
  operationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5
  },
  operation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 75
  },
  icon: {
    width: 12,
    height: 12
  },
  description: {
    fontSize: 9,
    color: "#000",
    lineHeight: 11,
    paddingLeft: 5,
    paddingVertical: 5
  }
})