import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fakeLogin } from "../redux/action";

function Login(){
    const navigate = useNavigate();
    const dispath = useDispatch();
    const [user, setUser] = useState({username: "", password: ""});

    const userlogined = useSelector(state => state.userlogined);
    const setValueForUser = (key, value) => {
        const newVal = {...user, [key]: value};
        setUser(newVal);
    }

    const login = () => {
        // dispath({type: "LOGIN", payload: user});
        dispath(fakeLogin(user));
    }

    useEffect(() => {
        if(userlogined){
            navigate("/users");
        }
    }, [userlogined, navigate])

    return(
        <form>
            <label>User name</label>
            <input type="text" id="username" onChange={(e) => setValueForUser("username", e.target.value)}/>
            <label>Password</label>
            <input type="password" id="password" onChange={(e) => setValueForUser("password", e.target.value)}/>
            <button type="button" onClick={() => login()}>Login</button>
        </form>
    )
}

export default Login