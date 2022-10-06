import * as React from 'react'
import { Typography, Grid, TextField, Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    width: '100%',
  },
  title: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  form: {
    maxWidth: '700px',
    width: '100%',
    marginBottom: theme.spacing(7),
  },
  submit: {
    marginLeft: 'auto',
  },
}))

const sendForm = (e: any) => {
  e.preventDefault()
  console.log('Form event submitted')
  console.log(event)
}

const Form = () => {
  const styles = useStyles()

  return (
    <form className={styles.form} noValidate onSubmit={sendForm}>
      <TextField
        id='filled-full-width'
        label='Name'
        style={{ margin: 8 }}
        placeholder='Jane Doe'
        helperText=''
        fullWidth
        margin='normal'
        variant='filled'
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        required
        id='filled-full-width'
        label='Email'
        style={{ margin: 8 }}
        placeholder='email@example.com'
        helperText=''
        fullWidth
        margin='normal'
        variant='filled'
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        id='filled-full-width'
        multiline={true}
        rows={8}
        label='Comments'
        style={{ margin: 8 }}
        placeholder=''
        helperText=''
        fullWidth
        margin='normal'
        variant='filled'
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button className={styles.submit} type='submit'>
        Submit
      </Button>
    </form>
  )
}
export const Contact = () => {
  let styles = useStyles()

  return (
    <Grid container direction='column' alignItems='center' className={styles.container}>
      <Grid item>
        <Typography className={styles.title} variant='h4' component='h1'>
          Get in touch
        </Typography>
      </Grid>
      <Grid item>
        <Form />
      </Grid>
    </Grid>
  )
}
