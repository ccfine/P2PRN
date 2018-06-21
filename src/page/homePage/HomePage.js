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

const { width } = Dimensions.get("window")

export default class HomePage extends Component {
  constructor () {
    super()
    this.state = {
      modalVisible: false,
      markVisible: true
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleSwitchMovie = this.handleSwitchMovie.bind(this)
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

  handleSwitchMovie () {
    this.props.navigation.navigate("MovieHomePage")
  }

  render () {
    return (
      <View style={ styles.container }>
        <Modal animationType={ "fade" } transparent={ true } visible={ this.state.modalVisible } onRequestClose={ () => {} }>
          <View style={ styles.modalContainer }>
            <View style={ styles.horContanier }>
              <TouchableOpacity activeOpacity={ 0.5 } style={ styles.mediaContainer }>
                <Image source={ require("./img/music.png") } resizeMode="cover" style={ styles.media } />
                <Text style={ styles.mediaText }>音乐</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={ 0.5 } onPress={ this.handleToggle }>
                <Image source={ require("./img/close.png") } style={ styles.close } />
              </TouchableOpacity>
            </View>
            <View style={ styles.verContainer }>
              <TouchableOpacity activeOpacity={ 0.5 } style={ styles.mediaContainer } onPress={ this.handleSwitchMovie }>
                <Image source={ require("./img/video.png") } resizeMode="cover" style={ styles.media } />
                <Text style={ styles.mediaText }>小视频</Text>
              </TouchableOpacity>  
              <TouchableOpacity activeOpacity={ 0.5 } style={ styles.mediaContainer }>
                <Image source={ require("./img/album.png") } resizeMode="cover" style={ styles.media } />
                <Text style={ styles.mediaText }>图集</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <ImageBackground source={ require("./img/bg.png") } resizeMode="cover" style={ styles.bgImage } />
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
    paddingHorizontal: 10
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
  markContainer: {
    position: "absolute",
    right: 22,
    bottom: 22
  },
  mark: {
   width: 66,
   height: 66,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#000",
    opacity: 0.8
  },
  horContanier: {
    width: 180,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    position: "absolute",
    right: 22,
    bottom: 100
  },
  verContainer: {
    height: 210,
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    right: 85,
    bottom: 40
  }, 
  mediaContainer: {
    height: 80,
    justifyContent: "space-between",
    alignItems: "center"
  },
  media: {
    width: 60,
    height: 60
  },
  mediaText: {
    color: "#fff"
  },
  close: {
    width: 66,
    height: 66
  }
})