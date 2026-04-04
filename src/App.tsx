import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import CursorGlow from './components/CursorGlow';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import Team from './pages/Team';
import Sponsors from './pages/Sponsors';
import ProblemStatements from './pages/ProblemStatements';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollProgress />
      <CursorGlow />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/details" element={<EventDetails />} />
              <Route path="/team" element={<Team />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/problems" element={<ProblemStatements />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
      <BackToTop />
    </Router>
  );
}
