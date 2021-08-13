import React from 'react'
import Stepper from './Stepper'

const Header = ({ width, getStep }) => {
  return (
    <header className="bg-white py-5 md:py-8 shadow-sm">
      <div className="w-11/12 max-w-2.5xl m-auto">
        <div className="flex items-center justify-between">
          <div>
            <a href="#" className="text-purple-800 text-xl font-bold">PayMoni</a>
          </div>
          <Stepper width={width} getStep={getStep} />
          <div>
            <i className="fa fa-times text-gray-400 cursor-pointer"></i>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header