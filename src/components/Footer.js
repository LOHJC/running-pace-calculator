import React from 'react'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const Footer = (props) => {
  return (
    <Typography sx={{backgroundColor: props.theme.palette.primary.main, padding: "1%"}} color={props.color} variant="body2" align="center">
        {'Copyright © Created by '}
        <Link color="inherit" href={props.link}>
        {props.name}
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
  )
}
