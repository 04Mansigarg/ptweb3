import { ADD_TODO, DELETE_TODO, GET_TODO } from "./Actiontypes"

export const add_todo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}

export const delete_todo = (payload) => {
    return {
        type: DELETE_TODO,
        payload
    }
}

export const get_todo = (payload) => {
    return {
        type: GET_TODO,
        payload
    }

}
export const toggle_todo = (payload) => {
    return {
        type: GET_TODO,
        payload
    }

}