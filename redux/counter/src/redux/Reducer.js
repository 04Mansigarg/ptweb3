import { ADD_COUNT, REDUCE_COUNT } from "./ActionTypes";

const initState = {
    counter: 1
};
export const reducer = (state = initState, { type, payload }) => {
    console.log(state, type, payload);
    switch (type) {
        case ADD_COUNT:
            return {
                ...state,
                counter: state.counter + payload
            };
        case REDUCE_COUNT:
            return {
                ...state,
                counter: state.counter - payload
            };
        default:
            return state
    }
};
