export const GET_USER = "GET_USER";
export const SET_USER = "SET_USER";
export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";

export const getUser = () => {
    return {
        type: GET_USER,
    };
};

export const setUser = (users) => {
    return {
        type: SET_USER,
        payload: users,
    };
};

export const deleteUser = (id) => {
    return {
        type: DELETE_USER,
        payload: id,
    };
};

export const deleteUserSuccess = (id) => {
    return {
        type: DELETE_USER_SUCCESS,
        payload: id,
    };
};