import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} >
          <Route path="/" element={<Shop />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
