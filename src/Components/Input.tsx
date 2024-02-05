import { Inputprops } from "./Input.type"
//This is also how we can import the types

export const Input = (props:Inputprops) => {
    return <input type = 'text' value = {props.value} onChange = {props.handleChange}/>
}