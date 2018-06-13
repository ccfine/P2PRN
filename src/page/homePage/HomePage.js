
import React, { Component } from "react"
import { StyleSheet, ImageBackground, Image, View, Text, TouchableOpacity, Animated } from "react-native"
import ScrollableTabView from "react-native-scrollable-tab-view"
import TabBar from "react-native-underline-tabbar"

const Page = ({label}) => (
  <View style={styles.container}>
  </View>
);

const Tab = ({ tab, page, isTabActive, onPressHandler, onTabLayout, styles }) => {
  const { label } = tab;
  const style = {
    marginHorizontal: 10
  }
  const container = {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 25,
    backgroundColor: styles.backgroundColor
  }
  const text = {
    color: "#fff"
  }
  return (
    <TouchableOpacity style={ style } onPress={ onPressHandler } onLayout={ onTabLayout } key={ page }>
      <Animated.View style={ container }>
        <Animated.Text style={ text }>{ label }</Animated.Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default class HomePage extends Component {
  _scrollX = new Animated.Value(0);
  interpolators = Array.from({ length: 6 }, (_, i) => i).map(idx => ({
    opacity: this._scrollX.interpolate({
      inputRange: [idx - 1, idx, idx + 1],
      outputRange: [0.9, 1, 0.9],
      extrapolate: 'clamp',
    }),
    textColor: this._scrollX.interpolate({
      inputRange: [idx - 1, idx, idx + 1],
      outputRange: ['#000', '#fff', '#000'],
    }),
    backgroundColor: this._scrollX.interpolate({
      inputRange: [idx - 1, idx, idx + 1],
      outputRange: ['rgba(0,0,0,0.1)', '#000', 'rgba(0,0,0,0.1)'],
      extrapolate: 'clamp',
    }),
  }));
  render() {
    return (
      <View style={ styles.container }>
        <ImageBackground source={ require("./img/bg.png") } style={ styles.bgImage } />
        <View style={ styles.header }>
          <Image source={ require("./img/fold.png") } style={ styles.fold } />
          <Image source={ require("./img/title.png") } resizeMode="contain" style={ styles.title } />
          <Image source={ require("./img/search.png") } style={ styles.search } />
        </View>
        <ScrollableTabView renderTabBar={ () => <TabBar underlineColor="transparent" tabBarStyle={{ borderWidth: 0, marginTop: 10 }}
                                                        renderTab={ (tab, page, isTabActive, onPressHandler, onTabLayout) => 
                                                                    <Tab key={ page } tab={ tab } page={ page } isTabActive={ isTabActive }
                                                                         onPressHandler={ onPressHandler } onTabLayout={ onTabLayout } 
                                                                         styles={ this.interpolators[page] } />
                                                                  }
                                                />
                                        }
                           onScroll={ x => this._scrollX.setValue(x) }
        >
          <Page tabLabel={{label: "Hot"}} label="Page #1 Hot" text="You can pass your own views to TabBar!"/>
          <Page tabLabel={{label: "Trending"}} label="Page #2 Trending" text="Yehoo!!!"/>
          <Page tabLabel={{label: "Fresh"}} label="Page #3 Fresh" text="Hooray!"/>
          <Page tabLabel={{label: "Funny"}} label="Page #4 Funny"/>
          <Page tabLabel={{label: "Movie & TV"}} label="Page #5 Movie & TV"/>
          <Page tabLabel={{label: "Sport"}} label="Page #6 Sport"/>
        </ScrollableTabView>
        <Image source={ require("./img/mark.png") } style={ styles.mark } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bgImage: {
    width: 375,
    height: 92,
    position: "absolute",
    top: 0,
    left: 0
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10
  },
  fold: {
    width: 21.5,
    height: 19
  },
  title: {
    width: 150,
    height: 35 
  },
  search: {
    width: 17,
    height: 17
  },
  mark: {
   width: 66,
   height: 66,
   position: "absolute",
   right: 22,
   bottom: 22 
  }
})