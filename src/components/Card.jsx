import React from 'react'

const Card = (props) => {
  return (
    <div  className='p-4 rounded-2xl bg-gray-300 text-black flex flex-col '>
        <h3 className='font-bold'>{props.title}</h3>
        <h4 className='font-extralight'>{props.txt}</h4>
    </div>
  )
}

export default Card