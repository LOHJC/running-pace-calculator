import './App.css';
import * as React from 'react';

//Material UI
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

//Chakra UI


//components
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { NumberEditbox } from './components/NumberEditbox';

function App() {
  return (
    <Container maxWidth="sm">
      {/* xs spacing per column is 12 */}
      <Grid container> 
        <Header title="Running Pace Planner" xs={12}/>
        <Grid item xs={6} align="center">
          <NumberEditbox label="Distance" unit="km" checkInt={false} defaultMessage="Target Distance" errorMessage="Numbers only" />
          <Stack direction="row" spacing={2}>
            <NumberEditbox label="" unit="hours" defaultMessage="Target hours" checkInt={true} errorMessage="Numbers with no decimal place only" />
            <NumberEditbox label="" unit="minutes"  defaultMessage="Target minutes" checkInt={true}  errorMessage="Number with no decimal place only" />
          </Stack>
        </Grid>
        <Content title="output" xs={6}/>
        <Footer item name="Loh Jia Chiew" link="https://lohjc.github.io/"  xs={12}/>
      </Grid>
    </Container>
  )

}

export default App;
