import React, { useRef, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";
import {Box, Typography, FormControl, Select, InputLabel, MenuItem, TextField, Button, Divider} from '@mui/material';

export default function Spectogram(props){
  const waveformRef = useRef();
  // const waveformRef2 = useRef();

  useEffect(() => {
      const wavesurfer = WaveSurfer.create({
        container: waveformRef.current,
      });
      // wavesurfer.on('ready', function () {
      //   var spectrogram = Object.create(WaveSurfer.Spectrogram);
      //   spectrogram.init({
      //     wavesurfer: wavesurfer,
      //     container: waveformRef2,
      //     fftSamples: 1024,
      //     labels: true
      //   });
      // });
      wavesurfer.load(`/wav/${props.path}`);
  }, [props.path]);
  
  return(
    <Box sx={{ mt: 2 }}>
      <div ref={waveformRef}>
      </div>
      {/* <div ref={waveformRef2}>
      </div> */}
      {/* <button class="btn btn-primary" onclick={() => WaveSurfer.playPause()}>
        <i class="glyphicon glyphicon-play"></i>
        Play/Pause
      </button> */}
    </Box>
  )
 }