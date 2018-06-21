import { StackNavigator } from "react-navigation"
import WelcomePage from "../page/welcomePage/WelcomePage.js" 
import HomePage from "../page/homePage/HomePage.js"
import MovieHomePage from "../page/movieHomePage/MovieHomePage.js"

const MoviePage = StackNavigator(
  {
    MovieHomePage: {
      screen: MovieHomePage
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
    MoviePage: {
      screen: MoviePage
    }
  },
  {
    initialRouteName: "WelcomePage",
    navigationOptions: {
      header: null 
    }
  }
)