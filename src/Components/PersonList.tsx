import { Name } from "./Person.type"
type Personlistprops = {
    nameList: Name[]
}
export const PersonList = (props: Personlistprops) => {
    return (
        <div> 
            {
                props.nameList.map((item, index) => <h2 key= {item.fname + index}>{item.fname} {item.lname}</h2>)
            }
        </div>
    )
}