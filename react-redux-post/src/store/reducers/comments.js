import { GET_COMMENTS, ADD_COMMENT, DEL_COMMENT } from "../actionTypes"
export default (state = [], action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return action.newComments
    case ADD_COMMENT:
      return [action.newComment, ...state]
    case DEL_COMMENT:
      return state.filter(comment => comment.id !== action.id)
    default:
      return state
  }
}
