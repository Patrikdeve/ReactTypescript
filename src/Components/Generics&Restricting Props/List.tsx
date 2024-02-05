
type Listprops<T> = {
    items: T[]
    onClick: (value: T) => void
}

export const List = <T extends string | number >({items, onClick}:Listprops<T>) => {

    return (
        <div>
            <h3>List of Items</h3>
            {
                items.map((item, index) => {
                    return(
                        <div key={index} onClick = {() => onClick(item)}> {item}</div>
                    )
                })
            }
        </div>
    )
} 