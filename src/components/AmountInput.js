import React from 'react'

const AmountInput = ({ 
  labelFor,
  labelValue,
  inputId,
  inputValue,
  inputChange,
  inputName,
  selectName,
  selectId,
  readOnly,
  cursor
}) => {
  return (
    <div className="w-full flex mb-4 relative">
        <label 
          htmlFor={labelFor} 
          className="absolute text-gray-400 text-sm ml-4 mt-1 sm:mt-2">
          {labelValue}
        </label>
        <input 
          type="number" 
          id={inputId} 
          value={inputValue} 
          onChange={inputChange}
          name={inputName} 
          readonly={readOnly}
          className={`w-9/12 px-3 pb-1 pt-6 sm:pb-1 sm:pt-7 text-sm sm:text-base rounded-l-md border border-gray-200 border-r-0 focus:outline-none focus:shadow-sm ring-0 ${cursor}`} />
        <select 
          name={selectName} 
          id={selectId} 
          className="w-3/12 py-3 sm:py-4 px-2 bg-gray-100 rounded-r-md cursor-pointer focus:outline-none focus:ring-0">
          <option value="">NGN</option>
        </select>
      </div>
  )
}

export default AmountInput
