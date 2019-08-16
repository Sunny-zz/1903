import { GET_COMMENTS, ADD_COMMENT } from "../actionTypes"
export default (state = [], action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return action.newComments
    case ADD_COMMENT:
      return [action.newComment, ...state]
    default:
      return state
  }
}
