import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      width: '100%',
      borderTop: '1px solid grey',
    },
    logoContainer: {
      display: 'flex',
      marginTop: theme.spacing(8),
      justifyContent: 'center',
    },
    socialsContainer: {
      display: 'flex',
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(4),
      justifyContent: 'center',
    },
    actionsContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      alignItems: 'center',
      color: 'white',
    },
    actionButton: {
      color: 'inherit',
      // marginLeft: theme.spacing(2)
    },
    icon: {
      fill: 'white',
    },
  })
)

const Footer: React.FC = () => {
  const styles = useStyles()
  return (
    <footer className={styles.footer} color="secondary">
      <div className={styles.logoContainer}>
        <Typography>Cooley Logo</Typography>
      </div>

      <div className={styles.socialsContainer}>
        <IconButton>
          <FacebookIcon className={styles.icon} />
        </IconButton>

        <IconButton>
          <InstagramIcon className={styles.icon} />
        </IconButton>

        <IconButton>
          <TwitterIcon className={styles.icon} />
        </IconButton>

        <IconButton>
          <PhoneIcon className={styles.icon} />
        </IconButton>

        <IconButton>
          <EmailIcon className={styles.icon} />
        </IconButton>
      </div>

      <div className={styles.actionsContainer}>
        <Button className={styles.actionButton}>Privacy Policy</Button>

        <Typography variant="body2">
          Copyright © 2018-2021, Cleaning with Cooley. All Rights Reserved.
        </Typography>
      </div>
    </footer>
  )
}

export default Footer
