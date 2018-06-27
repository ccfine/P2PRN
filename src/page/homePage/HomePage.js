import React, { Component } from "react"
import { StyleSheet, ImageBackground, Image, View, Text, Animated, Modal, TouchableOpacity } from "react-native"
import ScrollableTabView from "react-native-scrollable-tab-view"
import TabBar from "react-native-underline-tabbar"
import Dimensions from "Dimensions"
import { Tab } from "../../component/tab/Tab.js"
import Home from "../../container/home/Home.js"
import PopularRecommend from "../../container/popularRecommend/PopolarRecommend.js"
import LatestVideo from "../../container/latestVideo/LatestVideo.js"
import PopularPicture from "../../container/popularPicture/PopularPicture.js"
import Favorite from "../../container/favorite/Favorite.js"
import ShareP2P from "../../container/shareP2P/ShareP2P.js"

const { width, scale } = Dimensions.get("window")

export default class HomePage extends Component {
  constructor () {
    super()
    this.state = {
      modalVisible: false,
      markVisible: true
    }
    this.handleToggle = this.handleToggle.bind(this)
  }

  _scrollX = new Animated.Value(0)
  interpolators = Array.from({ length: 6 }, (_, i) => i).map(idx => ({
    backgroundColor: this._scrollX.interpolate({
      inputRange: [idx - 1, idx, idx + 1],
      outputRange: ["rgba(0,0,0,0)", "#5F5FFF", "rgba(0,0,0,0)"],
      extrapolate: "clamp"
    })
  }))

  handleToggle () {
    this.setState({
      modalVisible: !this.state.modalVisible,
      markVisible: !this.state.markVisible
    })
  }

  handleSwitchShare (title) {
    this.handleToggle()
    this.props.navigation.navigate("ShareHomePage", {
      title: title
    })
  }

  render () {
    return (
      <View style={ styles.container }>
        <Modal animationType={ "fade" } transparent={ true } visible={ this.state.modalVisible } onRequestClose={ () => {} }>
          <View style={ styles.modalContainer }>
            <View style={ styles.horContanier }>
              <TouchableOpacity activeOpacity={ 0.5 } onPress={ () => this.handleSwitchShare("音乐") } style={ styles.mediaContainer }>
                <Image source={ require("./img/music.png") } resizeMode="cover" style={ styles.media } />
                <Text style={ styles.mediaText }>音乐</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={ 0.5 } onPress={ this.handleToggle }>
                <Image source={ require("./img/close.png") } resizeMode="cover" style={ styles.close } />
              </TouchableOpacity>
            </View>
            <View style={ styles.verContainer }>
              <TouchableOpacity activeOpacity={ 0.5 } onPress={ () => this.handleSwitchShare("电影") } style={ styles.mediaContainer }>
                <Image source={ require("./img/video.png") } resizeMode="cover" style={ styles.media } />
                <Text style={ styles.mediaText }>小视频</Text>
              </TouchableOpacity>  
              <TouchableOpacity activeOpacity={ 0.5 } onPress={ () => this.handleSwitchShare("相册") } style={ styles.mediaContainer }>
                <Image source={ require("./img/album.png") } resizeMode="cover" style={ styles.media } />
                <Text style={ styles.mediaText }>图集</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <ImageBackground source={ require("./img/bg.png") } resizeMode="cover" style={ styles.bgImage } />
        <View style={ styles.header }>
          <Image source={ require("./img/fold.png") } resizeMode="cover" style={ styles.fold } />
          <Image source={ require("./img/title.png") } resizeMode="contain" style={ styles.title } />
          <Image source={ require("./img/search.png") } resizeMode="cover" style={ styles.search } />
        </View>
        <ScrollableTabView renderTabBar={ () => <TabBar underlineColor="transparent" tabBarStyle={{ borderWidth: 0, marginTop: 8 / scale }}
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
        { this.state.markVisible? (
          <TouchableOpacity activeOpacity={ 0.3 } onPress={ this.handleToggle } style={ styles.markContainer }>
            <Image source={ require("./img/mark.png") } style={ styles.mark } />
          </TouchableOpacity>
        ): null }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bgImage: {
    width: width,
    height: 184 / scale,
    position: "absolute",
    top: 0,
    left: 0
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20 / scale,
    paddingHorizontal: 10
  },
  fold: {
    width: 43 / scale,
    height: 38 / scale
  },
  title: {
    width: 635 / scale,
    height: 30 
  },
  search: {
    width: 34 / scale,
    height: 34 / scale
  },
  markContainer: {
    position: "absolute",
    right: 60 / scale,
    bottom: 50 / scale
  },
  mark: {
   width: 132 / scale,
   height: 132 / scale,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#000",
    opacity: 0.8
  },
  horContanier: {
    width: 400 / scale,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    position: "absolute",
    right: 60 / scale,
    bottom: 600 / scale
  },
  verContainer: {
    height: 500 / scale,
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    right: 210/ scale,
    bottom: 440 / scale
  }, 
  mediaContainer: {
    height: 180 / scale,
    justifyContent: "space-between",
    alignItems: "center"
  },
  media: {
    width: 120 / scale,
    height: 120 / scale,
  },
  mediaText: {
    color: "#fff"
  },
  close: {
    width: 132 / scale,
    height: 132 / scale,
  }
})