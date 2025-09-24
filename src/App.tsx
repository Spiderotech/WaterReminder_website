import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import SimpleHeader from "./components/SimpleHeader";
import Footer from "./components/Footer";
import Home from "./components/Home";
import FAQSection from "./components/Faq";
import DownloadSection from "./components/DownloadSection";
import Features from "./components/Features";
import FeaturesSection from "./components/Fsection";
import AboutSection from "./components/AboutSection";
import BlogSection from "./components/Blogs";
import ContactUsSection from "./components/ContactUsSection";
import DownloadAppSection from "./components/DownloadAppSection";

// Pages
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsOfService";

// Wrapper to decide which header to show
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isLegalPage =
    location.pathname === "/privacy-policy" ||
    location.pathname === "/terms-and-conditions";

  return (
    <>
      {isLegalPage ? <SimpleHeader /> : <Header />}
      {children}
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="font-sans text-gray-800">
        <Layout>
          <Routes>
            {/* Home */}
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Features />
                  <FeaturesSection />
                  <AboutSection />
                  <DownloadSection />
                  <FAQSection />
                  <ContactUsSection />
                  <BlogSection />
                  <DownloadAppSection />
                </>
              }
            />

            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
