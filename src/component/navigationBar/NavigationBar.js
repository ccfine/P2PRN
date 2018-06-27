import React, { PureComponent } from "react"
import PropTypes from "prop-types" 
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native"
import Dimensions from "Dimensions"

const { scale } = Dimensions.get("window")

export default class NavigationBar extends PureComponent {
  static propTypes = {
   title: PropTypes.string.isRequired,
   goBack: PropTypes.func.isRequired
  }

  render () {
    return (
      <View style={ styles.container }>    
        <TouchableOpacity style={ styles.backContainer } onPress={ this.props.goBack }>  
          <Image source={ require("./img/back.png") } resizeMode="contain" style={ styles.back } />
          <Text style={ styles.backTitle }>{ this.props.title }</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15
  },
  backContainer: {
    width: 200 / scale,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  back: {
    width: 65 / scale,
    height: 65 / scale
  },
  backTitle: {
    fontSize: 55 / scale,
    color: "#fff"
  }
})