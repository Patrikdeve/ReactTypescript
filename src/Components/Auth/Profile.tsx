
export type Profileprops = {
    name: string
}

export const Profile = ({name}: Profileprops) => {
    return (
        <div>
            Private Profile Component. 
            UserName: {name}
        </div>
    )
}