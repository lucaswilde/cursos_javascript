import * as actionTypes from './actionsTypes';

export const saveResult = (res) => {
    return { type: actionTypes.STORE_RESULT, result: res };
}

export const storeResult = (result) => {
    // dispatch é provido pelo reedux-thunk (para fazer chamadas assincronas)
    return dispatch => {
        setTimeout( () => {
            dispatch(saveResult(result));
        } , 2000);
    }
}

export const deleteResult = (resultElId) => {
    return { type: actionTypes.DELETE_RESULT, resultElId: resultElId }
}