import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles, Nav, Footer, ScrollTop } from "./components/shared";
import Home from "./pages/Home";
import CorporatePage from "./pages/CorporatePage";
import FundsPage from "./pages/FundsPage";
import PlatformPage from "./pages/PlatformPage";
import WhyAsiaPage from "./pages/WhyAsiaPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import ArticlePage from "./pages/ArticlePage";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ScrollTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/corporate" element={<CorporatePage />} />
          <Route path="/funds" element={<FundsPage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/why-asia" element={<WhyAsiaPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<ArticlePage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
