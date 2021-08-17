import React from 'react'

const Input = (props) => {
  return (
    <>
      <input 
        type="text" 
        id={props.id} 
        value={props.value} 
        onChange={props.change}
        name={props.name} 
        placeholder={props.placeholder}
        className="w-full px-4 py-2 sm:py-3 rounded-md border placeholder-gray-300 dark:bg-gray-400 border-gray-200 dark:border-gray-300 focus:outline-none focus:shadow-sm ring-0 dark:placeholder-gray-500" 
      />
    </>
  )
}

export default Input