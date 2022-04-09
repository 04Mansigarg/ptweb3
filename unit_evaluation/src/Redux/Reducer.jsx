import { EMPLOYEEDATA, LOGIN_AUTH, TOKEN } from "./ActionTypes"

const initState = {
    loginAuth: false,
    token: null,
    employeeData: []
}


export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case LOGIN_AUTH:
            return {
                ...state,
                loginAuth: payload
            }
        case TOKEN:
            return {
                ...state,
                token: payload
            }
        case EMPLOYEEDATA:
            return {
                ...state,
                employeeData: payload
            }
        default: return state
    }
}