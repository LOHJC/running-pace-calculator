import React from 'react'
import Typography from '@mui/material/Typography';
import { AppBar } from '@mui/material';

export const Header = (props) => {
  return (
    <AppBar position='static'>
      <Typography padding="1%" variant="h5" align="center">{props.title}</Typography>
    </AppBar>
    )
}
