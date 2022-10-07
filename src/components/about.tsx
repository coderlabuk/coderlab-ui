import React, { FunctionComponent } from 'react'
import { Grid, Typography, Container, Link } from '@mui/material'
import { Staff } from './staff'

interface AboutProps {}

export const About: FunctionComponent<AboutProps> = () => {
  const pStyles = { mt: 5, mb: 5 }
  const h2styles = { mb: 3 }
  return (
    <Container sx={{ pt: 7, pb: 7, maxWidth: '700px' }}>
      <Grid container spacing={5} direction='column'>
        <Grid item>
          <Typography sx={pStyles} variant='h3' component='h1' gutterBottom>
            About CoderLab
          </Typography>
          <Typography sx={pStyles}>
            CoderLab is a software consltancy that delivers high quality bespoke projects in Machine Learning, Big Data,
            API development and Web Application development. Between us we have over 30 years experience in shipping
            code and we know how to deliver commercial engineering projects on time and in budget.
          </Typography>
        </Grid>

        <Grid item>
          <Typography sx={h2styles} variant='h5' component='h3' gutterBottom>
            Our approach
          </Typography>
          <Typography sx={pStyles}>
            Many consultancies start with a given business problem and see their job as creating a solution for that
            problem. We're a bit different. We start with data. We look at what data assets you already own or can
            acquire, the data quality, and how you could put your data to work. After our initial data exploration, we
            begin to work with businesses to identify which projects add the most value whilst still being achievable
            over a 6-12 month timeframe.
          </Typography>
          <Typography sx={pStyles}>
            This data-driven approach requires a change in mindset that is not always easy or comfortable for our
            clients. However putting the data first ensures that we are always working towards achievable goals, and
            making data science a practical and useful part of your business toolbox. Too often data science projects
            end up abandoned, or fail to deliver the "magic" results that were promised. That's why our focus is always
            on integrating seamlessly into your existing business processes, and adding value to your business from day
            one.
          </Typography>
        </Grid>

        <Grid item>
          <Typography sx={h2styles} variant='h5' component='h3' gutterBottom>
            Our staff
          </Typography>
          <Staff />
        </Grid>

        <Grid item>
          <Typography sx={h2styles} variant='h5' component='h3' gutterBottom>
            Get in touch
          </Typography>
          <Typography sx={pStyles}>
            To discuss your project get in touch at <Link href='mailto:info@coderlab.co.uk'>info@coderlab.co.uk</Link>.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
