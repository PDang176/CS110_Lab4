//import logo from './logo.svg';
import './App.css';

function App() {
  var myStyle = {
    fontSize: 100,
    color: '#FF0000'
  }
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <h1>Header</h1>
      <h2>Content</h2>
      <p>This is the content!!!</p>
      <h3>{25/5}</h3>
      
      <h1 style={myStyle}>Something</h1>
    </div>
  );
}

export default App;
