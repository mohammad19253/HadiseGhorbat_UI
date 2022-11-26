import React from 'react'
import { Typography, Button, Box } from '@mui/material';
import styles from '../index.module.scss'
import { Formik } from 'formik';
import { useSelector,useDispatch } from 'react-redux';
import { setPhoneNumber } from '../../../../app/features/user';
import { setStep } from '../../../../app/features/stepper';
const PhoneNumber = () => {
    const dispatch=useDispatch()
    const { phoneNumber } =useSelector(state=>state.user)
    const { step ,steps } =useSelector(state=>state.stepper)
    return <>
   
    <Typography mt={3} mb={2} mx={1}>لطفا شماره موبایل یا ایمیل خود را وارد کنید</Typography>
    <Formik
    validateOnChange={false}
    validateOnMount={true}
    initialValues={
      { phoneNumber: phoneNumber}
    }
    validate={values => {
      const errors = {};
      if (!values.phoneNumber) {
        errors.phoneNumber = 'َشماره تلفن خود را وارد کنید';
      } else if (values.phoneNumber.length > 11 ) {
        errors.phoneNumber = 'شمارتو مثل آدم وارد کن ';
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting, setStatus, resetForm,   }) => {
        dispatch(setPhoneNumber(values.phoneNumber))
        dispatch(setStep(step+1))}}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      status,
      handleSubmit,
      isSubmitting,
    }) => (
      <form onSubmit={handleSubmit} style={{width:'100%'}}>
        <input
          className={styles.input}
          type="text"
          name="phoneNumber"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.phoneNumber}
        />
        <label className={'error'}>{errors.phoneNumber || touched.phoneNumber && errors.phoneNumber}</label>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
            color="inherit"
            variant='contained'
            disabled={step === 0}
            onClick={ ()=>{ dispatch(setStep(step+1)) } }
            sx={{ mr: 1 }}
            >
            برگشت
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button  type="submit"   variant='contained'>
            ادامه   
            </Button>
        </Box>
      </form>
    )}
    </Formik>
  </>;

}
export  default PhoneNumber
