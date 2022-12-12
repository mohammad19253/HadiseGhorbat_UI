
import React , { useState } from 'react'
import Head from 'next/head'
import { Grid, Box, Typography } from '@mui/material'
import styles from './index.module.scss'
import CustomStepper from './ReserveSteps'
import ConfirmModal from './ConfirmModal'
const Reserve=()=>{
    return (
    < >
      <Head>
        <title>حدیث غربت</title>
        <meta name="description" content="Generated by Vinci Gallery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
        <Grid container>
            <Grid item md={6} xs={12} >
                <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} p={5} >
                    <Box  minHeight={'60vh'} minWidth={'80%'}  className='m-border' py={4} px={2} >
                        <Typography variant='h2' textAlign={'right'} mb={2}>رزرو صندلی </Typography>
                        <CustomStepper steps_array={ ['تلفن همراه','کد تایید','نام و نام خانوادگی','انتخاب تاریخ', 'پایان' ] } />
                        <ConfirmModal />
                    </Box>
                </Box>
            </Grid>
            <Grid item md={6} xs={0} position={'relative'} className={styles.bg_image_yazahra1} > 
            </Grid>
        </Grid>
    </>
  )
}
export default Reserve