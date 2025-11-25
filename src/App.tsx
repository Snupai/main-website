import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Background from './components/Background/Background'
import BuyMeCoffee from './components/BuyMeCoffee/BuyMeCoffee'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/FooterTW'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Home from './pages/Home'
import Features from './pages/Features'
import CreatorTools from './pages/CreatorTools'
import Donate from './pages/Donate'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Background />
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/creator-tools" element={<CreatorTools />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
      <BuyMeCoffee />
    </BrowserRouter>
  )
}
