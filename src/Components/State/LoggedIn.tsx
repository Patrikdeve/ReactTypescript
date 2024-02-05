
import { useState } from "react"
export const LoggedIn = () => {
    const [logIn, setLogIn] = useState(false)
    const handleLogIn = () => {
        setLogIn(true)
    }
    const handleLogOut = () => {
        setLogIn(false)
    }

    return ( 
        <div>
            <button onClick={handleLogIn}>Log In</button>
            <button onClick={handleLogOut}>Log Out</button>
            <h3>User is just 
                {
                    logIn ? ` Logged In`:` Logged Out`
                }
            </h3>
        </div>
    )
}