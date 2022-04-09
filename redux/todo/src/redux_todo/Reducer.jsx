// import { ADD_TODO, DELETE_TODO, GET_TODO, TOGGLE_TODO } from "./Actiontypes"
import { GET_TODO } from "./Actiontypes"

const initState = {
    todo: []
}
export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        // case ADD_TODO:
        //     return {
        //         ...state,
        //         todo: [...state.todo, payload]
        //     }
        // case DELETE_TODO:
        //     return {
        //         ...state,
        //         todo: state.todo.filter((item) => item.id !== payload)
        //     }
        case GET_TODO:
            return {
                ...state,
                todo: payload
            }
        // case TOGGLE_TODO:
        //     return {
        //         ...state,
        //         todo: state.todo.map((item) => item.id === payload ? { ...item, status: !item.status } : item)
        //     }
        default:
            return state

    }
}