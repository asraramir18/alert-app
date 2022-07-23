import * as React from 'react';
import {Box, Button, Divider, Typography, CircularProgress} from '@mui/material';
import AlertCard from '../../components/card/alertCard';

const AlertList = (props) => {
  // const [alertList, setAlertList] = React.useState(alert);
  // const [activeCard, setActiveCard] = React.useState('');
  const [newAlert, setNewAlert] = React.useState([]);

  React.useEffect(() => {
    const newNotifId = []
    props.lists.map((data) => {
      if(data.status === 'new'){
        newNotifId.push(data.id)
    }})
    setNewAlert(newNotifId)
  }, [props.lists]);

  const onClickCard = (data) => {
    props.setActiveCard(data._id)
    const newAlertList = props.lists
    newAlertList.map((value) => {
      if(value._id === data._id) value.status = 'old'
    })
    props.setAlertList(newAlertList)
  } 
  if(props.isLoading) return(
    <Box
      sx={{
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        border: 1,
        borderColor: '#A2AEBC'
      }}
    >
      <CircularProgress />
    </Box>
  )

    return (
      <>
        <Box
          sx={{
            backgroundColor: '#ffffff',
            overflow: 'hidden',
            borderRight: 1,
            borderTop: 1,
            borderColor: '#A2AEBC'
          }}
        >
            <Button>
                Back
            </Button>
            <Divider />
            <Box sx={{display: 'flex', flexDirection: 'row', py: 1}}>
              <Typography sx={{px: 2}}>{`${props.lists.length} Alerts`}</Typography>
              {newAlert.length > 0 && 
                <Typography sx={{backgroundColor: '#3478FC', borderRadius: 5, px: 2, color:'white'}}>{`${props.lists.length} New`}</Typography>
              }
            </Box>
            <Divider sx={{ borderColor: '#A2AEBC' }}/>
            {props.lists.map((data) => (
              <Button  
              onClick={() => onClickCard(data)}>
                <AlertCard alertData={data} activeCard={props.activeCard} />
              </Button>
            ))}
        </Box>
      </>
    )
  }
  
  export default AlertList