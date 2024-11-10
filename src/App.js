import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/NavbarComponents";
import Sidebar from "./components/Sidebar";
import ButtonsPage from "./pages/ButtonsPage";
import FormsPage from "./pages/FormsPage";
import NavbarPage from "./pages/NavbarPage";
import ProgressIndicator from "./pages/ProgressIndicatorPage";
import Dropdown from "./pages/Dropdowns";
import FooterPage from "./pages/FooterPage";
import AlertsNotificationsPage from "./pages/AlertsNotificationsPage";
import { FaBars } from "react-icons/fa";
import ThreeDEffect from "./pages/ThreeDEffect"
import CoolBackgrounds from "./pages/CoolBackgrounds"
import ShootingStars from "./pages/ShootingStars"
import TestimonialPage from "./pages/TestimonialPage"
import FeaturePage from "./pages/FeaturePage"
import AnimatedGrid from "./pages/AnimatedGrid"
import TextGeneration from "./pages/TextGeneration"
import MovingBorder from "./pages/MovingBorder"
import InstallReact from "./components/InstallReact"
import InstallTailwind from "./components/InstallTailwind"
import TemplateComponent from "./components/TemplateComponent"
import ParticleAnimation from "./pages/ParticleAnimation"
import GlowingGradient from "./pages/GlowingGradient"
import CorouselsPage from "./pages/CorouselsPage"
import LabelsPage from "./pages/LabelsPage"
import PricingPage from "./components/PricingPage"
import TablePage from "./pages/TablePage"
import FloatingDockPage from "./pages/FloatingDockPage"
import HeroBackground from "./pages/HeroBackground"
import WaveBg from "./pages/WaveBg"
import WizardForm from "./pages/WizardForm"
import PagesComponent from "./components/PagesComponent"
import LandingPage from "./pages/LandingPage"
import LoginSignup from "./pages/LoginSignup"
import CollapseCard from "./pages/CollapseCard"


const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const showSidebar = location.pathname.startsWith('/components');

  return (
    <>
    <div className="min-h-screen">
      <Navbar className="fixed top-0 left-0 right-0 z-10" />
      <div className="flex pt-4">
        {showSidebar && (
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        )}
        <div className="flex-1 mt-8">
          {showSidebar && (
            <header className="lg:hidden">
              <div className="px-4 sm:px-6 mt-8 lg:px-8">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <FaBars className="h-6 w-6" />
                  <span className="sr-only">Open sidebar</span>
                </button>
              </div>
            </header>
          )}
          <main className="flex-1">
            <div className={`px-4 sm:px-6 lg:px-8 py-6 ${showSidebar ? 'lg:ml-64' : ''}`}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/templates" element={<TemplateComponent/>}/>
                <Route path="/pricing" element={<PricingPage/>}/>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/pages" element={<PagesComponent/>}/>
                <Route path="/pages/landing-page" element={<LandingPage/>}/>
                <Route path="/pages/login-signup" element={<LoginSignup/>}/>
                <Route path="/components/*" element={<ComponentsLayout />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </div>
    </>
  );
};

const ComponentsLayout = () => {
  const location = useLocation();
  const isComponentsRoot = location.pathname === "/components";

  return (
    <div className={`${isComponentsRoot ? '' : 'lg:ml-0'} transition-all duration-300`}>
      <Routes>
        <Route path="/buttons" element={<ButtonsPage />} />
        <Route path="/forms" element={<FormsPage />} />
        <Route path="/navbar" element={<NavbarPage />} />
        <Route path="/progress-indicator" element={<ProgressIndicator />} />
        <Route path="/lists-and-dropdowns" element={<Dropdown />} />
        <Route path="/footers" element={<FooterPage />} />
        <Route path="/alerts-and-notifications" element={<AlertsNotificationsPage />} />
        <Route path="threeD-cards" element={<ThreeDEffect/>}/>
        <Route path="/cool-backgrounds" element={<CoolBackgrounds/>}/>
        <Route path="/shooting-stars" element={<ShootingStars/>}/>
        <Route path="/testimonials" element={<TestimonialPage/>}/>
        <Route path="/feature-page" element={<FeaturePage/>}/>
        <Route path="/grid-items" element={<AnimatedGrid/>}/>
        <Route path="/text-generation-effect" element={<TextGeneration/>}/>
        <Route path="/moving-border-gradient" element={<MovingBorder/>}/>
        <Route path="/particle-animation" element={<ParticleAnimation/>}/>
        <Route path="/glowing-gradient-card" element={<GlowingGradient/>}/>
        <Route path="/sliders-and-carousels" element={<CorouselsPage/>}/>
        <Route path="/badges-and-labels" element={<LabelsPage/>}/>
        <Route path="/tables" element={<TablePage/>}/>
        <Route path="/floating-dock" element={<FloatingDockPage/>}/>
        <Route path="/hero-background" element={<HeroBackground/>}/>
        <Route path="/wavy-background" element={<WaveBg/>}/>
        <Route path="/wizard-form" element={<WizardForm/>}/>
        <Route path="collapse-card" element={<CollapseCard/>}/>
      </Routes>
      {isComponentsRoot && (
        <>
          <InstallReact />
          <InstallTailwind />
          </>
      )}
    </div>
  );
};

export default App;