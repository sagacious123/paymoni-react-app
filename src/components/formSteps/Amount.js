import React, { useState } from 'react'
import AmountInput from '../AmountInput'

const Amount = ({ formData, setForm, navigation, disable, setDisable }) => {

  const [height, setHeight] = useState(0)

  const handleDisable = () => {
    if(formData.sentAmount >= 1) {
      setHeight(126);
      setDisable(false);
    } else {
      setDisable(true);
      setHeight(0);
    }
  }

  if(formData.sentAmount < 1) {
      // setHeight(0);
      setDisable(true);
    }

  console.log(formData)
  return (
    <div className="bg-white py-8 px-5 md:p-8 w-11/12 max-w-lg m-auto mt-28 sm:mt-40 mb-16 lg:mt-16 rounded-md shadow-sm border border-gray-100">
      <h1 className="text-indigo-800 text-lg font-bold">One-time Payout</h1>
      <h2 className="text-gray-400 mb-6">Send money internationally</h2>
      <AmountInput 
        labelFor="fromCurrency"
        labelValue="You send"
        inputId="fromCurrency"
        inputValue={formData.sentAmount}
        inputChange={setForm}
        inputName="sentAmount"
        selectName="fromCurrency"
        selectId="fromCurrenctSelect"
        
      />
      
      <div style={{height: `${height}px`}} className={`transition-all duration-300 relative z-0 ${height > 1 ? "opacity-100" : "opacity-0"}`} >
        <div className="text-sm text-gray-500 mb-3"><span className="bg-gray-200 text-lg font-bold rounded-full p-0 px-2 mr-2">-</span> <span className="mr-6 text-base">3.69USD</span> <span>Transfer fee</span></div>
        <div className="text-sm text-gray-500 mb-3"><span className="bg-gray-200 text-lg font-bold rounded-full p-0 px-2 mr-2">-</span> <span className="mr-6 text-base">3.69USD</span> <span>Transfer fee</span></div>
        <div className="text-sm text-gray-500 mb-4"><span className="bg-gray-200 text-lg font-bold rounded-full p-0 px-2 mr-2">-</span> <span className="mr-6 text-base">3.69USD</span> <span>Transfer fee</span></div>
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
        <button onClick={handleDisable} className="bg-transparent border-2 border-indigo-700 py-2 px-2 sm:py-3 sm:px-3 w-6/8 rounded-md text-indigo-700 hover:bg-indigo-700 hover:text-white transition-all duration-300">Compare Rates</button>
        <input type="button" value="Continue" onClick={() => navigation.next()} className={`bg-indigo-700 border-2 border-indigo-700 py-2 px-2 sm:py-3 sm:px-3 w-6/8 rounded-md text-white cursor-pointer transition-all duration-300 ${disable ? "opacity-40 cursor-not-allowed hover:bg-indigo-700 hover:text-white" : "hover:bg-transparent hover:text-indigo-700"}`} disabled={disable} />
      </div>
    </div>
  )
}

export default Amount
//                