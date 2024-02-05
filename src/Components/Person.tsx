import { Personprops } from "./Person.type"
export const Person = (props: Personprops) => {
    return (
        <div> 
            <h3>{props.name.fname} {props.name.lname}</h3>
        </div>
    )
}