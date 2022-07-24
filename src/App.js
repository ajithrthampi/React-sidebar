import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Application from './pages/Application.jsx';
import Record from './pages/Record.jsx';
import Analytics from './pages/Booking.jsx';
import Booking from './pages/Booking';
import Product from './pages/Product.jsx';
import ProductList from './pages/ProductList.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/dash" element={<Application/>} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/record" element={<Record />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;