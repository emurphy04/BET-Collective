import Header from "../components/Header/header";
import { Link } from "react-router-dom";
import { useState } from "react";
import users from '../users.json'

function Login(){

    const [email, setLoginEmail] = useState('')
    const [password, setLoginPassword] = useState('')

    const handleLoginEmail = (event) =>{
        setLoginEmail(event.target.value)
    }
    const handleLoginPass = (event) =>{
        setLoginPassword(event.target.value)
    }

    const handleLogin = () =>{
        for (let i = 0; i<users.users.length; i++){
            console.log(userValid)
            if (users.users[i].email == email){
                var userValid = true
                if (users.users[i].password == password){
                    var isLogged = true
                    
                } else {
                    alert('Incorrect password')
                }
                
            } else {
                var userValid = false
            }
        }
    }
        

    return(
        <>
            <Header/>
            <div className="loginPageBox">
                <div className="loginPageTextBox"><p>Login</p></div>
                <input onChange={handleLoginEmail} className="loginInput" type="email" placeholder="E-mail" min={4}/>
                <input onChange={handleLoginPass} className="loginInput" type="password" placeholder="Password" max={20} min={8}/>
                <button onClick={handleLogin} className="loginButton">Login</button>
                <Link to={'/register'}><p className="registerMsg">Need an account? Register Here!</p></Link>
            </div>
        </>
    )
}

export default Login