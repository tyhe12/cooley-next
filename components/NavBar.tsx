import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import AccountIcon from '@material-ui/icons/AccountCircle'
import Popover from '@material-ui/core/Popover'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Link from 'next/link'

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      position: 'relative',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    accountButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    drawerControl: {
      display: 'flex',
      alignItems: 'center',
    },
    spacer: {
      width: '100%',
    },
    menuPaper: {
      top: '65px !important',
    },
    toolbarButton: {
      boxSizing: 'content-box',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  })
)

export interface Props {
  onClickMenu?: () => void
}

const NavBar: React.FC<Props> = (props: Props) => {
  const { onClickMenu } = props
  const styles = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleOpen = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <>
      <AppBar color="default" position="sticky">
        <Toolbar className={styles.toolbar}>
          <div className={styles.drawerControl}>
            <IconButton
              onClick={onClickMenu}
              className={styles.menuButton}
              edge="start"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          </div>
          <Link href="/">
            <Typography variant="h6" color="inherit">
              Cooley Logo
            </Typography>
          </Link>

          <div className={styles.spacer}></div>

          <Link href="/about">
            <Button className={styles.toolbarButton} color="inherit">
              About
            </Button>
          </Link>

          <Link href="/services">
            <Button className={styles.toolbarButton} color="inherit">
              Services
            </Button>
          </Link>

          <Button
            className={styles.toolbarButton}
            onClick={handleOpen}
            color="inherit"
          >
            More
            <ExpandMoreIcon />
          </Button>
          <Popover
            id="navbar-menu-popover"
            classes={{
              paper: styles.menuPaper,
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            onClose={handleClose}
            disableRestoreFocus
          >
            <List>
              <Link href="/included">
                <ListItem button onClick={handleClose}>
                  <ListItemText primary="Service Details" />
                </ListItem>
              </Link>

              <Link href="/faqs">
                <ListItem button onClick={handleClose}>
                  <ListItemText primary="FAQs" />
                </ListItem>
              </Link>

              <Link href="/privacy">
                <ListItem button onClick={handleClose}>
                  <ListItemText primary="Privacy Policy" />
                </ListItem>
              </Link>
            </List>
          </Popover>

          <IconButton className={styles.accountButton}>
            <AccountIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar
