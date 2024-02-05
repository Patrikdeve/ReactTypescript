type GreetProps = {
    name: string, 
    //Called Optional Props
    msgcount?: number, //This question marks insures that if this props is not passed so it not be used or considered
    isLoggedIn: boolean
}


export const Greet =(props:GreetProps) => {
    const {msgcount = 0 } = props
    return (
        <div>
           {
            props.isLoggedIn ?  <h2>Hello {props.name} !! You Have {msgcount} new notifications</h2>:<h1>Hello Guest !!</h1>
           }
        </div>
    )
}
