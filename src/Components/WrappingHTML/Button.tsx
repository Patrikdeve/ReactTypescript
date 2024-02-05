import React from "react"

type Buttonprops = {
    variants: 'primary' | 'secondary'
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>


//if we check without the omit keyword the children is of the type of React.Reactnode to make it only for strings we use
//constraints on the children's type by using omit kyeword it makes children as of the type string only 
export const CustomButton = ({variants, children, ...rest}: Buttonprops) => {
    return (
        <button className={`class-with-${variants}`} {...rest}>{children}</button>
    )
}