
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import Footer from './Component/Shared/Footer/Footer';
import Header from './Component/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
