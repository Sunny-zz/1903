import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"

const initialState = {
  posts: [],
  comments: []
}
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETPOSTS":
      return {
        ...state,
        posts: action.newPosts
      }
    case "GETCOMMENTS":
      return {
        ...state,
        comments: action.newComments
      }
    case "ADDCOMMENT":
      return {
        ...state,
        comments: [action.newComment, ...state.comments]
      }
    case "DELCOMMENT":
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== action.id)
      }
    default:
      return state
  }
}

const store = createStore(rootReducer, applyMiddleware(logger))

export default store
