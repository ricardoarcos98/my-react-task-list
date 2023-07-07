import React from 'react'

export const TodoCounter = ({counter, all}) => {
  
  return (

    counter==all ?
    
    <h2 className='TodoCounter'>  Congrats 🚀 you completed {counter} of {all} 🚀  </h2>
    :

    <h2 className='TodoCounter'> It has already completed {counter} of {all}  </h2>
  )
}
