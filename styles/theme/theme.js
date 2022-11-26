
import { createTheme  } from '@mui/material'
const defaultTheme = createTheme()
const { breakpoints, typography: { pxToRem } } = defaultTheme
const theme = createTheme({
  palette: {
    primary:{
      ///Yellow
      main:'#FFE000',
    },
    secondary:{
       ///blue
      main:'#3273DC',
    },
    white:{
        main:'#FFFF',
      },
  },
  typography:{
    h1:{
      fontFamily:['Kalameh'],
      fontSize: "5rem",
      [breakpoints.down("sm")]: {
        fontSize: "3rem"
      }
    },
    h2:{
      fontFamily:['Kalameh'],
      fontSize: "4rem",
      [breakpoints.down("sm")]: {
        fontSize: "2rem"
      }
    },
    h3:{
      fontFamily:['Kalameh'],
      fontSize: "2rem",
      [breakpoints.down("sm")]: {
        fontSize: "1.5rem"
      }
    },
    h4:{
      fontFamily:['Kalameh'],
      fontSize: "1.5rem",
      [breakpoints.down("sm")]: {
        fontSize: "1.25rem"
      }
    },
    body1:{
      color:'#707070'
    },

    fontFamily: [
      "IRANSans",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif"
    ].join(",")
  }
});
export default theme