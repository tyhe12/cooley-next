import Head from 'next/head'
import Container from '@material-ui/core/Container'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import FormHelperText from '@material-ui/core/FormHelperText'
import Button from '@material-ui/core/Button'
import Fade from '@material-ui/core/Fade'
import * as yup from 'yup'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import LinkContainer from '@material-ui/core/Link'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      width: '100%',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      marginTop: theme.spacing(8),
    },
    buttonText: {
      color: 'white',
    },
    formControl: {
      marginBottom: theme.spacing(1),
    },
    actionArea: {
      display: 'flex',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
      justifyContent: 'space-between',
    },
    subtitle: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing(4),
    },
    signupLink: {
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5),
    },
    socials: {
      display: 'flex',
      justifyContent: 'center',
    },
    socialIcon: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
  })
)

const emailSchema = yup
  .string()
  .required('Email is required')
  .email('Please enter a valid email')

const passwordSchema = yup
  .string()
  .required('Password is required')
  .min(8, 'Password should be of minimum ${min} characters length')

const HAS_LOGIN = false

const Login: React.FC = () => {
  const styles = useStyles()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const validateEmail = () => {
    setEmailError('')
    try {
      emailSchema.validateSync(email)
    } catch (error) {
      setEmailError(error.errors[0])
    }
  }

  const validatePassword = () => {
    setPasswordError('')
    try {
      passwordSchema.validateSync(password)
    } catch (error) {
      setPasswordError(error.errors[0])
    }
  }

  const validateForm = () => {
    validateEmail()
    validatePassword()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    validateForm()
  }

  if (HAS_LOGIN) {
    return <div>Invalid Page</div>
  }

  return (
    <div>
      <Head>
        <title>Login - Cleaning With Cooley</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Container>
          <Typography className={styles.title} variant="h4">
            Sign In
          </Typography>
          <div className={styles.subtitle}>
            <Typography>Not a member?</Typography>
            <Link href="/signup">
              <LinkContainer
                className={styles.signupLink}
                component="button"
                variant="body1"
              >
                Join us
              </LinkContainer>
            </Link>
            <Typography>now.</Typography>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <FormControl
              className={styles.formControl}
              fullWidth
              error={Boolean(emailError)}
            >
              <InputLabel htmlFor="email-input">E-mail</InputLabel>
              <Input
                fullWidth
                id="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
                placeholder="Please enter your E-mail"
                aria-describedby="email-helper-text"
                type="text"
              />
              <FormHelperText id="email-helper-text">
                <Fade in={Boolean(emailError)}>
                  <div>{emailError}</div>
                </Fade>
              </FormHelperText>
            </FormControl>

            <FormControl
              className={styles.formControl}
              fullWidth
              error={Boolean(passwordError)}
            >
              <InputLabel htmlFor="password-input">Password</InputLabel>
              <Input
                fullWidth
                id="password-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={validatePassword}
                placeholder="Please enter your password"
                aria-describedby="password-helper-text"
                type="password"
              />

              <FormHelperText id="password-helper-text">
                <Fade in={Boolean(passwordError)}>
                  <div>{passwordError}</div>
                </Fade>
              </FormHelperText>
            </FormControl>

            <div className={styles.actionArea}>
              <Link href="/findpassword">
                <LinkContainer component="button" variant="body1">
                  Forgot Password?
                </LinkContainer>
              </Link>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                className={styles.buttonText}
              >
                Login
              </Button>
            </div>
          </form>

          <div className={styles.socials}>
            <IconButton className={styles.socialIcon}>
              <Icon className="fab fa-google" color="primary" />
            </IconButton>
            <IconButton className={styles.socialIcon}>
              <Icon className="fab fa-facebook" color="primary" />
            </IconButton>
            <IconButton className={styles.socialIcon}>
              <Icon className="fab fa-apple" color="primary" />
            </IconButton>
          </div>
        </Container>
      </main>
    </div>
  )
}

export default Login
