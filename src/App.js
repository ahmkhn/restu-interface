import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Dropdown } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">

  <div class="ui compact menu">
    <div class="ui simple dropdown item">
      Dropdown
      <i class="dropdown icon"></i>
      <div class="menu">
        <div class="item">Choice 1</div>
        <div class="item">Choice 2</div>
        <div class="item">Choice 3</div>
      </div>
    </div>
  </div>
      </header>
    </div>
  );
}

export default App;
