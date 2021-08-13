import React from 'react'

const Stepper = ({ width, getStep }) => {

  console.log(width)
  const stepWrapper = {
    width: '100%',
    height: '3px',
    backgroundColor: '#e0e0e0',
    borderRadius: 80,
    position: 'relative',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center'
  }

  const stepper = {
    width: `${width}%`,
    height: '100%',
    background: 'linear-gradient(to right, rgb(67, 56, 202) 70%, black)',
    position: 'relative',
    transition: 'all .4s'
  }

  const stepperAfter = {
    height: '7px',
    width: '7px',
    borderRadius: '50%',
    backgroundColor: 'black',
    position: 'absolute',
    left: `${width}%`,
    top: '50%',
    transform: 'translateY(-50%)',
    transition: 'all .4s'
    // bottom: 0
  }

  

  return (
    <div className="w-full sm:w-11/12 max-w-lg m-auto lg:w-3/5 sm:rounded-md flex items-center flex-col absolute top-20 sm:top-32 shadow-sm lg:shadow-none border border-gray-100 lg:border-0 py-4 px-9 sm:py-6 sm:px-8 left-1/2 transform -translate-x-1/2 lg:p-0 bg-white lg:bg-transparent lg:top-0 lg:relative lg:left-56">
     {/* <progress max="3" value={getStep} className="w-full bg-gray-400 h-1 relative -left-10" /> */}
     <div style={stepWrapper}>
       <div className="stepper" style={stepper}></div>
       <span style={stepperAfter}></span>
     </div>
     <div className="flex justify-between items-center w-full mt-3">
       <span className={`text-sm relative -left-6 ${getStep === 0 ? "text-black font-semibold" : "text-gray-500"} ${getStep > 0 ? "text-indigo-700" : "text-gray-500"}`}>Amount</span>
       <span className={`text-sm relative -left-4 ${getStep === 1 ? "text-black font-semibold" : "text-gray-500"} ${getStep > 1 ? "text-indigo-700" : "text-gray-500"}`}>Recipient</span>
       <span className={`text-sm relative -left-2 ${getStep === 2 ? "text-black font-semibold" : "text-gray-500"} ${getStep > 2 ? "text-indigo-700" : "text-gray-500"}`}>Review</span>
       <span className={`text-sm relative -right-3 ${getStep === 3 ? "text-black font-semibold" : "text-gray-500"}`}>Pay</span>
     </div>
    </div>
  )
}

export default Stepper