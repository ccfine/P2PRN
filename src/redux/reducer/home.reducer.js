import { HOME_LIST } from "../action/home.action.js"

const initState = {
  data: []
}

export const home = (state=initState, action) => {
  switch (action.type) {
    case HOME_LIST:
      return { ...state, data: action.data.data }
    default:
      return state
  }
}