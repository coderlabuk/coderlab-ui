import React, { FunctionComponent } from 'react'
import { ImageSlider } from './slider'
import { Clients } from './clients'
import { makeStyles } from '@material-ui/core'
import { PitchPanels } from './pitch'

interface LandingProps {}

let useStyles = makeStyles((theme) => ({
  clientsContainer: {
    marginTop: theme.spacing(4),
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
}))

export const Landing: FunctionComponent<LandingProps> = () => {
  let styles = useStyles()

  return (
    <div>
      <ImageSlider />
      <div className={styles.clientsContainer}>
        <Clients />
      </div>
      <div>
        <PitchPanels />
      </div>
    </div>
  )
}
