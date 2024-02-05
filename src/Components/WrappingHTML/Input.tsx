
import React from "react";

type Inputprops = React.ComponentProps<'input'>

export const CustomInput = ({...rest}:Inputprops) => {
    return (
        <input type="text" {...rest}/>
    )
}