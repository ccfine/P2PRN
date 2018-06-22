import React, { PureComponent } from "react"
import PropTypes from "prop-types" 
import { StyleSheet, View, Text, Image } from "react-native"

export default class NavigationBar extends PureComponent {
  static propTypes = {
   title: PropTypes.string.isRequired 
  }

  render () {
    return (
      <View style={ styles.container }>
        <Image source={ require("./img/back.png") } style={ styles.back } />
        <Text style={ styles.backTitle }>{ this.props.title }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center"
  },
  back: {
    width: 21,
    height: 18
  },
  backTitle: {
    color: "#fff",
    marginLeft: 15
  }
})