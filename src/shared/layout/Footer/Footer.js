import React from 'react'
import { Typography , Box, Button , Grid, Divider} from '@mui/material'
import { Container } from '@mui/system'
import styles from './Footer.module.scss'
import Link from 'next/link';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export const Footer = (props) => {
  return (
    <footer className={styles.footer_container}  >
        <Container maxWidth='lg' sx={{p:2}}>
            <Grid container >
                <Grid item  md={6} sm={12} sx={{p:3}}>
                    <Typography variant='h3' component={'h3'}>آدرس</Typography>
                    <Typography variant='body1' color={'white'}> قم، میدان معلم، سوگواره حدیث غربت </Typography>
                    <br/>
                  
                </Grid>
                <Grid item md={6} sm={12} sx={{p:3}} >
                    <Box className={styles.social_media}>
                        <Link href={'https://www.instagram.com/hadiseghorbat_qom/?igshid=N2ZiY2E3YmU%3D'}>
                            <a>
                                <Button> <InstagramIcon /> </Button>
                            </a>
                        </Link  >
                    </Box>
                </Grid>
            </Grid>
            <Divider sx={{borderColor:'#6C777B'}}/>
        </Container>
    </footer>
  )
}

export default Footer