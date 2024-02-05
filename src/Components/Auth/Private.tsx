import { Login } from "./Login"
import { Profileprops } from "./Profile"

type Privateprops = {
    isLoggedIn: boolean, 
    Component: React.ComponentType<Profileprops>
}

export const Private = ({isLoggedIn, Component}: Privateprops) => {
    if(isLoggedIn) 
        return <Component name = 'Omkar'/>
    else 
        return <Login/>
}