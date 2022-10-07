import React, { FunctionComponent } from 'react'
import Slider from 'react-slick'
import { Typography, styled } from '@mui/material'
import graphNetwork from '../assets/img/graph-network.jpg'
import htmlFade from '../assets/img/html-fade.png'
import visualizeData from '../assets/img/visualize-data.jpg'

interface Panel {
  key: string
  title: string
  subtitle: any
  img: string
  bgColor?: string
  url?: string
}

type ImageProps = {
  img: string
  bgColor?: string
  url?: string
}

const SETTINGS = {
  dots: true,
  infinite: true,
  speed: 400,
  autoplay: false,
  pauseOnHover: false,
}

const PANELS: Panel[] = [
  {
    key: '1',
    title: 'Join the Data Revolution',
    subtitle: 'Helping enterprises achieve digital transformation',
    img: visualizeData,
    url: '',
  },
  {
    key: '2',
    title: 'Unified Data Science and Analytics',
    subtitle: 'Great Data Science starts with great data',
    img: graphNetwork,
    url: '',
  },
  {
    key: '3',
    title: 'Full stack development',
    subtitle: 'APIs, Application Development and Cloud Native Platforming',
    img: htmlFade,
    bgColor: '#051934',
    url: '',
  },
]

export const ImageSlider = (props: any) => {
  return (
    <Slider {...SETTINGS}>
      {PANELS.map((panel: Panel) => (
        <ImagePanel {...panel}>
          <Typography variant='h2' component='h1' gutterBottom>
            {panel.title}
          </Typography>
          <Typography variant='h5' component='h3'>
            {panel.subtitle}
          </Typography>
        </ImagePanel>
      ))}
    </Slider>
  )
}

const Image = styled('div')((props: ImageProps) => ({
  backgroundColor: props.bgColor ? props.bgColor : 'transparent',
  backgroundImage: `url(${props.img})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '500px',
  width: '100%',
}))

const Overlay = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
}))

const TextContainer = styled('div')(() => ({ textAlign: 'center' }))

const ImagePanel: FunctionComponent<ImageProps> = (props) => (
  <Image {...props}>
    <Overlay>
      <TextContainer>{props.children}</TextContainer>
    </Overlay>
  </Image>
)
