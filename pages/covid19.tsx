import Head from 'next/head'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import React from 'react'

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
    row: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    avatarContainer: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    },
    paragraph: {
      marginBottom: theme.spacing(2),
    },
    block: {
      display: 'block',
    },
    avatar: {
      width: 200,
      height: 200,
    },
  })
)

const Covid19: React.FunctionComponent = () => {
  const styles = useStyles()
  return (
    <div>
      <Head>
        <title>COVID-19 Statement - Cleaning With Cooley</title>
        <meta
          name="description"
          content="Cleaning with cooley covid-19 statement"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Container>
          <Grid container>
            <Grid
              className={styles.row}
              container
              item
              xs={12}
              justifyContent="center"
            >
              <Typography align="center" variant="h4" component="h1">
                COVID-19 STATEMENT
              </Typography>
            </Grid>

            <Grid className={styles.row} item xs={12}>
              <Typography className={styles.paragraph} variant="body1">
                The health and safety of our customers is our highest priority -
                always.
              </Typography>

              <Typography className={styles.paragraph} variant="body1">
                {`While there's much we can't control about Covid-19, there's
                still much we can do to limit its spread and keep your family
                safe.`}
              </Typography>

              <Typography className={styles.paragraph} variant="body1">
                {`Your Cleaning with Cooley housekeeper is trained in the latest
                best practices to clean your home. This includes obtaining the
                Professional House Cleaner certification from the American House
                Cleaners Association (AHCA), as well as completion of the AHCA's
                training course Covid-19 & Cleaning for Infectious Disease
                Prevention.`}
              </Typography>

              <Typography className={styles.paragraph} variant="body1">
                {`We will do our best to keep you safe and ask you to please
                extend the same courtesy to your housekeeper. Please keep 6 feet
                for social distancing, and let us know in advance if you’re
                feeling sick so we can reschedule your appointment.`}
              </Typography>

              <Typography className={styles.paragraph} variant="body1">
                We truly appreciate your business in this difficult time. If you
                have any additional questions or concerns, please reach out.
              </Typography>

              <Typography className={styles.paragraph} variant="body1">
                Thank you,
              </Typography>

              <Typography className={styles.paragraph} variant="body1">
                <span className={styles.block}>
                  Tracy Cooley, Cleaning with Cooley LLC
                </span>
                <span className={styles.block}>Founder and CEO</span>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  )
}

export default Covid19
