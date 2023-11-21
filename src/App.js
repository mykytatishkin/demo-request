import logo from './logo.svg';
import './App.css';
import Client from './Components/Client';

const url = "http://localhost:5221/api/books";

function App() {
  return (
    <div className="App">
      <Client url={url}/>
    </div>
  );
}

export default App;
