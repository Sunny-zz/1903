import { GET_POSTS } from "../actionTypes"
export default (state = [], action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.newPosts
    default:
      return state
  }
}
