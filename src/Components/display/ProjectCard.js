import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProjectCard({ project }) {
  return (
    <Card raised sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        width='100%'
        image={project.image}
        alt={project.alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={project.demoLink} target='_blank' rel='noopener noreferrer' >Demo</Button>
        <Button size="small" href={project.gitLink} target='_blank' rel='noopener noreferrer' >GitHub</Button>
      </CardActions>
    </Card>
  );
}