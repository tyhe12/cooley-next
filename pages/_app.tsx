import '../styles/globals.css'
import type { AppProps /*, AppContext */ } from 'next/app'
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import DefaultTemplate from './template'

const theme = createTheme({
  typography: {
    fontFamily: ['"Quicksand"', 'sans-serif'].join(','),
  },
  palette: {
    secondary: {
      light: '#33c9dc',
      main: '#00bcd4',
      dark: '#008394',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    primary: {
      light: '#f6a5c0',
      main: '#f48fb1',
      dark: '#aa647b',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
  },
})

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <DefaultTemplate>
        <Component {...pageProps} />
      </DefaultTemplate>
    </ThemeProvider>
  )
}

export default MyApp
