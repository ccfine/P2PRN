import React from "react"
import { TouchableOpacity, Animated } from "react-native"
import Dimensions from "Dimensions"

const { scale } = Dimensions.get("window")

export const Tab = props => {
  const style = {
    marginHorizontal: 10
  }
  const container = {
    paddingHorizontal: 30 / scale,
    paddingVertical: 6 / scale,
    borderRadius: 55 / scale,
    backgroundColor: props.styles.backgroundColor
  }
  const text = {
    color: "#fff",
    fontSize: 40 / scale
  }

  return (
    <TouchableOpacity key={ props.page } onPress={ props.onPressHandler } onLayout={ props.onTabLayout } style={ style }>
      <Animated.View style={ container }>
        <Animated.Text style={ text }>{ props.tab.label }</Animated.Text>
      </Animated.View>
    </TouchableOpacity>
  )
}