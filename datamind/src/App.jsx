import {
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Blog from "./pages/Blogs";
import Article from "./pages/Article";
import Category from "./pages/Category";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/Notfound";

export default function App() {
  return (
    <div className="site">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/blog/"
          element={<Blog />}
        />

        <Route
          path="/blog/article/:slug/"
          element={<Article />}
        />

        <Route
          path="/blog/topic/:slug/"
          element={<Category />}
        />

        <Route
          path="/about/"
          element={<About />}
        />

        <Route
          path="/contact/"
          element={<Contact />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>

      <Footer />
    </div>
  );
}