import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.tsx'
import About from './pages/about/about.tsx'
import Contact from './pages/contact/contact.tsx'
import ArabicCourses from './pages/arabicCourses/arabicCourses.tsx';
import ArabiTalk from './pages/arabicCourses/arabiTalk.tsx';
import English from './pages/foreignCourses/english.tsx'
import Spanish from './pages/foreignCourses/spanish.tsx'
import German from './pages/foreignCourses/german.tsx'
import French from './pages/foreignCourses/french.tsx'
import ArabicKids from './pages/arabicCourses/arabicKids.tsx';
import ModernME from './pages/history/modernME.tsx';
import OldME from './pages/history/oldME.tsx';
import PalestineHistory from './pages/history/palestineHistory.tsx';
import PeopleOfME from './pages/history/peopleME';
import IntensiveProgram from './pages/arabicCourses/intensiveProgram.tsx';
import Calculator from './pages/calculator/calculator.tsx';
import Visa from './pages/accommodations/visa.tsx';
import Trips from './pages/accommodations/trips.tsx';
import Publications from './layout/booksLayout/publications.tsx';
import PublicationInfo from './pages/books/publicationinfo.tsx';
import CultureEvents from './pages/cultureEvents/cultureEvents.tsx';
import WishList from './context/wishlist.tsx';
function App() {
    return (
        <Router>
            <Routes>
                {/* Standard Pages */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                {/* Arabic Courses */}
                <Route path="/arabic-courses" element={<ArabicCourses />} />
                <Route path="/arabic-courses/arabi-talk" element={<ArabiTalk />} />
                <Route path="/arabic-courses/arabic-for-kids" element={<ArabicKids />} />
                <Route path="/arabic-courses/intensive-program" element={<IntensiveProgram />} />
                {/* History Pages */}
                <Route path="/middle-eastern-studies/modern-history-of-the-middle-east" element={<ModernME />} />
                <Route path="/middle-eastern-studies/history-of-the-middle-east" element={<OldME />} />
                <Route path="/middle-eastern-studies/the-zionist-project-in-palestine" element={<PalestineHistory />} />
                <Route path="/middle-eastern-studies/people-of-the-middle-east" element={<PeopleOfME />} />
                {/* Books */}
                <Route path="/publications"element={<Publications />} />
                <Route path="/publications/book/:id" element={<PublicationInfo />} />
                <Route path="/publications/podcast/:id" element={<PublicationInfo />} />

                {/* Accommodation Pages */}
                <Route path="/accommodation-and-student-services/visa" element={<Visa />} />
                <Route path="/accommodation-and-student-services/trips" element={<Trips />} />
                {/* Foreign Courses */}
                <Route path="/foreign-languages/english-course" element={<English />} />
                <Route path="/foreign-languages/spanish-course" element={<Spanish />} />
                <Route path="/foreign-languages/german-course" element={<German />} />
                <Route path="/foreign-languages/french-course" element={<French />} />
                {/* Calculator */}
                <Route path="/calculator" element={<Calculator />} />
                {/* Culture Events */}
                <Route path="/cultureEvents" element={<CultureEvents />} />
                {/* WishList */}
                <Route path="/wishlist" element={<WishList />} />
            </Routes>
        </Router>
    );
}

export default App;