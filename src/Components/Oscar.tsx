type Oscarprops = {
    children: React.ReactNode //passing the react component as children prop
}

export const Oscar = (props:Oscarprops) => {
    return <h2>{props.children}</h2>
}