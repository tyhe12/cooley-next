import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'
import AccountIcon from '@material-ui/icons/AccountCircle'
import Fade from '@material-ui/core/Fade'


import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles'

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
    expandButton: {
      marginLeft: theme.spacing(2),
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
      top: '65px !important'
    }
  })
)

export interface Props {
  onClickMenu?: () => void
}

const NavBar: React.FC<Props> = (props: Props) => {
  const { onClickMenu } = props
  const styles = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget)
    setOpen(true)
  };

  const handleClose = () => {
    setAnchorEl(null)
    setOpen(false)
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar className={styles.toolbar}>
          <div className={styles.drawerControl}>
            <IconButton
              onClick={onClickMenu}
              className={styles.menuButton}
              edge="start"
              // color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          </div>
          <Typography variant="h6" color="inherit">
            Cooley Logo
          </Typography>

          <div className={styles.spacer}></div>

          <Button color="inherit">About</Button>
          <Button color="inherit">Services</Button>
          <Button onClick={handleOpen} onMouseEnter={handleOpen} color="inherit">More</Button>
          {
            // Need to use popover instead
          }
          {/* <Menu
            classes={{
              paper: styles.menuPaper
            }}
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            onExit={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>Service Details</MenuItem>
            <MenuItem onClick={handleClose}>FAQs</MenuItem>
            <MenuItem onClick={handleClose}>Privacy Policy</MenuItem>
          </Menu> */}

          <IconButton className={styles.accountButton}>
            <AccountIcon />
          </IconButton>
          
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar
