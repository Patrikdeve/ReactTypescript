
type Verticalposition = 'top' | 'center' | 'bottom'
type Horizontalposition = 'left' | 'center' | 'right'

type Toastprops = {
    position: Exclude<`${Verticalposition}-${Horizontalposition}`, 'center-center'> | 'center'
}
export const Toast = ({position}: Toastprops) => {
    return (
        <div>{position}</div>
    )
}