import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required('Firstname is required'),
  lastname: Yup.string().required('Lastname is required'),
  username: Yup.string()
    .required('Username is required')
    .min(6, 'Username must be at least 6 characters')
    .max(12, 'Username must not exceed 12 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email input'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password must not exceed 20 characters'),
  confirmPassword: Yup.string()
    .required('Please confirm password')
    .oneOf([Yup.ref('password'), null], 'Password confirmation does not match'),
  acceptTerms: Yup.bool().oneOf([true], 'To proceed, please accept terms'),
});

export default validationSchema;
