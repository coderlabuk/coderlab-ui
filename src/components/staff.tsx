import React, { FunctionComponent } from 'react'
import { Typography, Grid, makeStyles } from '@material-ui/core'
import rob from '../assets/staff/rob-tucker.jpg'
import simon from '../assets/staff/simon-van-blerk.jpg'

interface StaffProps {}

interface Staff {
  id: number
  name: string
  title: string
  description: string
  img: string
}

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    paddingRight: theme.spacing(3),
  },
  textContainer: {
    marginRight: 'auto',
  },
  image: (props: Staff) => ({
    backgroundColor: 'transparent',
    backgroundImage: `url(${props.img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '50%',
    height: '125px',
    width: '125px',
  }),
  name: {
    color: theme.palette.grey['900'],
  },
  title: {
    color: theme.palette.grey['500'],
  },
}))

const StaffMember: FunctionComponent<Staff> = (props) => {
  let styles = useStyles(props)

  return (
    <Grid item>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={12} sm={4} className={styles.imageContainer}>
          <Grid container direction='row' justify='flex-end'>
            <div className={styles.image} />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={8} className={styles.textContainer}>
          <Grid container direction='column' justify='flex-start'>
            <Typography className={styles.name}>{props.name}</Typography>
            <Typography className={styles.title}>{props.title}</Typography>
            <Typography>{props.description}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
export const Staff: FunctionComponent<StaffProps> = () => {
  let staff: Staff[] = [
    {
      id: 1,
      name: 'Rob Tucker',
      title: 'Director',
      description: `Rob is a Data Scientist with a love for pure maths, linguistics \ 
                and compiler design. He also plays piano and has a dog named Izzy.`,
      img: rob,
    },
    {
      id: 2,
      name: 'Simon Van Blerk',
      title: 'Web Developer',
      description: `Simon is a web developer with a focus on user-interfaces and design.\
                We once tried to count how many websites Simon has built but we gave up \
                counting around 57.`,
      img: simon,
    },
  ]

  return (
    <Grid container spacing={6} direction='column'>
      {staff.map((member) => (
        <StaffMember {...member} />
      ))}
    </Grid>
  )
}
