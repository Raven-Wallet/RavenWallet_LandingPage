import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Hero from './components/Hero'
import Revolution from './components/Revolution'
import Features from './components/Features'
import AppShowcase from './components/AppShowcase'
import Footer from './components/Footer'
import KairosNavbar from './components/Navbar'
import Apputil from './components/apputil'
function App() {

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/contact" element={<Hero />} />
          <Route path="/contact" element={<Revolution />} />
          <Route path="/contact" element={<Features />} />
          <Route path="/contact" element={<AppShowcase />} />
          <Route path="/contact" element={<Footer />} />
        </Routes>
      </BrowserRouter> */}

      <KairosNavbar />
      <Hero />
      <Apputil/>
      <Revolution />
      <Features />
      <AppShowcase />
      <Footer />
    </>
  )
}

export default App
