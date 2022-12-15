import React , { useEffect } from 'react'
import { Formik } from 'formik';
import { Button, Box, Typography,
} from '@mui/material';
import { EVENT_DAYS } from '../constant/pageConstants';
import styles from '../index.module.scss';
import { setStep } from '../../../app/features/stepper';
import { useSelector,useDispatch } from 'react-redux';
import { setDays } from '../../../app/features/reserve';
import { setOpenModal } from '../../../app/features/modal';
const  SelectDays =()=>{
    const dispatch=useDispatch()
    const { step } = useSelector(state=>state.stepper)
    return <>
        <Formik
        initialValues={
          {
            days:EVENT_DAYS,
          }
        }
      
        validate={async (values)  =>  {
            const errors = {};
          
            return errors;
            }}

        onSubmit={(values, { setSubmitting, setStatus, resetForm, validate ,errors }) => {
            console.log('values.days',values.days)
            const day=values.days.filter(item=>{
                 return (item.femaleCheckBox === true || item.maleCheckBox === true)
            })
            dispatch(setDays(day))
            dispatch(setOpenModal(true))
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
             <Box mx={1} my={2}>
                        { values.days.map(day=>{
                        return <Box key={day.id}  mx={1} my={2} display='flex' justifyContent={'space-between'} alignItems='center'> 
                                 <Box>
                                    <Typography >{day.text}</Typography>
                                </Box>
                                <Box>
                                                <input
                                                    type="checkBox"
                                                    name="days"
                                                    onChange={(e)=>{
                                                        setFieldValue(
                                                            "days",  
                                                            values.days.map(eachDay=>{
                                                                if(eachDay.id === day.id){
                                                                    return {...eachDay,maleCheckBox:e.target.checked}
                                                                }else{
                                                                        return eachDay
                                                                }
                                                            })
                                                        )
                                                    }}
                                                    onBlur={handleBlur}
                                                    value={day.maleCheckBox}
                                                />
                                                <label style={{margin:'5px'}}  className={day.maleCheckBox? styles.color_black_active : styles.color_black_inactive }>آقا </label>
                                                <input
                                                    className={day.maleCheckBox? styles.input_secondary_active : styles.input_secondary_inactive }
                                                    type="number"
                                                    min={0}
                                                    name="days"
                                                    placeholder='تعداد را وارد کنید'
                                                    onChange={(e)=>{
                                                        setFieldValue(
                                                            "days",  
                                                            values.days.map(eachDay=>{
                                                                if(eachDay.id === day.id){
                                                                    return {...eachDay,maleCount:e.target.value}
                                                                }else{
                                                                        return eachDay
                                                                }
                                                            })
                                                        )
                                                    }}
                                                    disabled={!day.maleCheckBox}        
                                                    onBlur={handleBlur}
                                                    value={day.maleCount}
                                                    />  
                                </Box>
                                <Box>
                                                <input
                                                    type="checkBox"
                                                    name="days"
                                                    onChange={(e)=>{
                                                        setFieldValue(
                                                            "days",  
                                                            values.days.map(eachDay=>{
                                                                if(eachDay.id === day.id){
                                                                    return {...eachDay,femaleCheckBox:e.target.checked}
                                                                }else{
                                                                        return eachDay
                                                                }
                                                            })
                                                        )
                                                    }}
                                                    onBlur={handleBlur}
                                                    value={day.femaleCheckBox}
                                                />
                                                <label  style={{margin:'5px'}} className={day.femaleCheckBox? styles.color_black_active : styles.color_black_inactive }>خانم </label>
                                                <input
                                                    className={day.femaleCheckBox? styles.input_secondary_active : styles.input_secondary_inactive }
                                                    type="number"
                                                    min={0}
                                                    name="days"
                                                    placeholder='تعداد را وارد کنید'
                                                    onChange={(e)=>{
                                                        setFieldValue(
                                                            "days",  
                                                            values.days.map(eachDay=>{
                                                                if(eachDay.id === day.id){
                                                                    return {...eachDay,femaleCount:e.target.value}
                                                                }else{
                                                                        return eachDay
                                                                }
                                                            })
                                                        )
                                                    }}
                                                    disabled={!day.femaleCheckBox}     
                                                    onBlur={handleBlur}
                                                    value={day.femaleCount}
                                                    />  
                                                {/* <label className={'error'}>{ errors.femaleCounter}</label> */}
                                </Box>     
                                       
                        </Box>
                        })}
                
                    </Box>
                
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                        color="inherit"
                        variant='contained'
                        disabled={step === 0}
                        onClick={ ()=>{ dispatch(setStep(step - 1)) } }
                        sx={{ mr: 1 }}
                        >
                        برگشت
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button  type="submit"  disabled={isSubmitting} variant='contained'>
                        ادامه   
                        </Button>
                    </Box>
          </form>
        )}
        </Formik>
      </>;
       
}


export default SelectDays