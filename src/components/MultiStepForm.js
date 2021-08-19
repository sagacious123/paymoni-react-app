import React, { useState } from 'react'
import { useForm, useStep } from 'react-hooks-helper'
import Amount from './formSteps/Amount'
import Recipient from './formSteps/Recipient'
import Review from './formSteps/Review'

const defaultData = {
  sentAmount : "",
  receivedAmount : "",
  recipientEmail: "",
  recipientName: "",
  iban: "",
  swiftCode: "",
  ibanAccountNo: "",
}

const steps = [
  { id : 'amount' },
  { id : 'recipient' },
  { id : 'review' },
]

const MultiStepForm = ({ setGetStep, setWidth }) => {

  const [disable, setDisable] = useState(true)
  const [country1, setCountry1] =  useState([])
  const [country2, setCountry2] =  useState([])

  const [formData, setForm] = useForm(defaultData);
  const {step, index, navigation} = useStep({
    steps,
    initialStep : 0
  })

  // if(formData.sentAmount.length >= 1) {
  //   setDisable(false);
  // } else {
  //   setDisable(true);
  // }


  const transferFee = 0.369/100 * formData.sentAmount;
  const transferAmount = formData.sentAmount - transferFee;
  console.log(transferFee)


  const props = { formData, setForm, navigation, disable, setDisable, transferFee, transferAmount }

  setGetStep(index); 


  let percentage = index/steps.length * 100
  setWidth(percentage);

  console.log(formData)
  console.log(index)
  console.log(percentage)

  switch (step.id) {
    case 'amount':
      return <Amount { ...props } />;
    case 'recipient':
      return <Recipient { ...props } />;
    case 'review':
      return <Review { ...props } />;
  }

  return (
    <div className="p-8 w-11/12 max-w-lg m-auto my-16">
      <h1>PayMoni App</h1>
    </div>
  )
}

export default MultiStepForm