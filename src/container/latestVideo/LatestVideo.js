import React, { Component } from "react"
import { StyleSheet, View, Text } from "react-native"

export default class LatestVideo extends Component {
  render () {
    return (
      <View style={ styles.container }>
        <Text>最新视频</Text>
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