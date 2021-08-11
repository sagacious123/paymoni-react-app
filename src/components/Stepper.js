import React from 'react'

const Stepper = ({ width }) => {

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
    height: '6px',
    width: '6px',
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
       <span className="text-sm text-gray-500 relative -left-6">Amount</span>
       <span className="text-sm text-gray-500 relative -left-4">Recipient</span>
       <span className="text-sm text-gray-500 relative -left-2">Review</span>
       <span className="text-sm text-gray-500 relative -right-3">Pay</span>
     </div>
    </div>
  )
}

export default Stepper