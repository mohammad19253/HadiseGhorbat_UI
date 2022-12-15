
import React , { forwardRef, useImperativeHandle , useRef, useState} from 'react'
import {  Typography,Button } from '@mui/material'
import styles from '../index.module.scss'
import OtpInput from 'react-otp-input'
import { useTimer } from 'react-timer-hook';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@mui/material'
import { setFirstName, setLastName, setId } from '../../../app/features/user';
import { setStep } from '../../../app/features/stepper';
import { BASE_URL } from '../../../constants/urls/urls';

 const Otp = (  ) => {
    const dispatch= useDispatch()
    const { token, phoneNumber ,otp_id} = useSelector(state=>state.user)
    const { step,steps } =useSelector(state=>state.stepper)
    //timer
    const timerRef = useRef()
    const time = new Date();
    time.setSeconds(time.getSeconds() + 60); // 1 minutes timer

   
   
    const [otp, setOtp] =useState({digit:'',isSubmitting:false,message:''});
    const handleOtpChange= (value)=>{setOtp({...otp,digit:value}) }
    const handleOtpSubmit=()=>{
      setOtp({...otp,isSubmitting:true,message:''}) 
      console.log('otp_id',otp_id)
      axios({
        url:`${BASE_URL}/otp`,
        method:'post',
        headers:{
          'Authorization': `Bearer ${token}`
        },
        data:{ 
          otp:otp.digit, 
          phoneNumber:phoneNumber,
          id:otp_id,
        }
      }).then(res=>{
        //success:
        if(res.data.status === 200 ){
         // dispatch(setToken(res.data.token))
         console.log('res.data.user.firstName',res.data.data.firstName)
         dispatch(setFirstName(res.data.data.firstName))
         dispatch(setLastName(res.data.data.lastName))
         dispatch(setId(res.data.data.id))
         dispatch(setStep(step+1))
         setOtp({...otp,isSubmitting:true,message:''}) 
          
        }
        //wrong otp:
        else if(res.data.status === 210){
          setOtp({isSubmitting:false,digit:'',message:res.data.message}) 
        }
        // timeout:
        else if( res.data.status === 205 ){
          setOtp({isSubmitting:false,digit:'',message:res.data.message}) 
          setTimeout(()=>{
            dispatch(setStep(step - 1))
            setOtp({isSubmitting:false,digit:'',message:''}) 
          },3000)
        }
      }).catch(err=>{
        console.log(err)
        setOtp({isSubmitting:false,digit:'',message:'سرور در حال بروز رسانی میباشد'}) 
      })
    
    }


    const handleChangeNumber=()=>{
        dispatch(setStep(step-1))
        setOtp({isSubmitting:false,digit:'',message:''}) 
    }
  return (
     <>
    <Typography variant='h4'  my={1}> کد تایید برای شماره  {phoneNumber}  ارسال شد  </Typography>
    <Button sx={{m:0,p:0}}color="secondary" onClick={handleChangeNumber}>( تغییر شماره تلفن )</Button>
    <Typography my={1}>لطفا کد تایید ارسال شده را وارد کنید</Typography>
    <CustomeTimer ref={timerRef} expiryTimestamp={time}/>
      <div dir='ltr'>
      <OtpInput
        className={styles.otp_input}
        value={otp.digit}
        onChange={handleOtpChange}
        numInputs={6}
        separator={<span></span>}
      />
    </div>
    <label className={'error'}>{otp.message}</label>
    
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
            <Button  type="submit"   variant='contained'  onClick={handleOtpSubmit} disabled={otp.isSubmitting}>
            {step === steps.length - 1 ? 'ثبت' : 'ادامه'}
            </Button>
        </Box>
  </>
  )
}


const CustomeTimer = forwardRef((props, ref) => {
    const { expiryTimestamp } = props
    const {
      seconds,
      minutes,
      start,
      restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
    useImperativeHandle(ref, () => ({
      resetTimer() {
        const time = new Date();
        time.setSeconds(time.getSeconds() + 120);
        restart(time)
      },
    }))
    return   <><span>{minutes}</span>:<span>{seconds}</span></>
  
  })
  CustomeTimer.displayName = 'CustomeTimer';
export default Otp