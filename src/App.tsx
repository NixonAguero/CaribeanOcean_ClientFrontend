import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './features/home/HomePage';
import { Booking } from './features/booking/components/Booking';
import AboutUs from './features/about-us/components/AboutUs';
import Offers from './features/offers/components/Offers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;