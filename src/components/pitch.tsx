import React, { FunctionComponent } from 'react'
import { Typography, Grid, makeStyles } from '@material-ui/core'
import { GridJustification } from '@material-ui/core/grid'
import dataFace from '../assets/img/data-face.jpg'
import dataNet from '../assets/img/data-net.jpg'

interface Pitch {
  key: string
  title: string
  description: string
  img: string
  justifyContent: GridJustification
  gradientDirection: string
}

interface PitchProps {}

let panelStyles = makeStyles((theme) => ({
  image: (props: Pitch) => ({
    flexGrow: 1,
    padding: theme.spacing(7),
    backgroundColor: 'transparent',
    backgroundImage: `linear-gradient(to ${props.gradientDirection}, white 30%, transparent 120%), url(${props.img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100%',
    minHeight: '500px',
    width: '100%',
  }),
  textContainer: (props: Pitch) => ({
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(7),
    height: '100%',
  }),
  textPanel: {
    maxWidth: '400px',
  },
}))

const PitchPanel: FunctionComponent<Pitch> = (props) => {
  let styles = panelStyles(props)

  return (
    <div className={styles.image}>
      <Grid container justifyContent={props.justifyContent} alignItems='center'>
        <Grid item xs={12} sm={6} md={4} lg={4} className={styles.textContainer}>
          <Typography variant='h4' gutterBottom>
            {props.title}
          </Typography>
          <Typography>{props.description}</Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export const PitchPanels: FunctionComponent<PitchProps> = () => {
  const pitches: Pitch[] = [
    {
      key: 'data-driven',
      title: 'Data Driven Development',
      description: `Building a data-driven organisation starts with listening to \
            what your data is saying.`,
      img: dataFace,
      justifyContent: 'flex-start',
      gradientDirection: 'right',
    },
    {
      key: 'data-quality',
      title: 'Data Quality before Data Science',
      description: `Data quality is the number one issue that we see blocking businesses. \
            Ask yourself honestly, do you trust your data?`,
      img: dataNet,
      justifyContent: 'flex-end',
      gradientDirection: 'left',
    },
  ]
  return (
    <div>
      {pitches.map((pitch) => (
        <PitchPanel {...pitch} />
      ))}
    </div>
  )
}
