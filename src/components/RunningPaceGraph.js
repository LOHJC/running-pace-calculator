import React from 'react'
import { Grid, Typography } from '@mui/material'
import RunLinearly from '../RunningMathFunctions'

export const RunningPaceGraph = (props) => {

    let data_array = RunLinearly(props.distance,props.timeHour,props.timeMin,props.gradientScale);

    return (
        <Grid item xs={props.xs}>
            {
                data_array.map((data)=>(
                    <Typography key={data.id} variant="body1" align="center">{data.dist_km}km,{data.time_min}'{data.time_sec}"</Typography> 
                ))
            }
            {/* <Typography variant="body1" align="center">Output</Typography> */}
        </Grid>
    )
}
