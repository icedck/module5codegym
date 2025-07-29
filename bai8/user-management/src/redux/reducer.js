import { SET_USER, DELETE_USER_SUCCESS } from "./action";

const initialState = {
    users: [],};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                users: action.payload,
            };
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload),
            };
        default:
            return state;
    }
};
