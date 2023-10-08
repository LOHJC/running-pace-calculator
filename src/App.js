import './App.css';
import * as React from 'react';

//Material UI
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

//Chakra UI


//components
import { Header } from './components/Header';
//import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { NumberEditbox } from './components/NumberEditbox';
import { RunningPaceGraph } from './components/RunningPaceGraph';
import { Slider } from '@mui/material';

function App() {
  const [distance, setDistance] = React.useState(0);
  const [hour, setHour] = React.useState(0);
  const [min, setMin] = React.useState(0);

  const [gradient_scale, setGradientScale] = React.useState(1);

  function sliderUpdate(e)
  {
    setGradientScale(e.target.value);
  }

  return (
    <Container maxWidth="sm">
      {/* xs spacing per column is 12 */}
      <Grid container> 
        <Header title="Running Pace Planner" xs={12}/>
        <Grid item xs={6} align="center">
          <NumberEditbox label="Distance" unit="km" checkInt={false} defaultMessage="Target Distance" errorMessage="Numbers only" setValue={setDistance}/>
          <Stack direction="row" spacing={2}>
            <NumberEditbox label="" unit="hours" defaultMessage="Target hours" checkInt={true} errorMessage="Numbers with no decimal place only" setValue={setHour}/>
            <NumberEditbox label="" unit="minutes"  defaultMessage="Target minutes" checkInt={true}  errorMessage="Number with no decimal place only" setValue={setMin}/>
          </Stack>
        </Grid>
        {/* <Content title={`${distance.toString()} km => ${hour.toString()} hour ${min.toString()} min`} xs={6}/> */}
        
        <Grid item xs={6} align="center">
          <Slider valueLabelDisplay="auto" size="small" sx={{width: "80%", margin: "5% 10%"}} min={1} max={10} onChange={sliderUpdate}/>
          <RunningPaceGraph distance={distance} timeHour={hour} timeMin={min} gradientScale={gradient_scale}/>
        </Grid>
        <Footer item name="Loh Jia Chiew" link="https://lohjc.github.io/"  xs={12}/>
      </Grid>
    </Container>
  )

}

export default App;
