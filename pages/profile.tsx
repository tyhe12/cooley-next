import Head from 'next/head'
import { useState } from 'react'
import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import PhoneField from '../components/PhoneField'
import * as yup from 'yup'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      width: '100%',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: theme.spacing(1),
    },
    row: {
      marginBottom: theme.spacing(8),
    },
    card: {
      margin: theme.spacing(1),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    cardHeader: {
      marginBottom: theme.spacing(3),
    },
    profileAction: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    profileButton: {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
      color: 'white',
    },
    textField: {
      marginBottom: theme.spacing(4),
      display: 'block',
    },
  })
)

const nameSchema = yup.string().required('This field is required')

const addressSchema = yup.string().required('This field is required')

const phoneSchema = yup
  .string()
  .required('Phone number is required')
  .matches(/\d{9}/, 'Please enter a valid phone number')

const schemas = {
  name: nameSchema,
  address: addressSchema,
  phone: phoneSchema,
}

const Profile: React.FC = () => {
  const styles = useStyles()
  const [account, setAccount] = useState({
    name: 'Test Account',
    email: 'test@cleaningwithcooley.com',
    address: 'test Ave, Chicago, IL, 60000',
    phone: '1234567890',
  })
  const [errors, setErrors] = useState({
    name: '',
    address: '',
    phone: '',
  })

  const handleBlur = (field: string) => {
    return () => {
      setErrors((errs) => ({ ...errs, [field]: '' }))
      try {
        schemas[field].validateSync(account[field])
      } catch (error) {
        setErrors((errs) => ({ ...errs, [field]: error.errors[0] }))
      }
    }
  }

  const handleChange = (field: string) => {
    return (event) => {
      setAccount((prev) => ({ ...prev, [field]: event.target.value }))
    }
  }
  return (
    <div>
      <Head>
        <title>My Profile - Cleaning With Cooley</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Container>
          <Grid container justifyContent="center">
            <Grid className={styles.row} item xs={12}>
              <Avatar></Avatar>
              <Typography>Welcome, {account.name}</Typography>
            </Grid>

            <Grid className={styles.row} item xs={12}>
              <Card className={styles.card}>
                <CardContent>
                  <Typography className={styles.cardHeader} variant="h5">
                    My Profile
                  </Typography>
                  <TextField
                    className={styles.textField}
                    fullWidth
                    disabled
                    required
                    id="email-input"
                    label="E-mail"
                    variant="outlined"
                    value={account.email}
                  />

                  <TextField
                    className={styles.textField}
                    error={Boolean(errors.name)}
                    helperText={Boolean(errors.name) && errors.name}
                    required
                    fullWidth
                    id="name-input"
                    label="Name"
                    variant="outlined"
                    value={account.name}
                    onChange={handleChange('name')}
                    InputProps={{
                      onBlur: handleBlur('name'),
                    }}
                  />

                  <TextField
                    className={styles.textField}
                    required
                    fullWidth
                    error={Boolean(errors.phone)}
                    helperText={Boolean(errors.phone) && errors.phone}
                    id="phone-input"
                    label="Phone Number"
                    variant="outlined"
                    value={account.phone}
                    InputProps={{
                      inputComponent: PhoneField,
                      onBlur: handleBlur('phone'),
                    }}
                    onChange={handleChange('phone')}
                  />

                  <TextField
                    className={styles.textField}
                    required
                    fullWidth
                    error={Boolean(errors.address)}
                    helperText={Boolean(errors.address) && errors.address}
                    id="address-input"
                    label="Address"
                    variant="outlined"
                    value={account.address}
                    onChange={handleChange('address')}
                    InputProps={{
                      onBlur: handleBlur('address'),
                    }}
                  />
                </CardContent>
                <CardActions className={styles.profileAction}>
                  <Button
                    className={styles.profileButton}
                    variant="contained"
                    color="primary"
                  >
                    Save Changes
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  )
}

export default Profile