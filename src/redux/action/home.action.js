import data from "../../resource/data.json"

export const HOME_LIST = "HOME_LIST"

const homeList = data => (
  { type: HOME_LIST, data: data }
)

export const getHomeList = () => {
  return dispatch => {
    dispatch(homeList(data))
  }
}