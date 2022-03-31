import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './components/Shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Order from './components/Order/Order';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/home' element={<Shop/>}/>
        <Route path='/order' element={<Order/>}/>
      </Routes>
    </div>
  );
}

export default App;
