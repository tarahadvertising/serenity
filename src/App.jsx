import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-ink">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/group" element={<Home />} />
            <Route path="/companies" element={<Home />} />
            <Route path="/companies/:slug" element={<Home />} />
            <Route path="/operations" element={<Home />} />
            <Route path="/insights" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
