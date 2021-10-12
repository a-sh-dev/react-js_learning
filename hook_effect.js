// ! Comparison b/w class components & hook useEffect

// * CLASS
class ClassExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Nathan'
    }
  }

  componentDidMount() {
    console.log(`didMount triggered: Hello I'm ${this.state.name}`);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`didUpdate triggered: Hello I'm ${this.state.name}`);
  }

  render() {
    return (
      <div>
        <p>{`Hello I'm ${this.state.name}`}</p>
        <button
          onClick={() => {
            this.setState({ name: 'Bobolita' })
          }}
        >
          Click & Change Me
        </button>
      </div>
    );
  }
}

// * Functional Component
const FunctExample = props => {
  const [name, setName] = useState('Nathan');

  // ! The second argument is referred as dependecy
  useEffect(() => {
    console.log(`Hello I'm ${name}`);

    // * Executing ComponentWillUnmount -> clean-up
    return () => { 
      console.log('componentWillUnmount effect...'); 
    }

  }, [name]);

  return (
    <div>
      <p>{`Hello I'm ${name}`}</p>
      <button
        onClick={() => {
          setName('Bobolita')
        }}
      >
        Click & Change Me
      </button>
    </div>
  )
}