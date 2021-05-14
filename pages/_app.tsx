import '../styles/globals.css'
import { useState } from 'react'
import type { AppProps /*, AppContext */ } from 'next/app'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import NavBar from '../components/NavBar'
import NavDrawer from '../components/NavDrawer'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Quicksand"',
      'sans-serif'
    ].join(',')
  }
})

const navDrawerWidth = 280

const useStyles = makeStyles((theme: Theme) =>
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

function MyApp({ Component, pageProps }: AppProps) {
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
        <div
          className={styles.mainContent}
        >
          <NavBar
            onClickMenu={onNavDrawerOpen}
          />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
