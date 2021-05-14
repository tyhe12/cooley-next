import React from 'react'
import Hidden from '@material-ui/core/Hidden'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import HomeIcon from '@material-ui/icons/Home'
import AccountIcon from '@material-ui/icons/AccountCircle'
import InfoIcon from '@material-ui/icons/Info'
import OfferIcon from '@material-ui/icons/LocalOffer'
import HelpIcon from '@material-ui/icons/Help'
import LockIcon from '@material-ui/icons/Lock'

import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

export interface Props {
  width?: number
  open?: boolean
  onDrawerOpen?: () => void
  onDrawerClose?: () => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navContainer: {
      height: '100%',
    },
    drawer: {
      width: (props: Props) => props.width,
      height: '100%',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
    },
    drawerPaper: {
      width: (props: Props) => props.width,
      overflowX: 'hidden',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    spacer: {
      height: '100%'
    },
    text: {
      fontSize: '0.875rem'
    }
  })
)

const NavDrawer: React.FC<Props> = (props: Props) => {
  const { open = true, onDrawerClose, onDrawerOpen } = props
  const styles = useStyles(props)
  const smallListItemClasses = {
    primary: styles.text
  }

  const drawer = (
    <div className={styles.drawer}>
      <div className={styles.logo}>
        <Typography variant="h6">Workout</Typography>
      </div>

      <Divider />

      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <AccountIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <OfferIcon />
          </ListItemIcon>
          <ListItemText primary="Services" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary="FAQs" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <LockIcon />
          </ListItemIcon>
          <ListItemText primary="Privacy Policy" />
        </ListItem>
      </List>

      <Divider />

      <div className={styles.spacer}></div>

      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <PhoneIcon />
          </ListItemIcon>
          <ListItemText classes={smallListItemClasses} primary="708-261-2306" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText classes={smallListItemClasses} primary="info@cleaningwithcooley.com" />
        </ListItem>
      </List>
    </div>
  )
  return (
    <nav className={styles.navContainer} aria-label="navigation drawer">
      <SwipeableDrawer
        // variant="temporary"
        anchor="left"
        open={open}
        onClose={onDrawerClose}
        onOpen={onDrawerOpen}
        classes={{
          paper: styles.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawer}
      </SwipeableDrawer>
    </nav>
  )
}

export default NavDrawer