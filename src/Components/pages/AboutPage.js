import * as React from 'react';
import { useRef, forwardRef } from 'react';
import { Button, Container, Grid, Paper, Stack, Toolbar, Typography } from '@mui/material';
import ResponsiveAppBar from '../app_bar/ResponsiveAppBar';
import { useTheme } from '@mui/system';

const AboutPage = forwardRef((props, ref) => {
  const theme = useTheme();

  return(
    <Paper ref={ref} square sx={{
      // backgroundColor: 'darkslategray',
      // backgroundBlendMode: theme.palette.mode === 'dark' ? 'multiply' : 'screen',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      height: '100vh',
    }}>
      {/* <Toolbar /> */}
      <Container maxWidth='xl' sx={{display: 'flex', alignItems: 'center', height: '100vh'}}>
        <Typography variant='p'>Skills</Typography>
      </Container>
    </Paper>
  );
});

export default AboutPage