import React, { Component } from "react"
import { StyleSheet, View, Text } from "react-native"

export default class ShareP2P extends Component {
  render () {
    return (
      <View style={ styles.container }>
        <Text>P2P分享</Text>
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