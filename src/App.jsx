import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const Blogs = lazy(() => import('./pages/Blogs'));

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-ink">
    <div className="loading-spinner" />
  </div>
);
function App() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-ink">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/group" element={<Home />} />
              <Route path="/companies" element={<Home />} />
              <Route path="/companies/:slug" element={<Home />} />
              <Route path="/operations" element={<Home />} />
              <Route path="/insights" element={<Home />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
export default App;
