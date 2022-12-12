import React from 'react'
import styles from './CardB.module.scss'
import { Avatar, Box, Typography } from '@mui/material'
import Image from 'next/image'
export default function CardB( { title , image , width , height} ) {
  const h = height === undefined ? 200 : height
  

  return (
    <Box  className={styles.card} sx={{height:h}} >
        <Box   className={styles.image_container} height={'75%'} >
            <Image loading='lazy' src={image} layout='fill' alt={`${title}`} objectFit='cover'/>
        </Box>
        <Box  sx={{ width:'100%',height:'25%', position:'relative',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Typography variant='h3'>{title}</Typography>
        </Box>
      
    </Box>
  )
}
