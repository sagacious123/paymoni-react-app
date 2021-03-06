import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import MultiStepForm from './components/MultiStepForm'

function App() {

  const [getStep, setGetStep] = useState()
  const [width, setWidth] = useState(0)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    axios.get("http://data.fixer.io/api/latest?access_key=e37728b203ebd832f0eb176c1f3b796f")
    .then(res => console.log(res))
  }, [])
  
  
  return (
    <div className={`bg-gray-50 pb-40 ${darkMode && "dark bg-verydarkbg"}`}>
      <Header width={width} getStep={getStep} setDarkMode={setDarkMode} darkMode={darkMode} />
      <MultiStepForm setGetStep={setGetStep} setWidth={setWidth} />
    </div>
  );
}

export default App;


// ACCESS KEY: e37728b203ebd832f0eb176c1f3b796f