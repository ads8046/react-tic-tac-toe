// This is a basic React starter code for a fresh project.
import './styles.css';
import Board from './components/Board';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="game-header">Tic-Tac-Toe</h1>
        <Board/>
      </header>
    </div>
  );
}

export default App;
