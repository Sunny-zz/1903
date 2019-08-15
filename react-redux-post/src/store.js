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
    default:
      return state
  }
}

const store = createStore(rootReducer, applyMiddleware(logger))

export default store
