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
        comments: [...state.comments, action.newComment]
      }
    default:
      return state
  }
}

const store = createStore(rootReducer, applyMiddleware(logger))

export default store
