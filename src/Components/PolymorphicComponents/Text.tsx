
import React from "react";

type Textownprops<E extends React.ElementType> = {
    size?: 'sm' | 'md'| 'lg'
    color?: 'primary' | 'secondary'
    children: React.ReactNode
    as?: React.ElementType
}

//Here omit used for not to overlap the children component of the React component on div children
type Textprops<E extends React.ElementType> = Textownprops<E> & Omit<React.ComponentProps<E>, keyof Textownprops<E>>
export const Text = <E extends React.ElementType = 'div'>({size, color, children, as}: Textprops<E>) => {
    const Component = as || 'div'
  return (
    <Component className={`class-with-${size}-${color}`}>
        {children}
    </Component>
  )
}


