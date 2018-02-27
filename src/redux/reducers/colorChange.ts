import * as actionsTypes from "../../constants/actionTypes"
import Immutable from "immutable"

let defaultState = Immutable.fromJS({
    isFetching: false,
    colorCollection: [],
})

export default function Color(state = defaultState, action: any) {
    let { type } = action

    switch (type) {
        case actionsTypes.CHANGE_COLOR_REQUEST:
            return state.update("isFetching", () => true)
        case actionsTypes.CHANGE_COLOR_SUCCESS:
            const colorCollection = action.response
            return state
                .update("colorCollection", (v: any) =>
                    Immutable.fromJS(colorCollection)
                )
                .update("isFetching", () => {
                    return false
                })
        case actionsTypes.CHANGE_COLOR_FAILURE:
            return state
        default:
            return state
    }
}
