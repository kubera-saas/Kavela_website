import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles, Nav, Footer, ScrollTop } from "./components/shared";
import Home from "./pages/Home";

const CorporatePage = lazy(() => import("./pages/CorporatePage"));
const FundsPage = lazy(() => import("./pages/FundsPage"));
const PlatformPage = lazy(() => import("./pages/PlatformPage"));
const WhyAsiaPage = lazy(() => import("./pages/WhyAsiaPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const ArticlePage = lazy(() => import("./pages/ArticlePage"));

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ScrollTop />
      <Nav />
      <main>
        <Suspense fallback={null}>
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
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
