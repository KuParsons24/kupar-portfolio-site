import * as React from 'react';
import { useRef, forwardRef } from 'react';
import { Button, Container, Grid, Paper, Skeleton, Stack, TextField, Toolbar, Typography } from '@mui/material';
import ResponsiveAppBar from '../app_bar/ResponsiveAppBar';
import { useTheme } from '@mui/system';
import { LoadingButton } from '@mui/lab';
import MessageSnackbar from '../status/MessageSnackBar';

const ContactMePage = forwardRef((props, ref) => {
  const theme = useTheme();

  const [submitting, setSubmitting] = React.useState(false);
  const [snackBarOpen, setSnackBarOpen] = React.useState(false);
  const [severity, setSeverity] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (e) => {
    setSubmitting(true);
    e.preventDefault();
    const data = {
      'name': e.target.name.value,
      'email': e.target.email.value,
      'message': e.target.message.value
    }
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 10000);
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then((data) => {
      setSeverity(data.severity);
      console.log(data)
      setMessage(data.message);
    })
    .then(() => {
      setSnackBarOpen(true);
      setSubmitting(false);
      e.target.name.value = '';
      e.target.email.value = '';
      e.target.message.value = '';
    })
    .catch((error) => {
      if (error.name === 'AbortError'){
        setSeverity('error');
        setMessage('Request timed out.');
      } else {
        console.error('Error:', error);
        setSeverity('error');
        setMessage(error.message);
      }
      setSnackBarOpen(true);
      setSubmitting(false);
    });
  }

  return(
    <Paper ref={ref} square sx={{
      // backgroundColor: 'darkslategray',
      // backgroundBlendMode: theme.palette.mode === 'dark' ? 'multiply' : 'screen',
      // backgroundPosition: 'center',
      // backgroundRepeat: 'no-repeat',
      // backgroundSize: 'cover',
      // backgroundAttachment: 'fixed',
      height: 'auto',
      minHeight: '100%'
    }}>
      {/* <Toolbar /> */}
      <Container maxWidth='xl' component='form' onSubmit={handleSubmit} sx={{display: 'flex', alignItems: 'center', minHeight: '100%' }}>
        <Grid container spacing={2} paddingLeft='10px' paddingRight='10px' paddingTop='100px' paddingBottom='100px'>
          <Grid item xs={12} >
            <Typography textAlign='center' variant='h3' marginBottom='100px'>Contact Me</Typography>
          </Grid>
          <Grid item sm={6} xs={12} >
            <TextField required fullWidth id='name' label='Name' variant='outlined' />
          </Grid>
          <Grid item sm={6} xs={12} >
            <TextField required type='email' fullWidth id='email' label='Email' variant='outlined' />
          </Grid>
          <Grid item xs={12} >
            <TextField multiline minRows={3} fullWidth id='message' label='Message' variant='outlined' />
          </Grid>
          <Grid container item justifyContent='right' marginBottom='100px' xs={12} >
            <LoadingButton loading={submitting} variant='contained' type='submit' >Submit</LoadingButton>
          </Grid>
        </Grid>
      </Container>
      <MessageSnackbar setOpen={setSnackBarOpen} open={snackBarOpen} severity={severity}>{message}</MessageSnackbar>
    </Paper>
  );
});

export default ContactMePage