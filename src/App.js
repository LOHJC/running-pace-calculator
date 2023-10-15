import './App.css';
import * as React from 'react';

//Material UI
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
//import Grid from '@mui/material/Grid';

//components
import { Header } from './components/Header';
//import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { NumberEditbox } from './components/NumberEditbox';
import { RunningPaceGraph } from './components/RunningPaceGraph';
import { Box, Slider} from '@mui/material';
import { useTheme } from '@mui/material/styles';

function App() {
  const [distance, setDistance] = React.useState(0);
  const [hour, setHour] = React.useState(0);
  const [min, setMin] = React.useState(0);

  const [gradient_scale, setGradientScale] = React.useState(0.2);
  const theme = useTheme();

  return (
    
    <Stack width="auto" height="100%">
      {/* THIS IS FOR GRID
      Each size has 12 columns
        xs, extra-small: 0px
        sm, small: 600px
        md, medium: 900px
        lg, large: 1200px
        xl, extra-large: 1536px */}
      <Header title="Running Pace Planner"/>
      <Container disableGutters sx={{flexGrow: 1}}> 
        <Box align="center">
          <Stack width="75%"><NumberEditbox label="Distance" unit="km" checkInt={false} defaultMessage="Target Distance" errorMessage="Numbers only" setValue={setDistance}/></Stack>
          <Stack width="75%" direction="row" spacing={2} justifyContent={"center"}>
            <NumberEditbox label="" unit="hours" defaultMessage="Target hours" checkInt={true} errorMessage="Numbers with no decimal place only" setValue={setHour}/>
            <NumberEditbox label="" unit="minutes"  defaultMessage="Target minutes" checkInt={true}  errorMessage="Number with no decimal place only" setValue={setMin}/>
          </Stack>
        </Box>
        
        <Box align="center">
          <Slider sx={{width:"75%"}} valueLabelDisplay="auto" size="small" min={0.2} max={1} step={0.01} onChange={(e)=>{setGradientScale(e.target.value);}}/>
          <RunningPaceGraph distance={distance} timeHour={hour} timeMin={min} gradientScale={gradient_scale} theme={theme}/>
        </Box>
      </Container>
      <Footer theme={theme} color="white" name="Loh Jia Chiew" link="https://lohjc.github.io/"/>
    </Stack>
  )

}

export default App;
