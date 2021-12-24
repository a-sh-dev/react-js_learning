import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormInput from './FormInput';

const MainForm = ({ register, errors }) => {
  return (
    <Paper sx={{ p: '1rem' }}>
      <FormInput
        label="First Name"
        id="firstname"
        name="firstname"
        required
        {...register('firstname')}
        error={errors.firstname ? true : false}
        errMsg={errors.firstname?.message}
      />
    </Paper>
  );
};

export default MainForm;
