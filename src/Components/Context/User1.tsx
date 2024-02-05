import { useContext } from "react"
import { UserContext } from "./UserContext"


export const User1 = () => {
    const userContext = useContext(UserContext)
    const handleLogIn = () => {
        userContext?.setUser({
            name: 'Shreyash', 
            email: 'Shreyash@example.com'
        })
    }
    const handleLogOut = () => {
        if(userContext) {
            userContext.setUser(null)
        }
    }

    return ( 
        <div>
            <button onClick={handleLogIn}>Log In</button>
            <button onClick={handleLogOut}>Log Out</button>
            <h4>UserName: {userContext?.user?.name} </h4>
            <h4>Email: {userContext?.user?.email}</h4>
        </div>
    )
}