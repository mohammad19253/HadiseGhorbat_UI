import React , { useEffect } from 'react'
import { Formik } from 'formik';
import { Button, Box } from '@mui/material';
 import { setStep } from '../../../../app/features/stepper';
import styles from '../index.module.scss';
import * as yup from 'yup';
import { setLastName, setFirstName } from '../../../../app/features/user';
import { useSelector, useDispatch } from 'react-redux';
const  Form =(  )=>{
    const dispatch=useDispatch()
    const { step } = useSelector(state=>state.stepper)
    const schema = yup.object().shape({
        firstName: yup.string().required('نام  خود را وارد کنید'),
        lastName: yup.string().required('نام خانوادگی خود را وارد کنید'),
      });
 
    return <>
        <Formik
        validationSchema={schema}
        initialValues={
          { firstName: '',
            lastName:'', 
          }
        }
      
        validate={async (values)  =>  {
            const errors = {};
            if (values.firstName === "" &&  values.lastName === ""){
                errors.fill_all_blanks = '* تمامی فیلدهارا پر کنید';
            }
            
            return errors;
            }}

        onSubmit={(values, { setSubmitting, setStatus, resetForm, validate ,errors }) => {
            setSubmitting(false)
            dispatch(setFirstName(values.firstName))
            dispatch(setLastName(values.lastName))
            dispatch(setStep(step + 1))
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          status,
          handleSubmit,
          setFieldValue,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} style={{width:'100%'}}>
             <Box mx={1} my={2}>
                        <label>نام </label>
                        <input
                        className={styles.input_secondary}
                        type="text"
                        name="firstName"
                        placeholder='نام'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        />
                        <label className={'error'}>{ errors.firstName}</label>
                    </Box> 
                    <Box mx={1} my={2}>
                            <label>نام خانوادگی </label>
                            <input
                            className={styles.input_secondary}
                            type="text"
                            name="lastName"
                            placeholder='نام خانوادگی '
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastName}
                            /> 
                            <label className={'error'}>{ errors.lastName}</label>
                    </Box> 
                  
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                        color="inherit"
                        variant='contained'
                        disabled={step === 0}
                        onClick={ ()=>{ dispatch(setStep(step - 2)) } }
                        sx={{ mr: 1 }}
                        >
                        برگشت
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button variant='contained'   type="submit" disabled={isSubmitting}>ادامه</Button>
                    </Box>
          </form>
        )}
        </Formik>
      </>;
       
}


export default Form