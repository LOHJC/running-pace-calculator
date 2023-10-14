import React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export const Header = (props) => {
  return (
        <Typography variant="h5" align="center">{props.title}</Typography>
  )
}
