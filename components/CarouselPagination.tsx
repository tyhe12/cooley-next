import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const isActive = (idx, target) => idx === target

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paginationContainer: {
      display: 'flex',
      justifyContent: 'center',
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    paginationItem: {
      borderRadius: '100%',
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5),
      backgroundColor: '#90a4ae',
      width: theme.spacing(1),
      height: theme.spacing(1),
    },
    activeItem: {
      backgroundColor: '#607d8b',
    },
  })
)

export interface Props {
  count?: number
  index?: number
}

const CarouselPagination: React.FC<Props> = (props: Props) => {
  const { count, index } = props
  const styles = useStyles()

  return (
    <div className={styles.paginationContainer}>
      {Array.from({ length: count }, (_, i) => (
        <div
          className={`${styles.paginationItem} ${
            isActive(i, index) ? styles.activeItem : ''
          }`}
          key={i}
        />
      ))}
    </div>
  )
}

export default CarouselPagination
