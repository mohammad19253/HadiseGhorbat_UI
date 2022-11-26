import React , { useEffect } from 'react';
import {Box, Button, Typography, Modal, Grid, Divider } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setStep } from '../../../../app/features/stepper';
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
    const { step } = useSelector(state=>state.stepper)
    const { days } = useSelector(state=>state.reserve)
    const { firstName,lastName, phoneNumber } = useSelector(state=>state.user)
    const [open, setOpen] = React.useState(false);
    const [tempDays, setTempDays] = React.useState([]);
    const handleClose = () => setOpen(false);

     useEffect(()=>{
        if(step === 'confirmModal'){
            setOpen(true);
        }
    },[step])
    useEffect(()=>{
        setTempDays( days.filter(day=>{ return day.femaleCheckBox || day.maleCheckBox  }) )
    },[days])
  return (
    <div >
      <Modal  open={open}   onClose={handleClose} >
        <Box sx={style} display='flex' flexDirection={'column'} justifyContent={'space-between'} alignItems='space-between'>
          <Box>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                    <Grid container>
                        <Grid item md={4} display='flex'>
                            <Typography variant='h4' color={'gray'} mx={1}>   نام :</Typography>
                            <Typography variant='h4'> {firstName}</Typography>
                        </Grid>
                        <Grid item md={4} display='flex'>
                            <Typography variant='h4' color={'gray'} mx={1}>    نام خانوادگی  :</Typography>
                            <Typography variant='h4'> {lastName} </Typography>
                        </Grid>
                        <Grid item md={4} display='flex'>
                            <Typography variant='h4' color={'gray'} mx={1}>   تلفن همراه :</Typography>
                            <Typography variant='h4'> {phoneNumber}</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Divider sx={{my:2,backgroundColor:'yellow'}} />
            <Box>
                    {tempDays.map(day=>{
                        return<> <Grid container key={day.id}>
                            <Grid item md={4} display='flex'>
                                <Typography variant='h4' color={'gray'} mx={1}>   تاریخ :</Typography>
                                <Typography variant='h4'> {day.text}</Typography>
                            </Grid>
                            <Grid item md={4} display='flex'>
                                <Typography variant='h4' color={'gray'} mx={1}>   تعداد آقایان :</Typography>
                                <Typography variant='h4'> {day.maleCount}</Typography>
                            </Grid>
                            <Grid item md={4} display='flex'>
                                <Typography variant='h4' color={'gray'} mx={1}>   تعداد بانوان :</Typography>
                                <Typography variant='h4'> {day.femaleCount}</Typography>
                            </Grid>
                        
                        </Grid>    
                        <Divider sx={{my:1}} /></> 
                    })}
            </Box>
          </Box>
          <Box display='flex' justifyContent={'space-between'} alignItems='center'>
           
            <Button  variant='contained' color="inherit"  onClick={()=>{
                dispatch(setStep(3))
                setOpen(false);
            }}>تغییر</Button>
            <Button  variant='contained' onClick={()=>{}}>تایید</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}