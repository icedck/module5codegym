import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, deleteUser } from "../redux/action";

export default function User() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    const handleGetUsers = () => {
        dispatch(getUser());
    };

    const handleDeleteUser = (id) => {
        dispatch(deleteUser(id));
    };

    return (
        <div>
            <button onClick={handleGetUsers}>Get Users</button>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                        <button onClick={() => handleDeleteUser(user.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}