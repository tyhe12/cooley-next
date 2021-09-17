import { useState } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import NavBar from '../components/NavBar'
import NavDrawer from '../components/NavDrawer'
import Footer from '../components/Footer'

const navDrawerWidth = 280

const useStyles = makeStyles(() =>
  createStyles({
    appContainer: {
      width: '100%',
      height: '100%',
    },
    mainContent: {
      width: '100%',
      height: '100%',
      minHeight: '90vh',
    },
    navDrawer: {
      width: navDrawerWidth,
      height: '100%',
    },
  })
)

export interface Props {
  children?: React.ReactNode
}

const DefaultTemplate: React.FC<Props> = ({ children }: Props) => {
  const styles = useStyles()
  const [openNavDrawer, setOpenNavDrawer] = useState(false)

  const onNavDrawerOpen = () => {
    setOpenNavDrawer(true)
  }

  const onNavDrawerClose = () => {
    setOpenNavDrawer(false)
  }

  return (
    <div className={styles.appContainer}>
      <div className={styles.navDrawer}>
        <NavDrawer
          width={navDrawerWidth}
          open={openNavDrawer}
          onDrawerClose={onNavDrawerClose}
          onDrawerOpen={onNavDrawerOpen}
        />
      </div>
      <NavBar onClickMenu={onNavDrawerOpen} />
      <div className={styles.mainContent}>{children}</div>
      <Footer />
    </div>
  )
}

export default DefaultTemplate
