// import { GET_POSTS } from "../actionTypes"
export default (
  state = [
    {
      id: "1",
      title: "react",
      content: "<div>react 666</div>"
    },
    {
      id: "2",
      title: "vue",
      content: "<div>vue 888</div>"
    }
  ],
  action
) => {
  switch (action.type) {
    default:
      return state
  }
}
