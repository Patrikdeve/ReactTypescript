import { useState } from "react"
type Userprops = {
    name: string, 
    email: string
}

// export const User = (props: Userprops) => {
//     const {name, email} = props
//     const [user, setUser] =  useState<Userprops | null>(null)
//     const handleLogIn = () => {
//         setUser({
//             name: name, 
//             email:email
//         })
//     }
//     const handleLogOut = () => {
//         setUser(null)
//     }
//     return ( 
//         <div>
//             <button onClick={handleLogIn}>Log In</button>
//             <button onClick={handleLogOut}>Log Out</button>
//             <div><h2>Username : {user?.name} </h2>
//                  <h2>Email: {user?.email}</h2> 
//             </div>
//         </div>
//     )
//     //Here in above code the question mark in front of user? indicates that to check first whether the user is null or not
// }

//For not using the check we can also write it as 
export const User = (props: Userprops) => {
    const {name, email} = props
    const [user, setUser] =  useState<Userprops>({} as Userprops)
    const handleLogIn = () => {
        setUser({
            name: name, 
            email:email
        })
    }
    const handleLogOut = () => {
        setUser({} as Userprops)
    }
    return ( 
        <div>
            <button onClick={handleLogIn}>Log In</button>
            <button onClick={handleLogOut}>Log Out</button>
            <div><h2>Username : {user.name} </h2>
                 <h2>Email: {user.email}</h2> 
            </div>
        </div>
    )
    
}