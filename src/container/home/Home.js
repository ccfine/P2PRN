import React, { Component } from "react"
import { StyleSheet, View, FlatList, Text } from "react-native"
import { connect } from "react-redux"
import { getHomeList } from "../../redux/action/home.action.js"

@connect(
  state => state.home,
  { getHomeList }
)

export default class Home extends Component {
  componentDidMount () {
    this.props.getHomeList()
  }
  
  renderSeparator () {
    return (
      <View style={ styles.separator } />
    )
  }

  render () {
    return this.props.data? (
      <View style={ styles.container }>
        <FlatList data={ this.props.data } renderItem={ ({ item }) => <Text>{ item.description }</Text> } 
                  ItemSeparatorComponent={ this.renderSeparator }
        />
      </View>
    ): null
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  separator: {
    height: 15,
    backgroundColor: "#8b00eb"
  }
})