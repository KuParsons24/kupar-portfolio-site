import * as React from 'react';
import { forwardRef } from 'react';
import { Button, Container, Grid, Paper, Stack, Toolbar, Typography } from '@mui/material';
import ResponsiveAppBar from '../app_bar/ResponsiveAppBar';
import { useTheme } from '@mui/system';

const HomePage = forwardRef((props, ref) => {
  const theme = useTheme();

  return(
    <Paper ref={ref} square sx={{
      backgroundImage: `url(${props.backgroundImage})`,
      backgroundColor: 'darkslategray',
      backgroundBlendMode: theme.palette.mode === 'dark' ? 'multiply' : 'screen',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      height: '100vh',
    }}>
      {/* <Toolbar /> */}
      <Container maxWidth='xl' sx={{display: 'flex', alignItems: 'center', height: '100vh'}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h3' textAlign='center'>Kurtis Parsons - Full Stack Web Developer</Typography>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={3} direction='row' justifyContent='center'>
              <Button size='large' variant='outlined'>Resume</Button>
              <Button size='large' variant='outlined'>Projects</Button>
            </Stack>
          </Grid>
          {/* <Grid container item xs={6} justifyContent='left'>

          </Grid> */}
        </Grid>
      </Container>
    </Paper>
  );
});

export default HomePage;