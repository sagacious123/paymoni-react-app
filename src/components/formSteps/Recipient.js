import React, { useState } from 'react'
import Input from '../Input'

const Recipient = ({ formData, setForm, navigation, disable, setDisable }) => {

  const [tabIndex, setTabIndex] = useState(1);

  const handleTab = (index) => {
    setTabIndex(index)
  }

  if((formData.recipientEmail.length >= 1 && formData.recipientName.length >= 1 && formData.iban.length >= 10) || (formData.recipientEmail.length >= 1 && formData.recipientName.length >= 1 && formData.swiftCode.length >= 8 && formData.ibanAccountNo.length >= 10)) {
    setDisable(false);
  } else {
    setDisable(true);
  }

  return (
    <form method="POST" className="bg-white py-8 px-5 md:p-8 w-11/12 max-w-lg m-auto mt-28 sm:mt-40 mb-16 lg:mt-16 rounded-md shadow-sm border border-gray-100 dark:border-gray-500 dark:bg-gray-700" 
      onSubmit={(e) => {
        e.preventDefault();
        navigation.next();
      }}
    >
      <h1 className="text-indigo-800 dark:text-indigo-500 text-lg font-bold">Your Recipient</h1>
      <h2 className="text-gray-400 mb-3 dark:text-gray-300">Who are you sending money to?</h2>
      <div className="border-t border-gray-100 dark:border-gray-400 pt-5 pb-4 mb-2">
        <div className="w-full mb-4 relative">
          <label 
            htmlFor="fromCurrency" 
            className="text-gray-400 text-sm mb-2 inline-block">
            Their email (optional)
          </label>
          <Input 
            id="fromCurrency"
            name="recipientEmail"
            value={formData.recipientEmail}
            change={setForm}
          />
        </div>
        <div className="w-full relative">
          <label 
            htmlFor="toCurrency" 
            className="text-gray-400 text-sm mb-2 inline-block">
            Full name of the account holder
          </label>
          <Input 
            id="toCurrency"
            name="recipientName"
            value={formData.recipientName}
            change={setForm}
          />
        </div>
      </div>
      

      <div className="">
        <h2 className="text-indigo-800 dark:text-indigo-500 text-base font-bold border-b border-gray-100 dark:border-gray-400 pb-2 mb-5">Bank details</h2>
        <div className="border-b border-gray-100 dark:border-gray-500 mb-5">
          <button 
            onClick={() => handleTab(1)} 
            className={`py-1 px-4 text-gray-400 text-sm mr-6 hover:text-indigo-700 dark:hover:text-indigo-500 ${tabIndex === 1 && "font-bold text-indigo-700 dark:text-indigo-500 border-b-2 border-indigo-700 dark:border-indigo-500 "}`}>
            Inside Europe
          </button>
          <button 
            onClick={() => handleTab(2)} 
            className={`py-1 px-4 text-gray-400 text-sm hover:text-indigo-700 dark:hover:text-indigo-500 ${tabIndex === 2 && "font-bold text-indigo-700 dark:text-indigo-500 border-b-2 border-indigo-700 dark:border-indigo-500"}`}>
            Outside Europe
          </button>
        </div>
      
        { tabIndex === 1 && 
          <div className="w-full mb-4 relative">
            <label 
              htmlFor="iban" 
              className="text-gray-400 text-sm mb-2 inline-block">
              IBAN
            </label>
            <Input 
              id="iban" 
              placeholder="DE98370440018929829032"
              name="iban"
              value={formData.iban}
              change={setForm}
            />
          </div>
        }
      
        { tabIndex === 2 &&
          <div className="">
            <div className="w-full relative">
              <label 
                htmlFor="swift" 
                className="text-gray-400 text-sm mb-2 inline-block">
                SWIFT / BIC code
              </label>
              <Input 
                id="swift" 
                placeholder="BUKBGB22"
                name="swiftCode"
                value={formData.swiftCode}
                change={setForm}
              />
            </div>
            <div className="w-full mb-4 relative">
              <label 
                htmlFor="fromCurrency" 
                className="text-gray-400 text-sm mb-2 mt-5 inline-block">
                IBAN / Account Number
              </label>
              <Input 
                id="swift" 
                placeholder="01234567891"
                name="ibanAccountNo"
                value={formData.ibanAccountNo}
                change={setForm}
              />
            </div>
          </div>
        }
      </div>
      <div className="mt-6">
        <input type="submit" value="Continue" 
           
          className={`bg-indigo-600  border-2 border-indigo-700 dark:border-indigo-500 py-3 px-3 w-full rounded-md text-white cursor-pointer transition-all duration-300 ${disable ? "opacity-50 hover:bg-indigo-700 dark:hover:bg-indigo-600 hover:text-white cursor-not-allowed" : "hover:bg-transparent hover:text-indigo-700 dark:hover:text-indigo-500"}`} disabled={disable} />
      </div>
    </form>
  )
}

export default Recipient
