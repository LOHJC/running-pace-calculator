import './App.css';
import * as React from 'react';

//Material UI
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

//components
import { Header } from './components/Header';
//import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { NumberEditbox } from './components/NumberEditbox';
import { RunningPaceGraph } from './components/RunningPaceGraph';
import { Slider, Typography } from '@mui/material';

function App() {
  const [distance, setDistance] = React.useState(0);
  const [hour, setHour] = React.useState(0);
  const [min, setMin] = React.useState(0);

  const [gradient_scale, setGradientScale] = React.useState(0.2);

  return (
    <Container>
      {/* Each size has 12 columns
      xs, extra-small: 0px
      sm, small: 600px
      md, medium: 900px
      lg, large: 1200px
      xl, extra-large: 1536px */}
      <Header title="Running Pace Planner"/>
      <Grid container> 
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} align="center">
          <NumberEditbox label="Distance" unit="km" checkInt={false} defaultMessage="Target Distance" errorMessage="Numbers only" setValue={setDistance}/>
          <Stack direction="row" spacing={2}>
            <NumberEditbox label="" unit="hours" defaultMessage="Target hours" checkInt={true} errorMessage="Numbers with no decimal place only" setValue={setHour}/>
            <NumberEditbox label="" unit="minutes"  defaultMessage="Target minutes" checkInt={true}  errorMessage="Number with no decimal place only" setValue={setMin}/>
          </Stack>
        </Grid>
        
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} align="center">
          <Slider valueLabelDisplay="auto" size="small" sx={{width: "80%", margin: "5% 10%"}} min={0.2} max={1} step={0.01} onChange={(e)=>{setGradientScale(e.target.value);}}/>
          <RunningPaceGraph xs={12} sm={10} md={12} lg={10} xl={10} distance={distance} timeHour={hour} timeMin={min} gradientScale={gradient_scale}/>
        </Grid>
      </Grid>
      <Footer item name="Loh Jia Chiew" link="https://lohjc.github.io/"/>
    </Container>
  )

}

export default App;
