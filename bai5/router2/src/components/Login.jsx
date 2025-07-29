import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if(email === "admin@gmail.com" && password === "1234"){
            navigate("/employees", {state : {email}});
        }else{
            alert("Invalid credentials");
        }
    }

    return(
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;