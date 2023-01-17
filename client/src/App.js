import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import { Routes, Route } from 'react-router-dom';
import Edit from './components/Edit';
import Details from './components/Details';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/edit/:id' element={<Edit />} />
      <Route path='/view/:id' element={<Details />} />
    </Routes>
    </>
  );
}

export default App;

// https://docs.google.com/document/d/14B_WKuFgSbkmP1q2sDlT04LHxqaVxOeGCe8LChMPQbI/edit?usp=sharing
// https://cloud.mongodb.com/v2/63c5388e2eef596365dc55de#/metrics/replicaSet/63c538e9e4b5c13b6955111e/explorer/test/students/find