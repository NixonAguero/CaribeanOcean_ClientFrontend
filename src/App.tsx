import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './features/home/HomePage';
import { Booking } from './features/booking/components/Booking';
import AboutUs from './features/about-us/components/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;