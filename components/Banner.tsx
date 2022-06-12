import React, { PropsWithChildren } from 'react'

import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    banner: {
      position: 'fixed',
      bottom: 0,
      width: '100%',
      zIndex: 100,
    },
  })
)

const Banner: React.FC<PropsWithChildren<any>> = (
  props: PropsWithChildren<any>
) => {
  const { children } = props
  const styles = useStyles()

  return <div className={styles.banner}>{children}</div>
}

export default Banner
