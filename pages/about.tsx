import Head from 'next/head'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
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
  })
)

const About: React.FunctionComponent = () => {
  const styles = useStyles()
  return (
    <div>
      <Head>
        <title>About - Cleaning With Cooley</title>
        <meta name="description" content="Generated by create next app" />
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
                WHO I AM
              </Typography>
            </Grid>

            <Grid
              className={styles.row}
              container
              item
              xs={12}
              justifyContent="center"
            >
              <div className={styles.avatarContainer}>
                <Avatar></Avatar>
              </div>
            </Grid>

            <Grid className={styles.row} item xs={12}>
              <Typography className={styles.paragraph} variant="body1">
                I started Cleaning with Cooley in 2018. After keeping homes for
                over 15 years, I found that a successful clean depended on
                attention to detail, quality products and absolute integrity.
              </Typography>

              <Typography className={styles.paragraph} variant="body1">
                I take pride in my work and believe in open, honest
                relationships with my clients. Their trust is the highest
                compliment they can give me
              </Typography>

              <Typography className={styles.paragraph} variant="body1">
                My mission is to give every customer a little time back each
                week by keeping their home clean and beautiful so they can focus
                on their goals.
              </Typography>

              <Typography className={styles.paragraph} variant="body1">
                Outside of the business, I enjoy reading, a good Netflix binge
                and traveling.
              </Typography>

              <Typography className={styles.paragraph} variant="body1">
                <span className={styles.block}>
                  Tracy Cooley, Cleaning with Cooley LLC
                </span>
                <span className={styles.block}>Founder and CEO</span>
              </Typography>

              <Typography className={styles.paragraph} variant="body1">
                Privately owned and operated company
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  )
}

export default About
