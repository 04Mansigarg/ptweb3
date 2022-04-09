import { EMPLOYEEDATA, LOGIN_AUTH, TOKEN } from "./ActionTypes"

export const login_auth = (data) => {
    return {
        type: LOGIN_AUTH,
        payload: data
    }
}
export const get_token = (data) => {
    return {
        type: TOKEN,
        payload: data
    }
}
export const get_employeedata = (data) => {
    return {
        type: EMPLOYEEDATA,
        payload: data
    }
}