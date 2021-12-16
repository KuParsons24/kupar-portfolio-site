import * as React from 'react';
import { Paper, Toolbar } from '@mui/material';
import ResponsiveAppBar from '../app_bar/ResponsiveAppBar';
import { useTheme } from '@mui/system';

export default function HomePage (props) {
  const theme = useTheme();

  return(
    <Paper square sx={{
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
      {props.children}
    </Paper>
  );
};