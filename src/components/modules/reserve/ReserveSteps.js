import * as React from 'react';
import { useSelector,useDispatch } from 'react-redux';

import {Button, StepLabel, Step, Stepper, Box} from '@mui/material';

import Form from './steps/Form';
import Otp from './steps/Otp';
import PhoneNumber from './steps/PhoneNumber';
import SelectDays from './steps/SelectDays';
import { setStep, setSteps } from '../../../app/features/stepper';

export default function HorizontalLinearStepper( {steps_array}) {
  const dispatch =useDispatch()
  const  { step, steps } = useSelector(state=>state.stepper)
  React.useEffect(()=>{
    setSteps(steps_array)
  },[steps_array])
  const handleNext = () => {   dispatch(setStep( step + 1)); };
  const handleBack = () => {  dispatch(setStep( step - 1)); };
  const returnStep=(key)=>{
        switch(key){
            case 0 :return <PhoneNumber />
            case 1 :return <Otp />
            case 2 :return <Form />
            case 3 :return <SelectDays />
        }
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={step}>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>&nbsp; {label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <React.Fragment>
          {returnStep(step)}
        
        </React.Fragment>
    </Box>
  );
}