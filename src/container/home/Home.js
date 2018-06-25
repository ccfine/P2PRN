import React, { Component } from "react"
import { StyleSheet, View, FlatList } from "react-native"
import { connect } from "react-redux"
import Dimensions from "Dimensions"
import { getHomeList } from "../../redux/action/home.action.js"
import HomeItem from "../../component/homeItem/HomeItem.js"

const { scale } = Dimensions.get("window")

@connect(
  state => state.home,
  { getHomeList }
)

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      isRefresh: false
    }
    this.handleRefresh = this.handleRefresh.bind(this)
  }

  componentDidMount () {
    this.props.getHomeList()
  }
  
  _keyExtractor (item, index) {
    return item.id
  }

  handleRefresh () {
    this.setState({
      isRefresh: true
    })
  }

  renderSeparator () {
    return (
      <View style={ styles.separator } />
    )
  }

  render () {
    return this.props.data? (
      <View style={ styles.container }>
        <FlatList data={ this.props.data } keyExtractor={ (item, index) => this._keyExtractor(item, index) } 
                  renderItem={ ({ item }) => <HomeItem item={ item } /> } ItemSeparatorComponent={ this.renderSeparator }  
                  onRefresh={ this.handleRefresh } refreshing={ this.state.isRefresh }
        />
      </View>
    ): null
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 11 / scale
  },
  separator: {
    height: 50 / scale,
    backgroundColor: "#8b00eb"
  }
})