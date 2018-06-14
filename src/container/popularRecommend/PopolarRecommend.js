import React, { Component } from "react"
import { StyleSheet, View, Text } from "react-native"

export default class PopularRecommend extends Component {
  render () {
    return (
      <View style={ styles.container }>
        <Text>热门推荐</Text>
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