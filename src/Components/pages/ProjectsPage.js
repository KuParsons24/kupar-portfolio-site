import * as React from 'react';
import { useRef, forwardRef } from 'react';
import { Button, Container, Grid, Paper, Stack, Toolbar, Typography } from '@mui/material';
import ResponsiveAppBar from '../app_bar/ResponsiveAppBar';
import { useTheme } from '@mui/system';
import ProjectCard from '../display/ProjectCard';
import CrudImage from '../../Crud.PNG';

const ProjectsPage = forwardRef((props, ref) => {
  const theme = useTheme();

  const project1 = {
    title: 'Contact Database',
    body: 'React CRUD application for keeping track of contacts in an address book database. Node.js and express is used for the backend. Sequelize ORM and SQL lite is used for the database.',
    demoLink: 'http://kuparsons24.ddnsfree.com/crud',
    gitLink: 'https://github.com/KuParsons24/crud-admin-dashboard',
    image: CrudImage,
    alt: 'crud_image'
  };

  return(
    <Paper elevation={2} ref={ref} square sx={{
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
        <Grid container spacing={2} paddingLeft='10px' paddingRight='10px' paddingTop='100px' paddingBottom='100px'>
          <Grid item xs={12} >
            <Typography textAlign='center' variant='h3' marginBottom='100px' >Projects</Typography>
          </Grid>
          <Grid container item justifyContent='center' xs={12}>
            <ProjectCard project={project1} />
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
});

export default ProjectsPage