import React from 'react'
import Stepper from './Stepper'

const Header = ({ width, getStep, setDarkMode, darkMode }) => {
  return (
    <header className="bg-white dark:bg-gray-700 py-5 md:py-8 shadow-sm">
      <div className="w-11/12 max-w-2.5xl m-auto">
        <div className="flex items-center justify-between">
          <div>
            <a href="#" className="text-purple-800 dark:text-purple-500 text-xl font-bold">PayMoni</a>
          </div>
          <Stepper width={width} getStep={getStep} darkMode={darkMode} />
          <div onClick={() => setDarkMode(!darkMode)}>
            <i className={`${darkMode ? "fas fa-lightbulb" : "fas fa-moon"} text-gray-400 text-xl cursor-pointer`}></i>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header


// my github Personal Access Token = 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