import React from 'react'
import Head from 'next/head'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

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
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(8),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    title: {
      marginBottom: theme.spacing(8),
    },
    paragraph: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  })
)

const Privacy: React.FunctionComponent = () => {
  const styles = useStyles()
  return (
    <div>
      <Head>
        <title>Privacy - Cleaning With Cooley</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Container>
          <Grid container>
            <Grid className={styles.row} item xs={12}>
              <Typography
                className={styles.title}
                align="center"
                variant="h4"
                component="h1"
              >
                Privacy Policy
              </Typography>

              <Typography className={styles.paragraph} variant="body1">
                Protecting your private information is our #1 priority. Some of
                our site registration forms require visitors to disclose
                information such as your name, address, e-mail address, etc.
                This information is used solely by Cleaning with Cooley to
                respond to your requests and occasionally notify you about
                important changes to our site, services and information we think
                you???ll find valuable. We do not sell or transfer your
                information to third parties.
              </Typography>

              <Typography className={styles.paragraph} variant="body1">
                We have developed this Policy in order for you to understand how
                we collect, use, communicate and disclose and make use of
                personal information you provide to us. Please read this privacy
                policy carefully. We will alert you to any changes to this
                policy by changing the ???last updated??? date at the top of this
                policy. Any changes become effective immediately upon
                publication on Our Website, and you waive specific notice of any
                changes to the Policy by continuing to use and access Our
                site(s).
              </Typography>

              <Typography className={styles.paragraph} variant="h6">
                INFORMATION THAT WE COLLECT
              </Typography>

              <Typography variant="body1">
                Personal data is information that can be used to identify you
                specifically, including your name, address, email address,
                telephone number or demographic information like your address
                and/or town you live in. You consent to giving us this
                information by providing it to us voluntarily on our website or
                by providing it to us over the phone and/or in person. Your
                decision to disclose this data is entirely voluntary. You are
                under no obligation to provide this information, but your
                refusal may prevent your from accessing our services or benefits
                from Our website.
              </Typography>

              <Typography className={styles.paragraph} variant="h6">
                FINANCIAL DATA
              </Typography>

              <Typography variant="body1">
                Financial data is data that is related to your payment method,
                such as credit card or bank transfer details. We collect
                financial data in order to allow you to purchase service from
                Our website and any related mobile apps. We store limited
                financial data. Most financial data is transferred to Our
                payment processors??? Privacy Policy to determine how they use,
                disclose, and protect Your financial data. As a courtesy,
                PayPal, Venmo, and Cash App???s Privacy Policy can be found here:
              </Typography>

              <ul>
                <li>
                  <Typography>
                    <Link>Paypal Privacy Policy</Link>
                  </Typography>
                </li>
                <li>
                  <Typography>
                    <Link>Venmo Privacy Policy</Link>
                  </Typography>
                </li>
                <li>
                  <Typography>
                    <Link>Cash App Privacy Policy</Link>
                  </Typography>
                </li>
              </ul>

              <Typography className={styles.paragraph} variant="h6">
                SOCIAL NETWORKING DATA
              </Typography>

              <Typography variant="body1">
                We may access personal information from social networking sites
                and apps, including Facebook, Instagram, LinkedIn, Twitter,
                Snapchat, or other social networking sites or apps not named
                specifically here, which may include Your name, Your social
                network username, location, email address, age, gender, profile
                picture, and any other public information. If you do not want us
                to access this information, please go to the specific social
                networking site and change your privacy settings.
              </Typography>

              <Typography className={styles.paragraph} variant="h6">
                OTHER DATA
              </Typography>

              <Typography variant="body1">
                On occasion, you may give us additional data in order to enter
                into a contest or giveaway or to participate in a survey. You
                will be prompted for this information and it will be clear that
                you are offering this kind of information in exchange for an
                entry into such a contest or giveaway.
              </Typography>

              <Typography className={styles.paragraph} variant="h6">
                HOW WE USE YOUR INFORMATION
              </Typography>

              <Typography variant="body1">
                Your information allows us to offer you certain products and
                services, including the use of Our website, to fulfill our
                obligations to you, to customize your interaction with Our
                company and Our website, and to allow us to suggest other
                products and services we think might interest you.
              </Typography>

              <Typography variant="body1">
                Specifically, we may use the information and data described
                above to:
              </Typography>

              <ul>
                <li>
                  <Typography>Create and administer your account.</Typography>
                </li>
                <li>
                  <Typography>Correspond with you.</Typography>
                </li>
                <li>
                  <Typography>Process payments and/or refunds.</Typography>
                </li>
                <li>
                  <Typography>
                    Contact you about new offerings that we think you will be
                    interested in.
                  </Typography>
                </li>
                <li>
                  <Typography>Interact with you via social media.</Typography>
                </li>
                <li>
                  <Typography>
                    Send you flyers or other updates abut our company or
                    website. Deliver targeted advertising.
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Request feedback from you like reviews on our services.
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Resolve disputes and troubleshoot any problems.
                  </Typography>
                </li>
                <li>
                  <Typography>Administer contests or giveaways.</Typography>
                </li>
                <li>
                  <Typography>Assist law enforcement as necessary.</Typography>
                </li>
                <li>
                  <Typography>
                    Prevent fraudulent activity on our website or app.
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Analyze trends to improve our website and offerings.
                  </Typography>
                </li>
              </ul>

              <Typography className={styles.paragraph} variant="h6">
                WHY WE MAY DISCLOSE YOUR INFORMATION
              </Typography>

              <Typography variant="body1">
                BY LAW We may share your information with third parties in
                certain situations. We may share your data as required by law or
                to respond to legal process, including a subpoena, or as
                necessary to protect the rights, property, and safety of others.
              </Typography>

              <Typography variant="body1">
                ADVERTISERS We may use third-party advertising companies to run
                and manage our ads, such as Facebook, Instagram or Google to
                produce ads that appears when you visit our website or mobile
                app. These companies may use information about your visit to our
                website and other websites that are contained in web cookies.
              </Typography>

              <Typography variant="body1">
                INTERACTION WITH OTHERS If you interact with others on our
                website or mobile app, such as participating in a group chat or
                post, other users may have access to some of your data,
                including your name, profile picture, and your history of
                interaction with our website, such as prior comments or post.
              </Typography>

              <Typography variant="body1">
                ONLINE POSTINGS When you post online on our social media sites,
                your posts may be viewed by others.
              </Typography>

              <Typography variant="body1">
                EMAIL CONFIRMATION We may receive email confirmations when you
                open an email from us. This allows us to determine if users are
                responding favorably to our email communications and to improve
                those communications.
              </Typography>

              <Typography className={styles.paragraph} variant="h6">
                SENSITIVE DATA
              </Typography>

              <Typography variant="body1">
                We request that you do not submit any sensitive data to us, via
                public postings, email correspondence with us, or any other
                method, including social security number, health data, genetic
                data, or information related to your ethnic origin, religious
                beliefs, or criminal history. If you do send us this
                information, then by doing so you are consenting to our use,
                storage, and processing to this information in accordance with
                this privacy policy.
              </Typography>

              <Typography variant="body1">
                It???s our goal to make this site as informative as possible while
                always respecting your privacy.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  )
}

export default Privacy
