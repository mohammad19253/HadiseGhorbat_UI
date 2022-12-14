
import React  from 'react'
import Head from 'next/head'
import { Grid, Box, Divider, Button, Typography} from '@mui/material'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { Home } from '@mui/icons-material'
const ResultReserve=()=>{
    const reserves = useSelector(state=>state.reserves)
    const { firstName,lastName, phoneNumber, token} = useSelector(state=>state.user)
    return (
    < >
      <Head>
        <title>حدیث غربت</title>
        <meta name="description" content="Generated by حدیث غربت" />
      </Head>
        <Grid container>
            <Grid item md={12} xs={12} >
                <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} p={5} >
                    <Box  minHeight={'60vh'} minWidth={'80%'}  className='m-border' py={4} px={2} >
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
                    {reserves.reservedDays.map(day=>{
                        return<> <Grid container key={day.id}>
                            <Grid item md={3} display='flex'>
                                <Box variant='h4' color={'gray'} mx={1}>   تاریخ :</Box>
                                <Box variant='h4'> {day.day}</Box>
                            </Grid>
                            <Grid item md={3} display='flex'>
                                <Box variant='h4' color={'gray'} mx={1}>   تعداد آقایان :</Box>
                                <Box variant='h4'> {day.male_count}</Box>
                            </Grid>
                            <Grid item md={3} display='flex'>
                                <Box variant='h4' color={'gray'} mx={1}>   تعداد بانوان :</Box>
                                <Box variant='h4'> {day.female_count || 0}</Box>
                            </Grid>
                            <Grid item md={3} display='flex'>
                                <Box variant='h4' color={'gray'} mx={1}>   کد رزرو :</Box>
                                <Box variant='h4'> {day.reserve_code}</Box>
                            </Grid>
                            
                        
                        </Grid>    
                        <Divider sx={{my:1}} /></> 
                    })}
                      </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
        <Box display={'flex'} alignItems='center' justifyContent={'center'}>
        {[{
            text:'صفحه ی اصلی',
            link:'/',
            icon:<Home/>
         }].map(({link, text, icon, }) => (
                    <Link key={text}  href={link} >
                    <a>
                      <Button sx={{ my:1, color: 'black', display: 'flex'}}>
                        <Box mx={2}> {icon} </Box>
                      </Button>
                    </a>
                   </Link>
                ))}
        </Box>
    </>
  )
}
export default ResultReserve