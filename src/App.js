import Gameboard from './components/Gameboard';
import Player from './components/Player';


function App() {
  return (
    <div className="App">
      <header >
        <img src="game-logo.png"  alt="logo" />
        <h1>Tic-Tac-Toe</h1>
      </header>
      <main>
        <div id="game-container">

          <ol id="players">
            <Player  name="kirat" symbol="X"/>
            <Player name="Amarinder" symbol="O"/>

          </ol>
          <Gameboard/>
        </div>
        
      </main>
    </div>
  );
}

export default App;

