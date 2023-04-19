import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>Benifits of using react ...</h1>
       <ol>
        <li>Component based architecture</li>
        <li>Virtual DOM for efficient updates</li>
        <li>Rich ecosystem and community</li>
        <li>Cross platform development</li>
        <li>strong community support</li>
       </ol>

       <button>Get Stareted...</button>
      </header>
    </div>
  );
}

export default App;
