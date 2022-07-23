import * as React from 'react';
import {Box, MenuItem, FormControl, Select, Grid, InputLabel} from '@mui/material';
import { getAlerts } from '../../services/alert/index'
import AlertList from './alertList';
import AlertContent from './alertContent';

const listOfMachine = [{
  value: 'cncMachine',
  label: 'CNC Machine'
}, {
  value: 'secondMachine',
  label: 'Second Machine'
}, {
  value: 'thirdMachine',
  label: 'Third Machine'
}]

const defaultAlert = [{
  id: 1,
  status: 'new',
  equipment: 'CNC Machine',
  suspectedReason: 'Anomaly',
  timeDetected: '2021-06-18 20:10:04',
  actionRequired: '',
  comment: '',
  alertType: 'moderate'
}]

const Alerts = () => {
  const [machine, setMachine] = React.useState(listOfMachine[0].value);
  const [alertList, setAlertList] = React.useState(defaultAlert);
  const [activeCard, setActiveCard] = React.useState('');
  const [activeCardData, setActiveCardData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = (event) => {
    setMachine(event.target.value);
  };

  React.useEffect(() => {
    console.log('alertList : ', alertList)
    const currentAlertData =  alertList.find((data) => {return data._id === activeCard})
    setActiveCardData(currentAlertData)
    console.log('activeCard : ', activeCard)
  }, [activeCard]);

  React.useEffect(() => {
    setIsLoading(true)
    getAlerts().then((res) => setAlertList(res.data))
    setIsLoading(false)
  }, []);

    return (
        <Box
          sx={{
            backgroundColor: '#ffffff',
            p: 1,
            borderRadius: 2,
            boxShadow: 1
          }}
        >
          <FormControl sx={{ mb: 1 }}>
            <InputLabel id="machineList">List</InputLabel >
            <Select
              labelId="machineList"
              id="demo-simple-select"
              value={machine}
              label="List"
              onChange={handleChange}
            >
              {listOfMachine.map((machine) => (
                <MenuItem value={machine.value}>{machine.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Grid container spacing={2}>
            <Grid item xs={2.5}> 
              <AlertList isLoading={isLoading} lists={alertList} setList={setAlertList} activeCard={activeCard} setActiveCard={setActiveCard}/>
            </Grid>
            <Grid item xs={9.5}> 
              <AlertContent activeCardData={activeCardData}/>
            </Grid>
          </Grid>
        </Box>
    )
  }
  
  export default Alerts