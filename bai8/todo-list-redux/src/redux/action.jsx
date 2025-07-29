export const addTodoAction = (data) => {
    return {
        type: "ADD_TODO",
        payload: data
    }
}

export const deleteTodoAction = (data) => {
    return {
        type: "DELETE_TODO",
        payload: data
    }
}