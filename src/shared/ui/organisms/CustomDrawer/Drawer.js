import * as React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Toolbar, Typography, Drawer, Button, } from '@mui/material';
import { setOpenDrawer } from '../../../../app/features/drawer';
export default function CustomDrawer({ 
  mdViewList=[],
  xsViewList=[]
}
  ) {
  const { open } = useSelector(state=>state.drawer)
  const dispatch = useDispatch()
  const toggleDrawer = ( open ) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    if(open === 'close') dispatch(setOpenDrawer(false))
    dispatch(setOpenDrawer(open))
  };
  return (
    <div>
       <React.Fragment key={'right'}> 
          <Drawer
            anchor={'right'}
            open={open}
            onClose={toggleDrawer(false)}
            sx={{p:2}}
          >
          <Toolbar disableGutters >
              <Box 
              sx={{
                display: { xs : 'none', md: 'flex' },
                flexDirection:'column',
                justifyContent:'space-between',
                px:2,
                py:1,
                minWidth:'20vw'
               }}>
                {mdViewList.map(({link, text, icon}) => (
                   <Link key={text}  href={link} >
                   <a>
                     <Button sx={{ my:1, color: 'black', display: 'flex'}} onClick={toggleDrawer(false)}>
                       <Box mx={2}> {icon} </Box>
                       <Typography> {text} </Typography>
                     </Button>
                   </a>
                  </Link>
                ))}
              </Box>
              <Box sx={{
                display: {xs :'flex', md: 'none' },
                flexDirection:'column',
                justifyContent:'space-between',
                px:2,
                py:1,
                minWidth:'53vw'

                }}>
                <Typography  variant='h2' onClick={toggleDrawer(false)}><Link href={'/'}><a>لوگو سایت </a></Link></Typography>
                {xsViewList.map(({link, text, icon, }) => (
                    <Link key={text}  href={link} >
                    <a>
                      <Button sx={{ my:1, color: 'black', display: 'flex'}} onClick={toggleDrawer(false)}>
                        <Box mx={2}> {icon} </Box>
                        <Typography> {text} </Typography>
                      </Button>
                    </a>
                   </Link>
                ))}
              </Box>
          </Toolbar>
          </Drawer>
        </React.Fragment>
    </div>
  );
}