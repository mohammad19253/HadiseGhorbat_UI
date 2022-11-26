import React , { useState } from 'react';
import {
  Button,Container,Toolbar,
  ListItem,ListItemButton,ListItemIcon,
  ListItemText,Divider,Box,List,InputAdornment,
  AppBar, Drawer, TextField,Typography
} from '@mui/material';
import { Search } from '@mui/icons-material';
import { Menu as MenuIcon } from '@mui/icons-material';
import styles from './Header.module.scss'
import Link from 'next/link';
const pages = [
  {
    text:'رزرو صندلی',
    link:'/reserve',
  },{
    text:'فضائل',
    link:'/فضائل',
  },{
    text:'اعلانات',
    link:'/اعلانات',
  },{
    text:'تماس با ما',
    link:'/تماس با ما',
  }
];

const Header = () => {
    const [drawer,setDrawer]=useState(false)
    const toggleDrawer = (open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setDrawer(open);
    };
  return (
    <AppBar position="static"   className='cs-shadow' color='white'>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display:'flex',justifyContent:'space-between'}}>
          <Box sx={{display: { xs : 'none', md: 'flex' } }}>
            {pages.map(({link,text}) => (
               <Link   key={text}  href={link}>
                 <a>
                  <Button sx={{ my: 2, color: 'black', display: 'block' }}>
                    {text} 
                  </Button>
                </a>
                </Link>
            ))}
          
          </Box>
          <Box sx={{  display: { xs: 'flex', md: 'none' } }}>
              <MenuIcon  onClick={toggleDrawer(true)}></MenuIcon>
              <Drawer 
               anchor={'right'}
               open={drawer}
               onClose={toggleDrawer(false)}
               >
                 <Box
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                  >
                    <List>
                      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                        test
                            </ListItemIcon>
                            <ListItemText primary={text} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                    <Divider />
                 
              </Box>
               </Drawer>
          </Box>
          <Box className={styles.search}>
              <Search />
              <input  type='text' placeholder='جست و جو' className='cs-input-search'/>
            </Box>
          <Typography  className={styles.Logo} variant='h2' sx={{display: { xs : 'none', md: 'flex' } }} ><Link href={'/'}><a>لوگو سایت </a></Link></Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
