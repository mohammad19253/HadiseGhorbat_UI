
import React from 'react'
import Head from 'next/head'
import { Typography, Box, Container , Grid , Avatar, Divider, Button  } from '@mui/material'
import Banner from '../shared/organisms/Banner/Banner'
import Footer from '../components/Footer/Footer';
import Link from 'next/Link'
import  { users , slides , boxContent, category,test } from '../constants/sample-data'
export default function Landing() {
  return (
    <>
      <Head>
          <title>Vinci Gallery</title>
          <meta name="description" content="Generated by Vinci Gallery" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <Container className='home-container' sx={{px:'2rem' , textAlign:'right '}}   maxWidth="xl" >
            <Container sx={{display:'flex',justifyContent:'space-between',p:'2rem'}}   maxWidth="xl" >
              <Box  sx={{width:{md:'40%',sm:'100%'}}} className='color-white'>
                <Typography variant='h1' component={'h1'}  > حدیث غربت</Typography>
                <Typography variant='h2' component={'h1'} gutterBottom> اَللّهُمَّ صَلِّ عَلی فاطِمَة وَ اَبیها</Typography>
                <Typography variant='p'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</Typography>
                <Box mt={1}>
                  <Link href='/reserve'> 
                    <a>   <Button variant='contained'  size='large'  sx={{mt:3}}>ررزو صندلی</Button></a>
                  </Link>
                 
                </Box>
              </Box>
            </Container>
      </Container>
      <Container sx={{p:'2rem' , textAlign:'right '}}   maxWidth="xl">
        <Banner image="https://picsum.photos/1375/180"  h1='این یک هدر است ' p='اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد '/>
      </Container>
     <Footer />
     </>
)
}

