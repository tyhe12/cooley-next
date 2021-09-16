import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      margin: theme.spacing(1),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      height: 140,
    },
    cardContent: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center',
    },
  })
)

export interface Props {
  children?: React.ReactNode | React.ReactNodeArray
}

const ServiceCard: React.FC<Props> = (props: Props) => {
  const { children } = props
  const [hover, setHover] = useState(false)
  const styles = useStyles()
  const handleEnter = () => {
    setHover(true)
  }
  const handleExit = () => {
    setHover(false)
  }
  return (
    <>
      <Card
        onMouseEnter={handleEnter}
        onMouseLeave={handleExit}
        raised={hover}
        className={styles.card}
      >
        <CardContent className={styles.cardContent}>{children}</CardContent>
      </Card>
    </>
  )
}

export default ServiceCard
