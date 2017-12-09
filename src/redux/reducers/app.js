// action types
import * as types from '../ActionTypes'

// reducer
export default function (state = { tab: 0 }, action) {
    switch (action.type) {
        case types.SET_MAINTAB:
            return Object.assign({}, state, {
                tab: action.tab
            })
        default:
            return state
    }
}
