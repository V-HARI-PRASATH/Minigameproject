// logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import Game from './pages/game';
import Diff from './pages/diff';
import Rule from './pages/rule';
import Lose from './pages/lose';
import Win from './pages/win';
import Choose from './pages/main';
import XOgame from './pages/xo';
import GridGame from './pages/maze';


function App() {
  return (
    <>
    <Routes>
      <Route path='/main' element={<Choose/>}></Route>
      <Route path='/xo' element={<XOgame/>}></Route>
      <Route path='/' element={<Home/>}/>
      <Route path='/game' element={<Game/>}></Route>
      <Route path='/diff' element={<Diff/>}/>
      <Route path='/rule' element={<Rule/>}/>
      <Route path='/lose' element={<Lose/>}/>
      <Route path='/win' element={<Win/>}/>
      <Route path='/maze' element={<GridGame/>}/>

    </Routes>
    </>
  );
}

export default App;