import React from 'react'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const Footer = (props) => {
  return (
    <Typography variant="body2" align="center">
        {'Copyright © Created by '}
        <Link color="inherit" href={props.link}>
        {props.name}
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
  )
}
