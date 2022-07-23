import { Box, Container, Grid, Paper, Toolbar } from '@mui/material';

const PageWrapper = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: '#F8F8FF',
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Grid container spacing={2} p={2}>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default PageWrapper