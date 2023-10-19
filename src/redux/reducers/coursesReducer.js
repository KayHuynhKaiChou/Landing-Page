import { coursesType } from "../types/coursesType"

const initState = {
    loading: false,
    payload: null
}
export function messagerReducer( state = initState, action = { type: "", payload: null }) {
    switch (action.type) {
        case coursesType.GET_COURSES:
        return {
            loading: true,
            payload: action.payload
        }
        case coursesType.GET_COURSES_SUCCESS:
        return {
            loading: false,
            payload: action.payload
        }
        case coursesType.GET_COURSES_FAILURE:
        return {
            loading: false,
            payload: {
            ...action.payload,
            isError: true,
            }
        }
        default:
        return state
    }
}