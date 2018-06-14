import React, { Component } from "react"
import { StyleSheet, View, Text } from "react-native"

export default class PopularPicture extends Component {
  render () {
    return (
      <View style={ styles.container }>
        <Text>最火图片</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  }
})