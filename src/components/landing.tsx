import React, { FunctionComponent } from 'react'
import { ImageSlider } from './slider'
import { Clients } from './clients'
import { styled } from '@mui/material'
import { PitchPanels } from './pitch'

interface LandingProps {}

const ClientsContainer = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(4),
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
}))

export const Landing: FunctionComponent<LandingProps> = () => {
  return (
    <>
      <ImageSlider />
      <ClientsContainer>
        <Clients />
      </ClientsContainer>
      <PitchPanels />
    </>
  )
}
