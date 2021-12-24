import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import MainForm from './components/MainForm';
import validationSchema from './config/schema';

function App() {
  // Import RHF components and pass validationSchema
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  return (
    <div className="wrapper">
      <h1>Hello, World!</h1>
      <MainForm />
    </div>
  );
}

export default App;
