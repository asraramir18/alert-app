import * as React from 'react';
import {Grid, Box, Typography} from '@mui/material'; 
import CircleIcon from '@mui/icons-material/Circle';

const colorCode = {
  Mild: '#00A300',
  Moderate: '#FCA034',
  Severe: '#D10000'
}

const AlertCard = (props) => {
  const [machines, setMachines] = React.useState('');

  const {
    _id, suspectedReason, Timestamp, Machine, status, Anomaly
  } = props.alertData
  console.log('props.alertData : ', props.alertData)

    return (
        <Grid
          sx={{
            maxWidth: 345,
            minWidth: 300,
            m: 1.5,
            p: 2,
            backgroundColor: '#ffffff',
            border: props.activeCard === _id ? 1 : 1,
            borderRadius: 1,
            borderColor: props.activeCard === _id ? 'blue' : '#2A2E5D',
            display: 'flex',
            flexDirection: 'row'
          }}
        >
            <CircleIcon sx={{ color: status==='new' ? '#3478FC' : 'white', fontSize: '0.9rem', mr: 1}}/>
            <Box>
              <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Typography fontSize='0.9rem' textAlign={'left'} sx={{textTransform: 'capitalize'}}>{`ID`}</Typography>
                  <Typography fontSize='0.9rem' textAlign={'right'} sx={{backgroundColor: colorCode[Anomaly], borderRadius: 5, px: 1.5, color:'white', textTransform: 'capitalize'}}>
                    {`${Anomaly}`}
                  </Typography>
              </Box>
              <Typography fontSize='0.9rem' textAlign={'left'} sx={{mb: 1, textTransform: 'capitalize'}}>{`#${_id}`}</Typography>
              <Typography fontSize='0.9rem' fontWeight='bold' textAlign={'left'} sx={{textTransform: 'capitalize'}}>{`${suspectedReason || 'Unknown Anomally'}`}</Typography>
              <Typography fontSize='0.9rem' textAlign={'left'} sx={{textTransform: 'capitalize'}}>
                {`Detected At ${ Timestamp ? new Date(Timestamp*1000).toISOString() : new Date().toISOString()}`}
              </Typography>
              <Typography fontSize='0.9rem' textAlign={'left'} sx={{color: '#3478FC', textTransform: 'capitalize'}}>{`${Machine}`}</Typography>
            </Box>
        </Grid>
    )
  }
  
  export default AlertCard