// action types
import * as types from '../ActionTypes'

// reducer
export default function (state = { books: 0 }, action) {
  switch (action.type) {
    case types.GET_SHELFBOOKS_REQUEST:
      // 初始化评论
      return { comments: action.comments }
    case types.GET_SHELFBOOKS_SUCCESS:
      // 新增评论
      return {
        comments: [...state.comments, action.comment]
      }
    case types.GET_SHELFBOOKS_FAILURE:
      // 删除评论
      return {
        comments: [
          ...state.comments.slice(0, action.commentIndex),
          ...state.comments.slice(action.commentIndex + 1)
        ]
      }
    default:
      return state
  }
}
