import { ImportContacts, Person, Feed, BookOnline, Call, Home } from '@mui/icons-material'

export const DRAWER_MD_VIEW_LIST = [{
    text:'صفحه ی اصلی',
    link:'/',
    icon:<Home/>
  },{
    text:'پنل مدیریت',
    link:'/admin-panel',
    icon:<Person/>
  }]
export const DRAWER_XS_VIEW_LIST=[
    {
      text:'صفحه ی اصلی',
      link:'/',
      icon:<Home/>
    },
    {
      text:'پنل مدیریت',
      link:'/admin-panel',
      icon:<Person/>
    },
    {
      text:'رزرو صندلی',
      link:'/reserve',
      icon:<BookOnline/>
    },{
      text:'فضائل',
      link:'/فضائل',
      icon:<ImportContacts/>
    },{
      text:'اعلانات',
      link:'/اعلانات',
      icon:<Feed/>
    },{
      text:'تماس با ما',
      link:'/تماس با ما',
      icon:<Call/>
    }
]