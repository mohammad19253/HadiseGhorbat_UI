import React from 'react'
import { Typography , Box, Button , Grid, Divider} from '@mui/material'
import { Container } from '@mui/system'
import styles from './Footer.module.scss'
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
                    <Typography variant='h3' component={'h3'}>دریافت اخبار</Typography>
                    <Typography variant='body1' color={'white'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای </Typography>
                    <Box>
                        <input type={'text'} placeholder='ایمل خود را وارد کنید' className={styles.email_input}/>
                        <Button variant='contained' sx={{m:1}}>باخبرم کن</Button>
                    </Box>
                  
                </Grid>
                <Grid item md={6} sm={12} sx={{p:3}} >
                    <Typography variant='h3' component={'h3'}>ما را دنبال کنید</Typography>
                   <Box className={styles.social_media}>
                        <Button> <InstagramIcon /> </Button>
                        <Button> <TwitterIcon /> </Button>
                        <Button> <FacebookIcon /> </Button>
                        <Button> <LinkedInIcon /> </Button>
                   </Box>
                </Grid>
            </Grid>
            <Divider sx={{borderColor:'#6C777B'}}/>
        </Container>
    </footer>
  )
}

export default Footer