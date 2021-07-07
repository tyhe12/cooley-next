import '../styles/globals.css'
import { useState } from 'react'
import type { AppProps /*, AppContext */ } from 'next/app'
import {
  createStyles,
  makeStyles,
  ThemeProvider,
  createTheme,
} from '@material-ui/core/styles'
import NavBar from '../components/NavBar'
import NavDrawer from '../components/NavDrawer'
import Footer from '../components/Footer'

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

const navDrawerWidth = 280

const useStyles = makeStyles(() =>
  createStyles({
    appContainer: {
      width: '100%',
    },
    mainContent: {
      width: '100%',
    },
    navDrawer: {
      width: navDrawerWidth,
      height: '100%',
    },
  })
)

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const styles = useStyles()
  const [openNavDrawer, setOpenNavDrawer] = useState(false)

  const onNavDrawerOpen = () => {
    setOpenNavDrawer(true)
  }

  const onNavDrawerClose = () => {
    setOpenNavDrawer(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.appContainer}>
        <div className={styles.navDrawer}>
          <NavDrawer
            width={navDrawerWidth}
            open={openNavDrawer}
            onDrawerClose={onNavDrawerClose}
            onDrawerOpen={onNavDrawerOpen}
          />
        </div>
        <div className={styles.mainContent}>
          <NavBar onClickMenu={onNavDrawerOpen} />
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
