import React, { Component } from "react"
import { StyleSheet, View, Text } from "react-native"

export default class Favorite extends Component {
  render () {
    return (
      <View style={ styles.container }>
        <Text>猜你喜欢</Text>
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