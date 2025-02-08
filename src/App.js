import logo from './logo.svg';

import './App.css';
import Player from './components/Player';


function App() {
  return (
    <div className="App">
      <header >
        <img src="game-logo.png"  alt="logo" />
        <h1>Tic-Tac-Toe</h1>
      </header>
      <main>
        <div className="game-container">

          <ol>
            <Player name="kirat" symbol="X"/>
            <Player name="Amarinder" symbol="O"/>

          </ol>
        </div>
      </main>
    </div>
  );
}

export default App;
