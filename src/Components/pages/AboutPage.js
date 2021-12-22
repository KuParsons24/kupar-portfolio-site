import * as React from 'react';
import { useRef, forwardRef } from 'react';
import { Button, Container, Grid, List, ListItem, ListItemIcon, Paper, Stack, Toolbar, Typography } from '@mui/material';
import ResponsiveAppBar from '../app_bar/ResponsiveAppBar';
import { useTheme } from '@mui/system';
import CircleIcon from '@mui/icons-material/Circle';
import { Circle } from '@mui/icons-material';

const AboutPage = forwardRef((props, ref) => {
  const theme = useTheme();

  const skills = [
    'HTML/JavaScript/CSS',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'SQL',
    'Linux server administration',
    'Nginx',
  ]

  return(
    <Paper ref={ref} square sx={{
      // backgroundColor: 'darkslategray',
      // backgroundBlendMode: theme.palette.mode === 'dark' ? 'multiply' : 'screen',
      // backgroundPosition: 'center',
      // backgroundRepeat: 'no-repeat',
      // backgroundSize: 'cover',
      // backgroundAttachment: 'fixed',
      height: 'auto',
      minHeight: '100%',
    }}>
      {/* <Toolbar /> */}
      <Container maxWidth='xl' sx={{display: 'flex', alignItems: 'center', minHeight: '100%'}}>
        <Grid container spacing={4} paddingLeft='10px' paddingRight='10px' paddingTop='100px' paddingBottom='100px'>
          <Grid item xs={12}>
            <Typography variant='h3' textAlign='center' marginBottom='100px'>About Me</Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant='p' textAlign='center'>My name is Kurtis Parsons and I am a full-stack web developer experienced in the MERN stack. My background is in electrical engineering but I've discovered I have a love for software development!</Typography>
          </Grid>
          <Grid container item md={6} xs={12} justifyContent='left' >
            <List disablePadding >
              <ListItem>
                <Typography>Skills:</Typography>
              </ListItem>
              {skills.map((skill) => {
                return (
                  <ListItem key={skill} >
                    <ListItemIcon>
                      <Circle fontSize='small'/>
                    </ListItemIcon>
                    <Typography variant='p'>{skill}</Typography>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
});

export default AboutPage