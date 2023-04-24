import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect , useState} from 'react';


function App() {

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios.get('https://buymythingsbackend.onrender.com/')
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <text
            style={{
              color: 'red',
              fontSize: '20px',
              fontWeight: 'bold',
            }}
          >
            {data}
          </text>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
