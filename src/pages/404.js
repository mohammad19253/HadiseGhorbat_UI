import { Button, Typography, Container, } from '@mui/material'
import React, { useEffect } from 'react'
import Link from 'next/link'
 const NotFound = () => {
  return (
    <>
      
        <Container  sx={{textAlign:'center',p:5}}>
        <Typography variant='h3'>صفحه ی موردنظر یافت نشد</Typography>
        <Button variant='contained' sx={{m:2}}>
            <NextLink  href={'/'}><a>خانه</a></Link>
        </Button>
        </Container>
      
    </>
  )
}
export default NotFound