import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Fade from '@material-ui/core/Fade'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Pagination from './CarouselPagination'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    carouselContainer: {
      position: 'relative',
      width: '100%',
      marginBottom: theme.spacing(3),
    },
    pagination: {
      position: 'absolute',
      width: '100%',
      bottom: theme.spacing(1),
    },
    controlContainer: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      top: 0,
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    control: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      display: 'flex',
      justifyContent: 'space-between',
      height: '100%',
      width: '100%',
      alignItems: 'center',
    },
    controlButton: {
      backgroundColor: 'rgba(255,255,255,0.5)',
    },
    icon: {
      opacity: 1,
    },
  })
)

export interface Props {
  children?: React.ReactNodeArray
  interval?: number
  control?: boolean
}

const Carousel: React.FC<Props> = (props: Props) => {
  const { children, interval = 10000, control = false } = props
  const viewCount = children.length ?? 0
  const styles = useStyles()
  const [index, setIndex] = useState(0)
  const [showControl, setShowControl] = useState(false)

  const incrementIndex = () => {
    setIndex((cur) => (cur + 1) % viewCount)
  }

  const handleMouseEnter = () => {
    setShowControl(true)
  }

  const handleMouseLeave = () => {
    setShowControl(false)
  }

  const decrementIndex = () => {
    setIndex((cur) => (cur - 1 + viewCount) % viewCount)
  }
  return (
    <div
      className={styles.carouselContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AutoPlaySwipeableViews
        interval={interval}
        index={index}
        onChangeIndex={incrementIndex}
      >
        {children}
      </AutoPlaySwipeableViews>
      <div className={styles.pagination}>
        <Pagination count={viewCount} index={index} />
      </div>
      {control && (
        <div className={styles.controlContainer}>
          <Fade in={showControl}>
            <div className={styles.control}>
              <IconButton
                className={styles.controlButton}
                onClick={decrementIndex}
              >
                <ChevronLeftIcon className={styles.icon} />
              </IconButton>
              <IconButton
                className={styles.controlButton}
                onClick={incrementIndex}
              >
                <ChevronRightIcon />
              </IconButton>
            </div>
          </Fade>
        </div>
      )}
    </div>
  )
}

export default Carousel
