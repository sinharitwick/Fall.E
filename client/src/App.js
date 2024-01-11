import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='shop' element={<Shop />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
