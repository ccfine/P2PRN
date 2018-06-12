import { StackNavigator } from "react-navigation"
import WelcomePage from "../page/welcomePage/WelcomePage.js" 
import HomePage from "../page/homePage/HomePage.js"

export const Navigator = StackNavigator(
  {
    WelcomePage: {
      screen: WelcomePage
    },
    HomePage: {
      screen: HomePage
    }
  },
  {
    initialRouteName: "WelcomePage",
    navigationOptions: {
      header: null 
    }
  }
)