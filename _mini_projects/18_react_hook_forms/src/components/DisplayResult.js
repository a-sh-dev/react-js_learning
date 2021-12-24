import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const DisplayResult = ({ result }) => {
  return (
    <Paper sx={{ p: '1rem' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Form Result
      </Typography>
      <code>{result}</code>
    </Paper>
  );
};

export default DisplayResult;
