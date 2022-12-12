import React , { useEffect } from 'react';
import { useRouter } from 'next/router';
import {Box, Button, Typography, Modal, Grid, Divider } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setOpenModal } from '../../app/features/modal';
import { setReservedDays } from '../../app/features/reserve';
import { BASE_URL } from '../../constants/urls/urls';
import axios from 'axios';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  minWidth:'50vw',
  minHeight:'50vh',
  borderRadius:'1rem',
  p: 4,
};

export default function ConfirmModal() {
    const dispatch=useDispatch()
    const router =useRouter()
    const { open } = useSelector(state=>state.modal)
    const { days } = useSelector(state=>state.reserves)
    const { firstName,lastName, phoneNumber, token} = useSelector(state=>state.user)
    const [tempDays, setTempDays] = React.useState([]);
    const handleClose = () =>{ dispatch(setOpenModal(false));}
    const handleConfirm = () =>{
      axios({
        url:`${BASE_URL}/reserve`,
        method:'post',
        headers:{
          'Authorization': `Bearer ${token}`
        },
        data:{ 
          days:days, 
          firstName: firstName,
          lastName: lastName,
          phoneNumber:phoneNumber
        }
      }).then(res=>{
        console.log(res)
        //success:
        if(res.data.status === 200 ){
          dispatch(setReservedDays(res.data.data))
          router.push({pathname:'/reserve/result'})
          console.log('test2222')
        }
        // failed:
        else if(res.data.status === 210){
          handleClose()

        }
      
       
      }).catch(err=>{
          console.log(err)
      })
    }
  return (
    <div >
      <Modal  open={open}   onClose={handleClose} >
        <Box sx={style} display='flex' flexDirection={'column'} justifyContent={'space-between'} alignItems='space-between'>
          <Box>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                  <Grid container>
                      <Grid item md={4} display='flex'>
                          <Box color={'gray'} mx={1}>   نام :</Box>
                          <Box > {firstName}</Box>
                      </Grid>
                      <Grid item md={4} display='flex'>
                          <Box variant='h4' color={'gray'} mx={1}>    نام خانوادگی  :</Box>
                          <Box variant='h4'> {lastName} </Box>
                      </Grid>
                      <Grid item md={4} display='flex'>
                          <Box variant='h4' color={'gray'} mx={1}>   تلفن همراه :</Box>
                          <Box variant='h4'> {phoneNumber}</Box>
                      </Grid>
                  </Grid>
            </Box>
              <Divider sx={{my:2,backgroundColor:'yellow'}} />
            <Box>
                    {days.map(day=>{
                        return<> <Grid container key={day.id}>
                            <Grid item md={4} display='flex'>
                                <Box variant='h4' color={'gray'} mx={1}>   تاریخ :</Box>
                                <Box variant='h4'> {day.text}</Box>
                            </Grid>
                            <Grid item md={4} display='flex'>
                                <Box variant='h4' color={'gray'} mx={1}>   تعداد آقایان :</Box>
                                <Box variant='h4'> {day.maleCount}</Box>
                            </Grid>
                            <Grid item md={4} display='flex'>
                                <Box variant='h4' color={'gray'} mx={1}>   تعداد بانوان :</Box>
                                <Box variant='h4'> {day.femaleCount}</Box>
                            </Grid>
                        
                        </Grid>    
                        <Divider sx={{my:1}} /></> 
                    })}
            </Box>
          </Box>
          <Box display='flex' justifyContent={'space-between'} alignItems='center'>
           
            <Button  variant='contained' color="inherit"  onClick={()=>{   dispatch(setOpenModal(false));  }}>تغییر</Button>
            <Button  variant='contained' onClick={handleConfirm}>تایید</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}