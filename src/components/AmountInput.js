import React from 'react'

const AmountInput = ({ 
  labelFor,
  labelValue,
  inputId,
  inputValue,
  inputChange,
  inputName,
  selectValue,
  selectName,
  selectId,
  readOnly,
  cursor
}) => {
  return (
    <div className="w-full flex mb-4 relative z-10">
        <label 
          htmlFor={labelFor} 
          className="absolute text-gray-400 dark:text-gray-900 text-sm ml-4 mt-1 sm:mt-2">
          {labelValue}
        </label>
        <input 
          type="number" 
          id={inputId} 
          value={inputValue} 
          onChange={inputChange}
          name={inputName} 
          readonly={readOnly}
          className={`w-9/12 px-3 pb-1 pt-6 sm:pb-1 sm:pt-7 text-base rounded-l-md border border-gray-200 border-r-0 focus:outline-none focus:shadow-sm ring-0 dark:bg-gray-400 dark:border-gray-300 ${cursor}`} />
        <select 
          name={selectName} 
          id={selectId} 
          className="w-3/12 py-3 sm:py-4 px-2 dark:text-gray-200 bg-gray-100 dark:bg-gray-500 rounded-r-md cursor-pointer focus:outline-none focus:ring-0">
          <option value={selectValue}>{selectValue}</option>
        </select>
      </div>
  )
}

export default AmountInput
