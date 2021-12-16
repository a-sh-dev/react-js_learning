// import { useRef } from 'react';
import FormInput from 'components/FormInput';
import './App.css';

function App() {
  // const [username, setUsername] = useState('');
  // const usernameRef = useRef();
  console.log('re-rendered');

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(usernameRef);
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {/* <FormInput name="" refer={usernameRef} placeholder="Username" /> */}
        <FormInput name="username" placeholder="Username" />
        <FormInput name="email" placeholder="Email" />
        <FormInput name="firstName" placeholder="First Name" />
        <FormInput name="lastName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
