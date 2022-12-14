import React , { useState } from 'react';
import {
  Button,Container,Toolbar,
  ListItem,ListItemButton,ListItemIcon,
  ListItemText,Divider,Box,List,InputAdornment,
  AppBar, Drawer, TextField,Typography
} from '@mui/material';
import { Search } from '@mui/icons-material';
import { Menu as MenuIcon } from '@mui/icons-material';
import styles from './header.module.scss';
import Link from 'next/link';
import CustomDrawer from '../../ui/organisms/CustomDrawer/Drawer';
import { useDispatch } from 'react-redux';
import { setOpenDrawer } from '../../../app/features/drawer';
import { DRAWER_MD_VIEW_LIST, DRAWER_XS_VIEW_LIST } from './constants/headerConstants';
const pages = [
  {
    text:'رزرو صندلی',
    link:'/reserve',
  }
];

const Header = () => {
  const dispatch=useDispatch()
  const toggleDrawer = ( open ) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    } 
    dispatch(setOpenDrawer(open))
  };
  return (
    <AppBar position="static"   className='cs-shadow' color='white'>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display:'flex',justifyContent:'space-between'}}>
          <Box sx={{display: { xs : 'none', md: 'flex' } }}>
              <Button sx={{ my: 2, color: 'black', display: 'block' }}>
                  <MenuIcon  onClick={toggleDrawer(true)}></MenuIcon>
               </Button>
              {pages.map(({link,text}) => (
                <Link   key={text}  href={link}>
                  <a>
                    <Button sx={{ my: 2, color: 'black', display: 'block' }}>
                      {text} 
                    </Button>
                  </a>
                 </Link  >
              ))}
          <CustomDrawer mdViewList={DRAWER_MD_VIEW_LIST} xsViewList={DRAWER_MD_VIEW_LIST}/>
          </Box>
          <Box sx={{  display: { xs: 'flex', md: 'none' } }}>
              <MenuIcon  onClick={toggleDrawer(true)}></MenuIcon>
          </Box>
          </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
