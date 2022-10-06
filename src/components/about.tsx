import React, { FunctionComponent } from 'react'
import { Container, Typography, Grid, makeStyles } from '@material-ui/core'
import { Staff } from './staff'

interface AboutProps {}

const useStyles = makeStyles((theme) => ({
  h1: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  h2: {
    marginBottom: theme.spacing(3),
  },
  p: {
    marginBottom: theme.spacing(3),
  },
  pageContainer: {
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(7),
    maxWidth: '700px',
  },
}))

export const About: FunctionComponent<AboutProps> = () => {
  let styles = useStyles()

  return (
    <Container className={styles.pageContainer}>
      <Grid container spacing={5} direction='column'>
        <Grid item>
          <Typography className={styles.h1} variant='h3' component='h1' gutterBottom>
            About CoderLab
          </Typography>
          <Typography className={styles.p}>
            CoderLab is a software consltancy that delivers high quality bespoke projects in Machine Learning, Big Data,
            API development and Web Application development. Between us we have over 30 years experience in shipping
            code and we know how to deliver commercial engineering projects on time and in budget.
          </Typography>
        </Grid>

        <Grid item>
          <Typography className={styles.h2} variant='h5' component='h3' gutterBottom>
            Our approach
          </Typography>
          <Typography className={styles.p}>
            Many consultancies start with a given business problem and see their job as creating a solution for that
            problem. We're a bit different. We start with data. We look at what data assets you already own or can
            acquire, the data quality, and how you could put your data to work. After our initial data exploration, we
            begin to work with businesses to identify which projects add the most value whilst still being achievable
            over a 6-12 month timeframe.
          </Typography>
          <Typography className={styles.p}>
            This data-driven approach requires a change in mindset that is not always easy or comfortable for our
            clients. However putting the data first ensures that we are always working towards achievable goals, and
            making data science a practical and useful part of your business toolbox. Too often data science projects
            end up abandoned, or fail to deliver the "magic" results that were promised. That's why our focus is always
            on integrating seamlessly into your existing business processes, and adding value to your business from day
            one.
          </Typography>
        </Grid>

        <Grid item>
          <Typography className={styles.h2} variant='h5' component='h3' gutterBottom>
            Our staff
          </Typography>
          <Staff />
        </Grid>

        <Grid item>
          <Typography className={styles.h2} variant='h5' component='h3' gutterBottom>
            Get in touch
          </Typography>
          <Typography className={styles.p}>To discuss your project get in touch at info@coderlab.co.uk.</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
