
import React from 'react'
import styles from './Banner.module.css'
import { Button , Typography} from '@mui/material'
export default function Banner( { image , h1 , p } ) {
    
  return (
        <div className={styles.wrapper}>
        <div className={styles.card}>
            <img src={image} loading='lazy'/>
            <div className={styles.info}>
            <Typography variant='h2'>{h1}</Typography>
            <p>{p}</p>
            <Button variant='contained' >بیشتر</Button>
            </div>
        </div>
        </div>
  )
}
