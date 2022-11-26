import React from 'react'
import Image from 'next/image'
import { Box, Grid, Typography } from '@mui/material'
import styles from './post.module.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
 const Post = ( { id, image, alt, username, description }) => {
  return (
    <Grid className={styles.post_container} item  md={3} sm={4} sx={{p:3}}>
        <Box  className={styles.image_container}>
            <Image loading='lazy' layout='fill' src={image} alt={alt} />
        </Box>
        <Box className={styles.post_details}>
                <Box className={styles.icons}>
                    <FavoriteBorderIcon />
                    <ShoppingCartIcon />
                    <ChatBubbleOutlineIcon />
                </Box>
                <Typography variant='body1'>{description}</Typography>
        </Box>
    </Grid>
  )
}

export default Post