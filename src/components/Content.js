import React from 'react'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

export const Content = (props) => {
  return (
    <Grid item xs={props.xs}>
        <Typography variant="body1" align="center">{props.title}</Typography>
    </Grid>
  )
}
