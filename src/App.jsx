import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import CryptoDetail from './page/CryptoDetail';
import CryptoHome from './page/CryptoHome';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CryptoHome />} />
        <Route path="/coin/:id" element={<CryptoDetail />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
