import Header from "../components/Header/header";
import { useState } from "react";

function Register(){
    const [userName, setName] = useState('')
    const [userEmail, setEmail] = useState('')
    const [userPassword, setPassword] = useState('')
    const [userPasswordCon, setPasswordCon] = useState('')

    const handleName = (event) =>{
        setName(event.target.value)
    }
    const handlePassword = (event) =>{
        setPassword(event.target.value)
    }
    const handlePasswordCon = (event) =>{
        setPasswordCon(event.target.value)
    }
    const handleEmail = (event) =>{
        setEmail(event.target.value)
    }

    const handleSubmit = () =>{
        if (userPassword != userPasswordCon){
            alert('Passwords must match!')
        } else if (userPassword.length < 8){
            alert('Passwords must be at least 8 characters')
        } else if (userPassword.length > 20){
            alert('Passwords must be shorter than 20 characters')
        } else {
            fetch("http://localhost:8000/users", {
                method: 'POST',
                headers: {"Accept": "application/json", "Content-Type": "application/json"},
                body: JSON.stringify(
                    {
                        "name" : userName,
                        "email" : userEmail,
                        "password" : userPassword
                    }
                )
            }).then(() => {
                console.log('User Created')
            })
        }
    }
    return(
        <>
            <Header/>
                <div className="registerBox">
                    <br />
                    <p className="loginPageTextBox">Register</p>
                    <form>
                        <input onChange={handleEmail} className="registerInput" type="email" placeholder="E-mail" name="userEmail" required/>
                        <input onChange={handleName} className="registerInput" type="text" placeholder="Name" name="userFName" required/>
                        <input onChange={handlePassword} className="registerInput" type="password" placeholder="Password" name="userPassword" required min={8} max={20}/>
                        <input onChange={handlePasswordCon} className="registerInput" type="password" placeholder="Confirm Password" name="userPasswordCon" required min={8} max={20}/>
                        <button onClick={handleSubmit} className="loginButton">Register</button>
                    </form>
                </div>
        </>
    )
}

export default Register