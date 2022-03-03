import './App.css';
import Rules from './Components/Rules';
import Game from './Components/Game';
import Game2 from './Components/Game2';
import Home from './Components/Home';
import Rules2 from './Components/Rules2';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game1' element={<Game2 />} />
        <Route path='/rules' element={<Rules />} />
        <Route path='/rules2' element={<Rules2 />} />
        <Route path='/game2' element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
