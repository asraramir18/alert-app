import * as React from 'react';
import {Box, Typography, FormControl, Select, InputLabel, MenuItem, TextField, Button, Divider, FormHelperText} from '@mui/material';
import Spectogram from '../../components/spectogram/spectogram'
import {editAlert} from '../../services/alert/index'

const listOfSuspectedReason = [{
  value: 'unknwonAnomaly',
  label: 'Unknwon Anomaly'
}, {
  value: 'knwonAnomaly',
  label: 'Knwon Anomaly'
}]

const listOfAction = [{
  value: 'Action_1',
  label: 'Action 1'
}, {
  value: 'Action_2',
  label: 'Action 2'
}, {
  value: 'Action_3',
  label: 'Action 3'
}]


const AlertContent = (props) => {
  const [suspectedReason, setReason] = React.useState('');
  const [action, setAction] = React.useState('');
  const [comment, setComment] = React.useState('');
  const [missingField, setMissingField] = React.useState(false);

  React.useEffect(() => {
    setReason('') 
    setAction('') 
    setComment('') 
    if(props.activeCardData){
      setReason(props.activeCardData.suspectedReason) 
      setAction(props.activeCardData.action) 
      setComment(props.activeCardData.comment)
      setMissingField(false)
    }
  }, [props.activeCardData]);

  const handleChangeReason = (event) => {
    setReason(event.target.value);
  };

  const handleChangeAction = (event) => {
    setAction(event.target.value);
  };

  const handleSubmit = async (event) => {
    if(!suspectedReason || !action || !comment){
      event.preventDefault()
      console.log('MISSING')
      setMissingField(true)
    } else {
      const data = {...props.activeCardData, suspectedReason, action, comment, }
      console.log('data : ', data)
      setMissingField(false)
      await editAlert(data)
    }
  }

  if(!props.activeCardData) 
    return (
      <Box
        sx={{
          backgroundColor: '#ffffff',
          overflow: 'hidden',
          borderTop: 1,
          borderColor: '#A2AEBC'
        }}
      >
        <Typography >{'Please select an alert'}</Typography>
      </Box>
    )

    return (
      <>
        <Box
          sx={{
            backgroundColor: '#ffffff',
            overflow: 'hidden',
            borderTop: 1,
            borderColor: '#A2AEBC'
          }}
        >
          <Box sx={{ p: 2}}>
          <Typography fontSize='1.5rem'>{`Alert ID #${props.activeCardData._id}`}</Typography>
          <Typography fontSize='1rem'>
            {`Detected AT ${props.activeCardData.Timestamp 
              ? new Date(props.activeCardData.Timestamp*1000).toISOString() 
              : new Date().toISOString()}`}
          </Typography>
          </Box>
          <Divider />
          <Box sx={{ mb:3, p: 2, display: 'flex', justifyContent: 'space-between'}}>
            <Box>
              <Typography fontSize='1.3rem' sx={{ mb: 2}}>Anomaly Machine Output</Typography>
              <audio src={`/wav/${props.activeCardData.soundClip}`} controls autoplay></audio>
              <Spectogram path={props.activeCardData.soundClip}/>
            </Box>
            <Box>
              <Typography fontSize='1.3rem' sx={{ mb: 2}}>Normal Machine Output</Typography>
              <audio src={`/wav/${props.activeCardData.soundClip}`} controls autoplay></audio>
              <Spectogram path={props.activeCardData.soundClip}/>
            </Box>
            <Box />
          </Box>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography fontWeight='bold'>Equipment</Typography>
              <Typography sx={{ mb: 2 }}>{props.activeCardData.Machine}</Typography>
              <FormControl error={missingField && !suspectedReason} sx={{ mb: 2, width: '30%' }}>
                <InputLabel id="machineList">Suspected Machine</InputLabel >
                <Select
                  labelId="machineList"
                  id="demo-simple-select"
                  value={suspectedReason}
                  label="Suspected Machine"
                  onChange={handleChangeReason}
                >
                  {listOfSuspectedReason.map((machine) => (
                    <MenuItem value={machine.value}>{machine.label}</MenuItem>
                  ))}
                </Select>
                {missingField && !suspectedReason && <FormHelperText id="component-error-text">Please Input Comment</FormHelperText>}
              </FormControl>
              <FormControl error={missingField && !action} sx={{ mb: 2, width: '30%'}}>
                <InputLabel>Action Required</InputLabel >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={action}
                  label="Age"
                  onChange={handleChangeAction}
                  sx={{ mb: 2 }}
                >
                  {listOfAction.map((machine) => (
                    <MenuItem value={machine.value}>{machine.label}</MenuItem>
                  ))}
                </Select>
                {missingField && !action && <FormHelperText id="component-error-text">Please Input Comment</FormHelperText>}
              </FormControl>
              <FormControl  sx={{ mb: 3, width: '50%' }}>
                <TextField
                  error={missingField && !comment}
                  id="commentID"                 
                  value={comment}
                  label='Comment'
                  onInput={ e=>setComment(e.target.value)}
                  multiline
                  rows={4}
                />
                {missingField && !comment && <FormHelperText id="component-error-text">Please Input Comment</FormHelperText>}
              </FormControl>
              <Button variant="contained" sx={{ mb: 2, width: '150px', bgcolor: '#526CFE'}} type='submit'>Update</Button>
            </Box>
          </form>
        </Box>

      </>
    )
  }
  
  export default AlertContent