import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import DisplayResult from './components/DisplayResult';
import validationSchema from './config/schema';

// MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function App() {
  const [result, setResult] = useState('');

  // Import RHF components and pass validationSchema
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data) => {
    setResult(JSON.stringify(data, null, 2));
  };

  return (
    <div className="wrapper">
      <Typography variant="h2" sx={{ pb: 3 }}>
        📝&nbsp; React Hook Form
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <form autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <Paper sx={{ p: '1rem' }}>
                {/* MAIN FORM */}

                <Stack direction="row" spacing={2}>
                  <Box xs={12} md={6} sx={{ flexGrow: 1 }}>
                    <TextField
                      fullWidth
                      margin="dense"
                      variant="standard"
                      size="small"
                      color="secondary"
                      label="First Name"
                      id="firstname"
                      name="firstname"
                      required
                      {...register('firstname')}
                      error={errors.firstname ? true : false}
                    />
                    <Typography variant="inherit" color="textSecondary">
                      {errors.firstname?.message}
                    </Typography>
                  </Box>

                  <Box xs={12} md={6} sx={{ flexGrow: 1 }}>
                    <TextField
                      fullWidth
                      margin="dense"
                      variant="standard"
                      size="small"
                      color="secondary"
                      label="Last Name"
                      id="lastname"
                      name="lastname"
                      required
                      {...register('lastname')}
                      error={errors.lastname ? true : false}
                    />
                    <Typography variant="inherit" color="textSecondary">
                      {errors.lastname?.message}
                    </Typography>
                  </Box>
                </Stack>

                <TextField
                  fullWidth
                  margin="dense"
                  variant="standard"
                  size="small"
                  color="secondary"
                  label="Username"
                  id="username"
                  name="username"
                  required
                  {...register('username')}
                  error={errors.username ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.username?.message}
                </Typography>

                <TextField
                  fullWidth
                  margin="dense"
                  variant="standard"
                  size="small"
                  color="secondary"
                  label="Email Address"
                  id="email"
                  name="email"
                  required
                  {...register('email')}
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.email?.message}
                </Typography>

                <TextField
                  fullWidth
                  margin="dense"
                  variant="standard"
                  size="small"
                  color="secondary"
                  label="Password"
                  id="password"
                  name="password"
                  type="password"
                  helperText="Password must be 6 - 20 characters"
                  required
                  {...register('password')}
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.password?.message}
                </Typography>

                <TextField
                  fullWidth
                  margin="dense"
                  variant="standard"
                  size="small"
                  color="secondary"
                  label="Confirm Password"
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  {...register('confirmPassword')}
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.confirmPassword?.message}
                </Typography>

                <FormControlLabel
                  control={
                    <Controller
                      control={control}
                      name="acceptTerms"
                      defaultValue="false"
                      inputRef={register()}
                      render={({ field: { onChange } }) => (
                        <Checkbox
                          color="secondary"
                          onChange={(e) => onChange(e.target.checked)}
                        />
                      )}
                    />
                  }
                  label={
                    <Typography
                      color={errors.acceptTerms ? 'error' : 'inherit'}
                    >
                      I have read and agree to the terms*
                    </Typography>
                  }
                />
                <br />
                <Typography>
                  {errors.acceptTerms ? `(${errors.acceptTerms.message})` : ''}
                </Typography>

                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  onClick={handleSubmit(onSubmit)}
                  sx={{ mt: 3, px: 5 }}
                >
                  Register
                </Button>
              </Paper>
            </Grid>

            <Grid item xs={12} md={5}>
              {result && <DisplayResult result={result} />}
            </Grid>
          </Grid>
        </form>
      </Box>
    </div>
  );
}

export default App;
