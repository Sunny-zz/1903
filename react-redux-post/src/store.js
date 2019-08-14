import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"

const initialState = {
  posts: [
    {
      id: "13213",
      title: "react",
      content: "<div>13612836</div>"
    }
  ],
  comments: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const store = createStore(rootReducer, applyMiddleware(logger))

export default store
