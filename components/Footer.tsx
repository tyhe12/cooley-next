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
import Link from 'next/link'
import Image from 'next/image'
import LogoRound from '../public/images/logo_round.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      width: '100%',
    },
    logoContainer: {
      display: 'flex',
      paddingTop: theme.spacing(4),
      justifyContent: 'center',
    },
    socialsContainer: {
      display: 'flex',
      marginTop: theme.spacing(4),
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
    },
    icon: {
      fill: 'white',
    },
    logo: {
      height: 150,
      width: 150,
    },
  })
)
const PHONE_NUMBER = '312-820-4947'

const Footer: React.FC = () => {
  const styles = useStyles()
  return (
    <footer className={styles.footer} color="secondary">
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <Image src={LogoRound} alt="Logo" loading="eager" />
        </div>
      </div>

      <div className={styles.socialsContainer}>
        <Link href="https://www.facebook.com/CleaningwithCooley">
          <IconButton>
            <FacebookIcon className={styles.icon} />
          </IconButton>
        </Link>

        <Link href="https://www.instagram.com/cleaningwithcooley/">
          <IconButton>
            <InstagramIcon className={styles.icon} />
          </IconButton>
        </Link>

        <Link href="https://twitter.com/CleaningwCooley">
          <IconButton>
            <TwitterIcon className={styles.icon} />
          </IconButton>
        </Link>

        <Link href={`tel:${PHONE_NUMBER}`}>
          <IconButton>
            <PhoneIcon className={styles.icon} />
          </IconButton>
        </Link>

        <Link href="mailto:info@cleaningwithcooley.com">
          <IconButton>
            <EmailIcon className={styles.icon} />
          </IconButton>
        </Link>
      </div>

      <div className={styles.actionsContainer}>
        <Link href="/privacy">
          <Button className={styles.actionButton}>Privacy Policy</Button>
        </Link>

        <Typography variant="body2">
          © 2019 Cleaning with Cooley. All Rights Reserved.
        </Typography>
      </div>
    </footer>
  )
}

export default Footer
