import React, { FunctionComponent } from 'react'
import { Typography, Grid, styled } from '@mui/material'
import rob from '../assets/staff/rob-tucker.jpg'
import simon from '../assets/staff/simon-van-blerk.jpg'

interface StaffProps {}

interface StaffMemberProps {
  id: string
  name: string
  title: string
  description: string
  img: string
}

const STAFF_MEMBERS: StaffMemberProps[] = [
  {
    id: '1',
    name: 'Rob Tucker',
    title: 'Director',
    description: `Rob is a Data Scientist with a love for pure maths, linguistics \ 
            and compiler design. He also plays piano and has a dog named Izzy.`,
    img: rob,
  },
  {
    id: '2',
    name: 'Simon Van Blerk',
    title: 'Web Developer',
    description: `Simon is a web developer with a focus on user-interfaces and design.\
            We once tried to count how many websites Simon has built but we gave up \
            counting around 57.`,
    img: simon,
  },
]

export const Staff: FunctionComponent<StaffProps> = () => {
  return (
    <Grid container spacing={6} direction='column'>
      {STAFF_MEMBERS.map((member) => (
        <StaffMember {...member} />
      ))}
    </Grid>
  )
}

const Image = styled('div')((props: StaffMemberProps) => ({
  bgcolor: 'transparent',
  backgroundImage: `url(${props.img})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  borderRadius: '50%',
  height: '125px',
  width: '125px',
}))

const StaffMember: FunctionComponent<StaffMemberProps> = (props) => {
  return (
    <Grid item>
      <Grid container direction='row' justifyContent='center' alignItems='center'>
        <Grid item xs={12} sm={4} sx={{ p: 3 }}>
          <Image {...props} />
        </Grid>
        <Grid item xs={12} sm={8} sx={{ marginRight: 'auto' }}>
          <Grid container direction='column' justifyContent='flex-start'>
            <Typography sx={{ color: 'black' }}>{props.name}</Typography>
            <Typography sx={{ color: 'secondary.main' }}>{props.title}</Typography>
            <Typography>{props.description}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
