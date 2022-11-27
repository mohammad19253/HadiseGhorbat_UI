import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '../../styles/globals.scss'
import {   ThemeProvider } from '@mui/material'
import theme from '../../styles/theme/theme'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { wrapper } from '../app/store/store'
const queryClient = new QueryClient()
function App({ Component, pageProps }) {
  return(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
          <Header />
          <Component   {...pageProps} />
          <Footer />
      </ThemeProvider>
  </QueryClientProvider>
  )
}

export default wrapper.withRedux(App)

