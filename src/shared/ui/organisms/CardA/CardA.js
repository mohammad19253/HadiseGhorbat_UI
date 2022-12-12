import React from 'react'
import styles from './CardA.module.scss'
import { Avatar, Box, Skeleton } from '@mui/material'
import Image from 'next/image'
export default function CardA( { image , banner , title , description , width , height} ) {
  const [w, h] =  [ width === undefined ? 350 : width ,height === undefined ? 500 : height]

  return (
    <Box  className={`${styles.card} cs-shadow`} sx={{ width:w,height:h}}>
        <Image loading='lazy' src={banner} layout='fill' alt={`${title}`} objectFit='cover'/>
        <Box className={styles.info}  sx={{ width:w,height:h}}>
            <div>
                <Avatar src={image} />
                <h3>{title}</h3>
            </div>
            <p>{description}</p>
        </Box>
    </Box>
  )
}
