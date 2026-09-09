import { useContext } from "react"
import { useState } from "react"
import { UserProvider } from "../context/UserContext"

function LoginForm() {
    const { setUserInfo } = useContext(UserProvider)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    function handleEmailChange(e) {
        setEmail(e.target.value)
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }
    function login(e) {
        e.preventDefault()

        if (email === "Abad@gmail.com" && password === "2024387023") {
            setUserInfo({ email: email, name: "Abad ali" })
            alert("Loginned")
        }
    }

    return (
        <div>
            <form onSubmit={login}>
                <div>
                    <input type="text" name="" id="" placeholder="Enter your email" onChange={handleEmailChange} />
                </div>
                <div>
                    <input type="password" name="" id="" placeholder="Enter you password" onChange={handlePasswordChange} />
                </div>
                <button type="submit">Login</button>
            </form>

        </div>
    )
}

export default LoginForm