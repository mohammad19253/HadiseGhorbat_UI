import React from 'react'
import { Formik } from 'formik'
import { Box, Typography, Button, } from '@mui/material'
import styles from './index.module.scss'
import { Container } from '@mui/system'
import * as yup from 'yup'
export const AdminPanelContainer = () => {
  const schema = yup.object().shape({
    userName: yup.string().required('نام کاربری خود را وارد کنید'),
    password: yup.string().required('رمز عبور خود را وارد کنید'),
  });
  return (
    <Box className={styles.admin_panel_container}>
        <Container sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',p:4}} >
                <Box 
                  sx={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    minHeight:'60vh',
                    minWidth:'400px',
                    backgroundColor:'white !important',
                    p:3,
                  }} 
                  className='m-border'
                  >
                    <Typography variant='h3' textAlign={'right'} mb={2}>ورود مدیریت </Typography>
                    <Formik
                      validationSchema={schema}
                      initialValues={
                        { userName: '',
                          password:'', 
                        }
                      }
                    
                      validate={async (values)  =>  {
                          const errors = {};
                          if (values.userName === "" &&  values.password === ""){
                              errors.fill_all_blanks = '* تمامی فیلدهارا پر کنید';
                          }
                          
                          return errors;
                          }}

                      onSubmit={(values, { setSubmitting, setStatus, resetForm, validate ,errors }) => {
                          setSubmitting(false)
                           
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
                          <Box mx={1} my={2} display='flex' flexDirection='column'>
                                      <label>نام کاربری </label>
                                      <input
                                      className={'input_secondary'}
                                      type="text"
                                      name="userName"
                                      placeholder='نام کاربری خود را وارد کنید'
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.userName}
                                      />
                                      <label className={'error'}>{ errors.userName}</label>
                          </Box> 
                          <Box mx={1} my={2} display='flex' flexDirection='column'>
                                  <label>رمز عبور </label>
                                  <input
                                  className={'input_secondary'}
                                  type="password"
                                  name="password"
                                  placeholder='رمز عبور خود را وارد کنید'
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.password}
                                  /> 
                                  <label className={'error'}>{ errors.password}</label>
                          </Box> 
                          <Button variant='contained' sx={{width:'100%'}} type="submit" disabled={isSubmitting}>ورود</Button>
                        </form>
                      )}
                    </Formik>
                </Box>
        </Container>
    </Box>
  )
}
