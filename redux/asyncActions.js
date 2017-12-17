import {add, load} from './actions';
import fetch from './fetch';

export function addAsync() {
    return (dispatch, getState) => {
        if (getState().number.value === null && !getState().number.loading) {
            fetch
                .then((value) => {
                    dispatch(add(value));
                    dispatch(load(false));
                });
            dispatch(load(true))
        }
    }
};