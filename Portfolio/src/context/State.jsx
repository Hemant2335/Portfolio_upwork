import React from 'react'
import Context from './Context';
import { useState } from 'react'

const State = (Props) => {

    const [isLoading, setisLoading] = useState('');

  return (
    <Context.Provider value = {{isLoading , setisLoading}}>
        {Props.children}
    </Context.Provider>
  )
}

export default State