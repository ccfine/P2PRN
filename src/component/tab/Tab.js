import React from "react"
import { TouchableOpacity, Animated } from "react-native"

export const Tab = props => {
  const style = {
    marginHorizontal: 5
  }
  const container = {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
    backgroundColor: props.styles.backgroundColor
  }
  const text = {
    color: "#fff",
    fontSize: 10
  }

  return (
    <TouchableOpacity key={ props.page } onPress={ props.onPressHandler } onLayout={ props.onTabLayout } style={ style }>
      <Animated.View style={ container }>
        <Animated.Text style={ text }>{ props.tab.label }</Animated.Text>
      </Animated.View>
    </TouchableOpacity>
  )
}