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
import Gallery from './pages/Gallery'
import Team from './pages/Team'
import DownloadPage from './pages/Download'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Background />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/creator-tools" element={<CreatorTools />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <BuyMeCoffee />
    </BrowserRouter>
  )
}
