export function add(valueChange) {
    return {
        type: 'ADD',
        valueChange: valueChange
    }
};

export function load(value) {
    return {
        type: 'LOAD',
        value: value
    }
};