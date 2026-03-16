import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.tsx'
import About from './pages/about/about.tsx'
import Contact from './pages/contact/contact.tsx'
import English from './pages/foreign/english.tsx'
import Spanish from './pages/foreign/spanish.tsx'
import German from './pages/foreign/german.tsx'
import French from './pages/foreign/french.tsx'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/foreign-languages/english-course" element={<English />} />
                <Route path="/foreign-languages/spanish-course" element={<Spanish />} />
                <Route path="/foreign-languages/german-course" element={<German />} />
                <Route path="/foreign-languages/french-course" element={<French />} />
            </Routes>
        </Router>
    );
}

export default App;