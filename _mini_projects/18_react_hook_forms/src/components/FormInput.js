// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const FormInput = (props) => {
  const { id, name, label, ...inputProps } = props;
  return (
    <>
      <TextField
        {...inputProps}
        id={id}
        name={name}
        label={label || `Text Label`}
        fullWidth
        margin="dense"
        variant="standard"
        size="small"
        color="secondary"
      />
    </>
  );
};

export default FormInput;
