import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './Components/app_bar/ResponsiveAppBar';
import Box from '@mui/material/Box';
import { Button, Container, Grid, Paper, Stack, Toolbar, Typography, useMediaQuery } from '@mui/material';
import backgroundImage from './CitySkyline.jpg'
import HomePage from './Components/pages/HomePage';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { useEffect, useState } from 'react';

// let theme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });
// theme = responsiveFontSizes(theme);

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  useEffect(() => {
    setDarkMode(prefersDarkMode);
  },[prefersDarkMode]);

  let theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });
  theme = responsiveFontSizes(theme);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <HomePage backgroundImage={backgroundImage} >
          <Container maxWidth='xl' sx={{display: 'flex', alignItems: 'center', height: '100vh'}}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant='h1' textAlign='center'>WELCOME! HOMEPAGE!</Typography>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={3} direction='row' justifyContent='center'>
                  <Button size='large' variant='contained'>Resume</Button>
                  <Button size='large' variant='contained'>Projects</Button>
                </Stack>
              </Grid>
              {/* <Grid container item xs={6} justifyContent='left'>

              </Grid> */}
            </Grid>
          </Container>
        </HomePage>
        <Paper square sx={{
          backgroundColor: 'gray',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '100vh',
        }}>

        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
