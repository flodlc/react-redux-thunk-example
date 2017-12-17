const initialNumberState = {
    value: null,
    loading: false
};

function number(state = initialNumberState, action) {
    switch (action.type) {
        case 'ADD':
            return Object.assign(
                {},
                state,
                {
                    value: state.value + action.valueChange,
                }
            );

        case 'LOAD':
            return Object.assign(
                {},
                state,
                {
                    loading: action.value
                }
            );

        default:
            return state;
    }
}

export function rootReducer(state = {}, action) {
    return {
        number: number(state.number, action)
    };
}