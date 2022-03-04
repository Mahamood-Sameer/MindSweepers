import './App.css';
import Rules from './Components/Rules';
import Game from './Components/Game';
import Game2 from './Components/Game2';
import Home from './Components/Home';
import Rules2 from './Components/Rules2';
import Rules3 from './Components/Rules3';
import Game3 from './Components/Game3';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rules' element={<Rules />} />
        <Route path='/game1' element={<Game2 />} />
        <Route path='/rules2' element={<Rules2 />} />
        <Route path='/game2' element={<Game />} />
        <Route path='/rules3' element={<Rules3 />} />
        <Route path='/game3' element={<Game3 />} />
      </Routes>
    </div>
  );
}

export default App;
