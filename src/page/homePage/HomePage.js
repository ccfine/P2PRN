import React, { Component } from "react"
import { StyleSheet, ImageBackground, Image, View, Text, Animated } from "react-native"
import ScrollableTabView from "react-native-scrollable-tab-view"
import TabBar from "react-native-underline-tabbar"
import { Tab } from "../../component/tab/Tab.js"
import Home from "../../container/home/Home.js"
import PopularRecommend from "../../container/popularRecommend/PopolarRecommend.js"
import LatestVideo from "../../container/latestVideo/LatestVideo.js"
import PopularPicture from "../../container/popularPicture/PopularPicture.js"
import Favorite from "../../container/favorite/Favorite.js"
import ShareP2P from "../../container/shareP2P/ShareP2P.js"

export default class HomePage extends Component {
  _scrollX = new Animated.Value(0)
  interpolators = Array.from({ length: 6 }, (_, i) => i).map(idx => ({
    backgroundColor: this._scrollX.interpolate({
      inputRange: [idx - 1, idx, idx + 1],
      outputRange: ["rgba(0,0,0,0)", "#5F5FFF", "rgba(0,0,0,0)"],
      extrapolate: "clamp"
    })
  }))

  render () {
    return (
      <View style={ styles.container }>
        <ImageBackground source={ require("./img/bg.png") } style={ styles.bgImage } />
        <View style={ styles.header }>
          <Image source={ require("./img/fold.png") } style={ styles.fold } />
          <Image source={ require("./img/title.png") } resizeMode="contain" style={ styles.title } />
          <Image source={ require("./img/search.png") } style={ styles.search } />
        </View>
        <ScrollableTabView renderTabBar={ () => <TabBar underlineColor="transparent" tabBarStyle={{ borderWidth: 0, marginTop: 15 }}
                                                        renderTab={ (tab, page, isTabActive, onPressHandler, onTabLayout) => 
                                                                      <Tab key={ page } tab={ tab } page={ page } isTabActive={ isTabActive }
                                                                           onPressHandler={ onPressHandler } onTabLayout={ onTabLayout } 
                                                                           styles={ this.interpolators[page] } 
                                                                      />
                                                                  }
                                                />
                                        }
                           onScroll={ x => this._scrollX.setValue(x) }
        >
          <Home tabLabel={{ label: "首页" }} />
          <PopularRecommend tabLabel={{ label: "热门推荐" }} />
          <LatestVideo tabLabel={{ label: "最新视频" }} />
          <PopularPicture tabLabel={{ label: "最火图片" }} />
          <Favorite tabLabel={{ label: "猜你喜欢" }} />
          <ShareP2P tabLabel={{ label: "P2P分享" }} />
        </ScrollableTabView>
        <Image source={ require("./img/mark.png") } style={ styles.mark } />
      </View>
    )
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