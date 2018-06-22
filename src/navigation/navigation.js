import { StackNavigator } from "react-navigation"
import WelcomePage from "../page/welcomePage/WelcomePage.js" 
import HomePage from "../page/homePage/HomePage.js"
import ShareHomePage from "../page/shareHomePage/ShareHomePage.js"
import ShareContentPage from "../page/shareContentPage/ShareContentPage.js"

const SharePage = StackNavigator(
  {
    ShareHomePage: {
      screen: ShareHomePage
    },
    ShareContentPage: {
      screen: ShareContentPage
    }
  },
  {
    navigationOptions: {
      header: null
    }
  }
)

export const Navigator = StackNavigator(
  {
    WelcomePage: {
      screen: WelcomePage
    },
    HomePage: {
      screen: HomePage
    },
    SharePage: {
      screen: SharePage
    }
  },
  {
    initialRouteName: "WelcomePage",
    navigationOptions: {
      header: null
    }
  }
)