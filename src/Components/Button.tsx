
type Buttonprops = {
    handleClick : (event: React.MouseEvent<HTMLButtonElement>, id:number) => void
}
export const Button = (props:Buttonprops) => {
    return (
        <div> 
            <button onClick = {event => props.handleClick(event, 1)}><h2 id='buttonclick'>Click Me</h2></button>
        </div>
    )
}