import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.tsx";
import About from "./pages/about/about.tsx";
import Contact from "./pages/contact/contact.tsx";
import ArabicCourses from "./pages/arabiccourses/arabicCourses.tsx";
import ArabiTalk from "./pages/arabiccourses/arabiTalk.tsx";
import English from "./pages/foreigncourses/english.tsx";
import Spanish from "./pages/foreigncourses/spanish.tsx";
import German from "./pages/foreigncourses/german.tsx";
import French from "./pages/foreigncourses/french.tsx";
import ArabicKids from "./pages/arabiccourses/arabicKids.tsx";
import ModernME from "./pages/history/modernME.tsx";
import OldME from "./pages/history/oldME.tsx";
import PalestineHistory from "./pages/history/palestineHistory.tsx";
import PeopleOfME from "./pages/history/peopleME";
import IntensiveProgram from "./pages/arabiccourses/intensiveProgram.tsx";
import Calculator from "./pages/calculator/calculator.tsx";
import Visa from "./pages/accommodations/visa.tsx";
import Trips from "./pages/accommodations/trips.tsx";
import Publications from "./pages/books/publications.tsx";
import PublicationInfo from "./pages/books/publicationinfo.tsx";
import CultureEvents from "./pages/cultureevents/cultureEvents.tsx";
import WishList from "./context/wishlist.tsx";
import Cart from "./context/cart.tsx";
import Checkout from "./context/checkout.tsx";
import Podcasts from "./pages/podcasts/podcasts.tsx";
import BildungsurlaubPage from "./pages/bildungsurlaub/bildungsurlaub.tsx";
import NotFound from "./pages/404_page/error.tsx";
import Careers from "./pages/careers/careers.tsx";

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
        <Route
          path="/arabic-courses/arabic-for-kids"
          element={<ArabicKids />}
        />
        <Route
          path="/arabic-courses/intensive-program"
          element={<IntensiveProgram />}
        />
        {/* History Pages */}
        <Route
          path="/middle-eastern-studies/modern-history-of-the-middle-east"
          element={<ModernME />}
        />
        <Route
          path="/middle-eastern-studies/history-of-the-middle-east"
          element={<OldME />}
        />
        <Route
          path="/middle-eastern-studies/the-zionist-project-in-palestine"
          element={<PalestineHistory />}
        />
        <Route
          path="/middle-eastern-studies/people-of-the-middle-east"
          element={<PeopleOfME />}
        />
        {/* Books */}
        <Route path="/publications" element={<Publications />} />
        <Route path="/publications/book/:id" element={<PublicationInfo />} />
        <Route path="/publications/podcast/:id" element={<PublicationInfo />} />
        {/* Accommodation Pages */}
        <Route
          path="/accommodation-and-student-services/visa"
          element={<Visa />}
        />
        <Route
          path="/accommodation-and-student-services/trips"
          element={<Trips />}
        />
        {/* Foreign Courses */}
        <Route path="/foreign-languages/english-course" element={<English />} />
        <Route path="/foreign-languages/spanish-course" element={<Spanish />} />
        <Route path="/foreign-languages/german-course" element={<German />} />
        <Route path="/foreign-languages/french-course" element={<French />} />
        {/* Calculator */}
        <Route path="/calculator" element={<Calculator />} />
        {/* Culture Events */}
        <Route path="/cultureEvents" element={<CultureEvents />} />
        {/* ShopContext */}
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* Podcasts */}
        <Route path="/podcasts" element={<Podcasts />} />
        {/*Bildungsurlaub*/}
        <Route path="/bildungsurlaub" element={<BildungsurlaubPage />} />
        {/*Careers*/}
        <Route path="/careers" element={<Careers />} />

        {/* ✅ 404 Route - must be last */}
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
