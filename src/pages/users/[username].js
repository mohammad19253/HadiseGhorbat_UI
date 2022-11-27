
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { Typography, Box, Avatar, Container, Grid, Divider,} from '@mui/material'
import Post from '../../components/post/Post'

import { posts } from '../../constants/sample-data'
import { useSelector } from 'react-redux'
import axios from 'axios'
const Username = ( ) => {
    const {username , profile_picture , bio , banner , userId ,} =useSelector( state=>state.user)
    useEffect(()=>{
        console.log(username , profile_picture , bio , banner , userId )
    })
    return (
        <>
        
            <Box width={'100%'} height={'200px'} position={'relative'}>
                <Image loading='lazy' src={'/images/blank.png'} layout='fill' alt={username}/>
                <Avatar 
                    src={'/images/blank.png'}
                    sx={{ width:80, height:80, position:'absolute',left:'calc(50% - 40px)',bottom:'-40px', zIndex:'100',boxShadow:1 }}
                    >
                    {username[0]}
                </Avatar>
            </Box>
            <Divider/>
            <Container sx={{p:4}}>
                <Typography variant='h3'>{username}</Typography>
                <Typography variant='body1'>{bio}</Typography>
                <Box>
                    <Grid container sx={{marginTop:'80px'}}>
                        {
                            posts.map( (post)=>{
                                return <Post key={post.id} id={post.id} image={post.image} alt={post.alt} username={username} description={post.description} />
                            })
                        }
                    </Grid>
                </Box>
            </Container>
           
            <Footer />
        </>
        )
  
}
export default Username
export const getStaticPaths = async () =>{
   
    return{
        paths:[{
            params:{
                username:''
            }
        }],
        fallback:true,

    }
}
export const getStaticProps = async () =>{
    return {
       props:{
        test:true,
       }
    }
} 