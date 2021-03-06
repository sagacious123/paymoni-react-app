import React, { useState, useEffect } from 'react'
import AmountInput from '../AmountInput'

const Amount = ({ 
  formData, 
  setForm, 
  navigation, 
  disable, 
  setDisable, 
  transferFee, 
  transferAmount 
}) => {

  const [height, setHeight] = useState(0)
  const [selectValue, setSelectValue] = useState("NGN")

  const handleDisable = () => {
    if(formData.sentAmount >= 1) {
      setHeight(110);
      setDisable(false);
    } else {
      setDisable(true);
      setHeight(0);
    }
  }

  useEffect(() => {
    handleDisable();
  }, [])

  if(formData.sentAmount < 1) {
      // setHeight(0);
      setDisable(true);
    }

  console.log(formData)
  return (
    <div className="bg-white py-8 px-5 md:p-8 w-11/12 max-w-lg m-auto mt-28 sm:mt-40 mb-16 lg:mt-16 rounded-md shadow-sm border border-gray-100 dark:border-gray-500 dark:bg-gray-700">
      <h1 className="text-indigo-800 dark:text-indigo-500 text-lg font-bold">One-time Payout</h1>
      <h2 className="text-gray-400 dark:text-gray-300 mb-6">Send money internationally</h2>
      <AmountInput 
        labelFor="fromCurrency"
        labelValue="You send"
        inputId="fromCurrency"
        inputValue={formData.sentAmount}
        inputChange={setForm}
        inputName="sentAmount"
        selectValue={selectValue}
        selectName="fromCurrency"
        selectId="fromCurrenctSelect"
      />
      
      <div style={{height: `${height}px`}} className={`result transition-all duration-300 relative z-0 ml-3 ${height > 1 ? "opacity-100" : "opacity-0"}`} >
        <div className="text-sm text-gray-500 dark:text-gray-300 mb-3 flex items-center"><span className="bg-gray-200 dark:bg-gray-300 text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center mr-2 dark:text-gray-700">-</span> <span className="mr-6 text-base">{transferFee+selectValue}</span> <span>Transfer fee</span></div>
        <div className="text-sm text-gray-500 dark:text-gray-300 mb-3 flex items-center"><span className="bg-gray-200 dark:bg-gray-300 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center mr-2 dark:text-gray-700">=</span> <span className="mr-6 text-base">{transferAmount+selectValue}</span> <span>Amount we'll convert</span></div>
        <div className="text-sm text-gray-500 dark:text-gray-300 mb-0 flex items-center"><span className="bg-gray-200 dark:bg-gray-300 text-xs rounded-full h-5 w-5 flex items-center justify-center mr-2 dark:text-gray-700">x</span> <span className="mr-6 text-base">1.12345</span> <span>Guaranteed rate</span></div>
      </div>
      <AmountInput 
        labelFor="toCurrency"
        labelValue="Recipient gets"
        inputId="tourrency"
        inputValue={formData.receivedAmount}
        inputChange={setForm}
        inputName="receivedAmount"
        selectName="toCurrency"
        selectId="toCurrenctSelect"
        readOnly="true"
        cursor="cursor-default"
        
      />
      
      <div className="flex justify-between mt-6 relative">
        <button onClick={handleDisable} className="bg-transparent border-2 border-indigo-700 dark:border-indigo-500 py-2 px-2 sm:py-3 sm:px-3 w-6/8 rounded-md text-indigo-700 dark:text-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-white transition-all duration-300">Compare Rates</button>
        <input type="button" value="Continue" onClick={() => navigation.next()} className={`bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-transparent border-2 border-indigo-700 dark:border-indigo-500 py-2 px-2 sm:py-3 sm:px-3 w-6/8 rounded-md text-white cursor-pointer transition-all duration-300 ${disable ? "opacity-40 cursor-not-allowed hover:bg-indigo-700 dark:hover:bg-indigo-500 hover:text-white" : "hover:bg-transparent hover:text-indigo-700 dark:hover:text-indigo-500"}`} disabled={disable} />
      </div>
    </div>
  )
}

export default Amount
//                