import React, { FunctionComponent } from 'react'
import { Typography, Grid, styled } from '@mui/material'
import dataFace from '../assets/img/data-face.jpg'
import dataNet from '../assets/img/data-net.jpg'

interface PitchPanelsProps {}

interface PitchPanelProps {
  key: string
  title: string
  description: string
  img: string
  justifyContent: string
  gradientDirection: string
}

const PITCH_PANELS: PitchPanelProps[] = [
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

export const PitchPanels: FunctionComponent<PitchPanelsProps> = () => {
  return (
    <div>
      {PITCH_PANELS.map((pitchPanel) => (
        <PitchPanel {...pitchPanel} />
      ))}
    </div>
  )
}

const Image = styled('div')<PitchPanelProps>(({ theme, gradientDirection, img }) => ({
  flexGrow: 1,
  padding: theme.spacing(7),
  bgcolor: 'transparent',
  backgroundImage: `linear-gradient(to ${gradientDirection}, white 30%, transparent 120%), url(${img})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '100%',
  minHeight: '500px',
  width: '100%',
}))

const PitchPanel: FunctionComponent<PitchPanelProps> = (props: PitchPanelProps) => {
  return (
    <Image {...props}>
      <Grid container justifyContent={props.justifyContent} alignItems='center'>
        <Grid item xs={12} sm={6} md={4} lg={4} sx={{ pt: 7, pb: 7, height: '100%' }}>
          <Typography variant='h4' gutterBottom>
            {props.title}
          </Typography>
          <Typography>{props.description}</Typography>
        </Grid>
      </Grid>
    </Image>
  )
}
