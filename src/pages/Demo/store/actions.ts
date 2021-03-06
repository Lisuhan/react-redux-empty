import * as actionTypes from './actionTypes'

export function fetch_ColorChangeHandler(param: any) {
    return (dispatch: any, getState: any) => {
        const url = '/colorCollection'
        dispatch({
            type: actionTypes.CHANGE_COLOR_REQUEST,
        })
        fetch(url)
            .then(response => response.json())
            .then(data =>
                dispatch({
                    type: actionTypes.CHANGE_COLOR_SUCCESS,
                    response: data,
                })
            )
            .catch(e =>
                dispatch({
                    type: actionTypes.CHANGE_COLOR_FAILURE,
                    message: e,
                })
            )
    }
}
