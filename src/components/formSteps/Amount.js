import React from 'react'

const Amount = ({ formData, setForm, navigation, disable, setDisable }) => {

  const handleDisable = () => {
    if(formData.sentAmount.length >= 1) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }

  if(formData.sentAmount.length < 1) {
      setDisable(true);
    }

  console.log(formData)
  return (
    <div className="bg-white py-8 px-5 md:p-8 w-11/12 max-w-lg m-auto mt-28 sm:mt-40 mb-16 lg:mt-16 rounded-md shadow-sm border border-gray-100">
      <h1 className="text-indigo-800 text-lg font-bold">One-time Payout</h1>
      <h2 className="text-gray-400 mb-6">Send money internationally</h2>
      <div className="w-full flex mb-4 relative">
        <label 
          htmlFor="fromCurrency" 
          className="absolute text-gray-400 text-sm ml-4 mt-1 sm:mt-2">
          You send
        </label>
        <input 
          type="number" 
          id="fromCurrency" 
          value={formData.sentAmount} 
          onChange={setForm}
          name="sentAmount" 
          className="w-9/12 px-3 pb-1 pt-5 sm:pb-1 sm:pt-7 text-sm sm:text-base rounded-l-md border border-gray-200 border-r-0 focus:outline-none focus:shadow-sm ring-0" />
        <select 
          name="fromCurrencySelect" 
          id="" 
          className="w-3/12 py-3 sm:py-4 px-2 bg-gray-100 rounded-r-md focus:outline-none focus:ring-0">
          <option value="">NGN</option>
        </select>
      </div>
      <div>
        <div className="text-sm text-gray-500 mb-3"><span className="bg-gray-200 text-lg font-bold rounded-full p-0 px-2 mr-2">-</span> <span className="mr-6 text-base">3.69USD</span> <span>Transfer fee</span></div>
        <div className="text-sm text-gray-500 mb-3"><span className="bg-gray-200 text-lg font-bold rounded-full p-0 px-2 mr-2">-</span> <span className="mr-6 text-base">3.69USD</span> <span>Transfer fee</span></div>
        <div className="text-sm text-gray-500 mb-4"><span className="bg-gray-200 text-lg font-bold rounded-full p-0 px-2 mr-2">-</span> <span className="mr-6 text-base">3.69USD</span> <span>Transfer fee</span></div>
      </div>
      <div className="w-full flex relative">
        <label 
          htmlFor="toCurrency" 
          className="absolute text-gray-400 text-sm ml-4 mt-1 sm:mt-2">
          Recipient gets
        </label>
        <input 
          type="number" 
          id="toCurrency" 
          value={formData.receivedAmount}
          onChange={setForm}
          name="receivedAmount" 
          className="w-9/12 px-3 pb-1 pt-5 sm:pb-1 sm:pt-7 text-sm sm:text-base rounded-l-md border border-gray-200 border-r-0 focus:outline-none ring-0 cursor-default" 
          readonly="true"
        />
        <select 
          name="toCurrency" 
          id="toCurrencySelect" 
          className="w-3/12 py-3 sm:py-4 px-2 bg-gray-100 rounded-r-md focus:outline-none focus:ring-0">
          <option value="">NGN</option>
        </select>
      </div>
      <div className="flex justify-between mt-6">
        <button onClick={handleDisable} className="bg-transparent border-2 border-indigo-700 py-2 px-2 sm:py-3 sm:px-3 w-6/8 rounded-md text-indigo-700 hover:bg-indigo-700 hover:text-white transition-all duration-300">Compare Rates</button>
        <input type="button" value="Continue" onClick={() => navigation.next()} className={`bg-indigo-700 border-2 border-indigo-700 py-2 px-2 sm:py-3 sm:px-3 w-6/8 rounded-md text-white cursor-pointer transition-all duration-300 ${disable ? "opacity-40 cursor-not-allowed hover:bg-indigo-700 hover:text-white" : "hover:bg-transparent hover:text-indigo-700"}`} disabled={disable} />
      </div>
    </div>
  )
}

export default Amount
