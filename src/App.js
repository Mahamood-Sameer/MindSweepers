import './App.css';
import Rules from './Components/Rules';
import Game from './Components/Game';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Rules />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
