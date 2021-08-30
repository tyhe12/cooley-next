import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Icon from '@material-ui/core/Icon'
import Typography from '@material-ui/core/Typography'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 400,
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2),
      paddingBottom: theme.spacing(1),
    },
    cardTitleContainer: {
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'center',
      marginBottom: theme.spacing(1),
    },
    cardTitle: {
      marginLeft: theme.spacing(1),
      fontWeight: 'bold',
    },
    cardIcon: {
      marginRight: theme.spacing(1),
      width: 'auto',
    },
  })
)

export interface Props {
  children?: React.ReactNode | React.ReactNodeArray
  title: string
  icon: string
}

const HomeCard: React.FC<Props> = (props: Props) => {
  const { children, title, icon } = props
  const styles = useStyles()

  return (
    <>
      <Card elevation={2} className={styles.card}>
        <CardContent>
          <div className={styles.cardTitleContainer}>
            <Icon
              fontSize="large"
              className={`${styles.cardIcon} ${icon}`}
              color="primary"
            />
            <Typography
              className={styles.cardTitle}
              variant="h6"
              component="h3"
            >
              {title}
            </Typography>
          </div>
          <Typography variant="body2" component="p">
            {children}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default HomeCard
