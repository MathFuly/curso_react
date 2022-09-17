import './App.css';

// 1 - config react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';

import NotFound from './pages/NotFound';


// components
import Navbar from './components/Navbar';





function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2- Links com react router */}
        <Navbar />
        {/* 9 - search */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          {/* 4 - rota dinamica */}
          {/* 10 - redirect */}
          <Route path='/company' element={<Navigate to={"/about"}/>} />
          {/* 7 -no match route */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
