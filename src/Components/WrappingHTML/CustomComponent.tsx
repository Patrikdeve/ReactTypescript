//For this also having the same types of the greet we can do it as follows 

import React from 'react'
import { Greet } from '../Greet'

//The following props states import all the same props as of the greet
export const CustomComponent = ( props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
        
    </div>
  )
}


