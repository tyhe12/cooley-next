import React from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import OfferIcon from '@material-ui/icons/LocalOffer'
import HelpIcon from '@material-ui/icons/Help'
import LockIcon from '@material-ui/icons/Lock'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import MoreIcon from '@material-ui/icons/More'
import Link from 'next/link'
import Image from 'next/image'
import LogoImage from '../public/images/logo_main.png'

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

export interface Props {
  width?: number
  open?: boolean
  onDrawerOpen?: () => void
  onDrawerClose?: () => void
}

const PHONE_NUMBER = '312-820-4947'

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
      padding: theme.spacing(2),
    },
    spacer: {
      height: '100%',
    },
    text: {
      fontSize: '0.875rem',
    },
    listItemIcon: {
      minWidth: 0,
      marginRight: theme.spacing(2),
    },
  })
)

const NavDrawer: React.FC<Props> = (props: Props) => {
  const { open = true, onDrawerClose, onDrawerOpen } = props
  const styles = useStyles(props)
  const smallListItemClasses = {
    primary: styles.text,
  }

  return (
    <nav className={styles.navContainer} aria-label="navigation drawer">
      <SwipeableDrawer
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
        <div className={styles.drawer}>
          <div className={styles.logo}>
            <Image
              objectFit="contain"
              layout="intrinsic"
              height={200}
              src={LogoImage}
              alt="Logo"
            />
          </div>

          <Divider />

          <List>
            <Link href="/">
              <ListItem button onClick={onDrawerClose}>
                <ListItemIcon className={styles.listItemIcon}>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>

            <Link href="/about">
              <ListItem button onClick={onDrawerClose}>
                <ListItemIcon className={styles.listItemIcon}>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItem>
            </Link>

            <Link href="/services">
              <ListItem button onClick={onDrawerClose}>
                <ListItemIcon className={styles.listItemIcon}>
                  <OfferIcon />
                </ListItemIcon>
                <ListItemText primary="Our Service" />
              </ListItem>
            </Link>

            <Link href="/included">
              <ListItem button onClick={onDrawerClose}>
                <ListItemIcon className={styles.listItemIcon}>
                  <MoreIcon />
                </ListItemIcon>
                <ListItemText primary="Service Details" />
              </ListItem>
            </Link>

            <Link href="/faqs">
              <ListItem button onClick={onDrawerClose}>
                <ListItemIcon className={styles.listItemIcon}>
                  <HelpIcon />
                </ListItemIcon>
                <ListItemText primary="FAQs" />
              </ListItem>
            </Link>

            <Link href="/privacy">
              <ListItem button onClick={onDrawerClose}>
                <ListItemIcon className={styles.listItemIcon}>
                  <LockIcon />
                </ListItemIcon>
                <ListItemText primary="Privacy Policy" />
              </ListItem>
            </Link>
          </List>

          <Divider />

          <div className={styles.spacer}></div>

          <Divider />
          <List>
            <Link href={`tel:${PHONE_NUMBER}`}>
              <ListItem button>
                <ListItemIcon className={styles.listItemIcon}>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText
                  classes={smallListItemClasses}
                  primary={PHONE_NUMBER}
                />
              </ListItem>
            </Link>

            <Link href="mailto:info@cleaningwithcooley.com">
              <ListItem button>
                <ListItemIcon className={styles.listItemIcon}>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText
                  classes={smallListItemClasses}
                  primary="info@cleaningwithcooley.com"
                />
              </ListItem>
            </Link>
          </List>
        </div>
      </SwipeableDrawer>
    </nav>
  )
}

export default NavDrawer
