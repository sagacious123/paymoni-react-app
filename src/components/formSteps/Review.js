import React from 'react'

const Review = ({ formData, setForm, navigation }) => {
  return (
    <div className="bg-white dark:border-gray-500 dark:bg-gray-700 py-8 px-5 md:p-8 w-11/12 max-w-lg m-auto mt-28 sm:mt-40 mb-16 lg:mt-16 rounded-md shadow-sm border border-gray-100">
      <h1 className="text-indigo-800 dark:text-indigo-500 text-lg font-bold mb-4">Review details of your transfer</h1>

      <div className="mb-6 pt-5 border-t border-gray-100 dark:border-gray-500 relative">
        <div className="text-gray-400 mb-3 flex items-center justify-between">
          <span className="text-sm">You send</span> 
          <span className="font-bold text-gray-700 dark:text-gray-300 text-sm">1,000 USD</span>
        </div>
        <div className="text-gray-400 mb-3 flex items-center justify-between">
          <span className="text-sm">Total fees (included)</span> 
          <span className="text-gray-700 dark:text-gray-300 text-sm">3.69 USD</span>
        </div>
        <div className="text-gray-400 mb-3 flex items-center justify-between">
          <span className="text-sm">Amount we'll convert</span> 
          <span className="text-gray-700 dark:text-gray-300 text-sm">996.31 USD</span>
        </div>
        <div className="text-gray-400 mb-3 flex items-center justify-between">
          <span className="text-sm">Guaranteed rate</span> 
          <span className="text-gray-700 dark:text-gray-300 text-sm">1.10289</span>
        </div>
        <div className="text-gray-400 mb-3 flex items-center justify-between">
          <span className="text-sm">{`${formData.recipientName} gets`}</span> 
          <span className="font-bold text-gray-700 dark:text-gray-300 text-base">1,248.63 EUR</span>
        </div>
          <span onClick={() => navigation.go(0)} className="py-2 px-3 mt-2 mb-7 text-sm rounded-full inline-block hover:bg-indigo-500 dark:hover:bg-indigo-400 hover:text-gray-100 dark:hover:text-white cursor-pointer border border-indigo-500 dark:border-indigo-400 bg-transparent text-indigo-700 dark:text-indigo-400 float-right relative"><i className="fa fa-pencil"></i></span>
      </div>
      <div className="pt-5 border-t border-gray-100 dark:border-gray-500 relative clear-both">
        <div className="text-gray-400 mb-3 flex items-center justify-between">
          <span className="text-sm">Name</span> 
          <span className="text-gray-700 dark:text-gray-300 text-sm">{formData.recipientName}</span>
        </div>
        <div className="text-gray-400 mb-3 flex items-center justify-between">
          <span className="text-sm">Email address</span> 
          <span className="text-gray-700 dark:text-gray-300 text-sm">{formData.recipientEmail}</span>
        </div>
        { formData.iban.length > 1 && <div className="text-gray-400 mb-3 flex items-center justify-between">
          <span className="text-sm">IBAN</span> 
          <span className="text-gray-700 dark:text-gray-300 text-sm">{formData.iban}</span>
        </div>}
        { formData.swiftCode.length > 1 && <div className="text-gray-400 mb-3 flex items-center justify-between">
          <span className="text-sm">SWIFT / BIC code</span> 
          <span className="text-gray-700 dark:text-gray-300 text-sm">{formData.swiftCode}</span>
        </div>}
        { formData.ibanAccountNo.length > 1 && <div className="text-gray-400 mb-3 flex items-center justify-between">
          <span className="text-sm">IBAN / Account number</span> 
          <span className="text-gray-700 dark:text-gray-300 text-sm">{formData.ibanAccountNo}</span>
        </div>}
        <span onClick={() => navigation.go(1)} className="py-2 px-3 mt-2 mb-7 text-sm rounded-full inline-block hover:bg-indigo-500 hover:text-gray-100 cursor-pointer border border-indigo-500 bg-transparent text-indigo-700 float-right relative"><i className="fa fa-pencil"></i></span>
      </div>
      
      <div className="mt-6">
        <input type="button" value="Confirm and continue" className="bg-green-400 border-2 border-green-400 py-3 px-3 w-full rounded-md text-white cursor-pointer hover:bg-transparent hover:text-green-400 transition-all duration-300" />
      </div>
    </div>
  )
}

export default Review
