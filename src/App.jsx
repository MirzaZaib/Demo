import { HashRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import GamingLaptops from './pages/GamingLaptops';
import CreatorWorkstations from './pages/CreatorWorkstations';
import Accessories from './pages/Accessories';
import Refurbished from './pages/Refurbished';
import Contact from './pages/Contact';
import Warranty from './pages/Warranty';
import Returns from './pages/Returns';
import Shipping from './pages/Shipping';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <AppProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="gaming" element={<GamingLaptops />} />
            <Route path="creator" element={<CreatorWorkstations />} />
            <Route path="accessories" element={<Accessories />} />
            <Route path="refurbished" element={<Refurbished />} />
            <Route path="contact" element={<Contact />} />
            <Route path="warranty" element={<Warranty />} />
            <Route path="returns" element={<Returns />} />
            <Route path="shipping" element={<Shipping />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </AppProvider>
  );
};

export default App;
