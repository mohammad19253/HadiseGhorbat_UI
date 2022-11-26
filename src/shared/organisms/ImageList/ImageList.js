import React , { useState , useEffect, useRef} from 'react'
import {  Box , Grid,Pagination,Skeleton, Typography } from '@mui/material'
import CardA from '../CardA/CardA'


const  ImageList =( { data , status , error })=>{  
    if(status === 'success'){
        
        return (
            <Box sx={ { p:1 } }>
                <Box >
                    <Grid container >
                    {data.data.results.map(({ image , name , location ,id}) =>{
                        return  <Grid item key={id} lg={4} p={1}>
                            <CardA image={image} banner={image} title={name} description={location.name} width={'100%'} height='250px'/>
                        </Grid>
                    })}
                    </Grid>
                </Box>
            </Box>
          )
    }else if(status === 'loading'){
        return <Grid container p={5}>
          {[... Array(9)].map((item,id)=>{
              return <Grid item key={id} lg={4} p={1}>
                <Box>
                    <Skeleton  animation="wave" height={118} m={1}/>
                    <Skeleton />
                    <Skeleton width="60%" />
                </Box>
            </Grid>
          })}
        </Grid>
       
    }else{
        return <Typography variant='h2' textAlign={'center'}>{error.message}test</Typography>
    }
  
}

export default ImageList

