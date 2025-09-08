// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

// Layout Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import EnquiryPage from "./pages/EnquiryPage";

// Service Pages
import RoboticAutomationPage from "./pages/RoboticAutomationPage";
import PlasmaWeldingPage from "./pages/PlasmaWeldingPage";
import WeldingRotatorPage from "./pages/WeldingRotatorPage";
import PullThroughWeldingPage from "./pages/PullThroughWeldingPage";
import MIGWeldingPage from "./pages/MIGWeldingPage";
import TIGWeldingPage from "./pages/TIGWeldingPage";
import SAWWeldingPage from "./pages/SAWWeldingPage";
import ColumnAndBoomPage from "./pages/ColumnAndBoomPage";
import PortWeldingPage from "./pages/PortWeldingPage";
import HeadTailstockPage from "./pages/HeadTailstockPage";
import HydraulicEndCapPage from "./pages/HydraulicEndCapPage";
import WeldingPositionersPage from "./pages/WeldingPositionersPage";
import LTypePositionerPage from "./pages/LTypePositionerPage";
import ScissorRollersPage from "./pages/ScissorRollersPage";
import WeldingTurnTablePage from "./pages/WeldingTurnTablePage";
import TorchWeavingUnitPage from "./pages/TorchWeavingUnitPage";
import PlasmaCNCCuttingPage from "./pages/PlasmaCNCCuttingPage";
import AVCUnitPage from "./pages/AVCUnitPage";
import LaserSeamTrackingUnitPage from "./pages/LaserSeamTrackingUnitPage";
import WeldingTorchPage from "./pages/WeldingTorchPage";
import CrossSlidesPage from "./pages/CrossSlidesPage";

// Temporary Services Placeholder
const ServicesPage = () => (
  <div className="container mx-auto py-10 text-center">
    <h1 className="text-3xl font-bold">Our Services Page</h1>
  </div>
);

// ✅ ScrollToTop AFTER new page is mounted
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Delay to wait until new page fully replaces old one
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ScrollToTop />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Home with Hero */}
            <Route path="/" element={<><HeroSection /><HomePage /></>} />

            {/* Static Pages */}
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/enquiry" element={<EnquiryPage />} />

            {/* Services Pages */}
            <Route path="/services/robotic-automation" element={<RoboticAutomationPage />} />
            <Route path="/services/welding-rotator" element={<WeldingRotatorPage />} />
            <Route path="/services/welding-positioners" element={<WeldingPositionersPage />} />
            <Route path="/services/pull-through-welding" element={<PullThroughWeldingPage />} />
            <Route path="/services/l-type-positioner" element={<LTypePositionerPage />} />
            <Route path="/services/plasma-transferred-arc-welding" element={<PlasmaWeldingPage />} />
            <Route path="/robotic-automation" element={<RoboticAutomationPage />} />
            <Route path="/plasma-welding" element={<PlasmaWeldingPage />} />
            <Route path="/welding-rotator" element={<WeldingRotatorPage />} />
            <Route path="/pull-through-welding" element={<PullThroughWeldingPage />} />
            <Route path="/mig-welding" element={<MIGWeldingPage />} />
            <Route path="/tig-welding" element={<TIGWeldingPage />} />
            <Route path="/saw-welding" element={<SAWWeldingPage />} />
            <Route path="/column-and-boom" element={<ColumnAndBoomPage />} />
            <Route path="/port-welding" element={<PortWeldingPage />} />
            <Route path="/head-tailstock" element={<HeadTailstockPage />} />
            <Route path="/hydraulic-end-cap" element={<HydraulicEndCapPage />} />
            <Route path="/welding-positioners" element={<WeldingPositionersPage />} />
            <Route path="/l-type-positioner" element={<LTypePositionerPage />} />
            <Route path="/scissor-rollers" element={<ScissorRollersPage />} />
            <Route path="/welding-turntable" element={<WeldingTurnTablePage />} />
            <Route path="/plasma-cnc-cutting" element={<PlasmaCNCCuttingPage />} />
            <Route path="/torch-weaving-unit" element={<TorchWeavingUnitPage />} />
            <Route path="/avc-unit" element={<AVCUnitPage />} />
            <Route path="/laser-seam-tracking-unit" element={<LaserSeamTrackingUnitPage />} />
            <Route path="/welding-torch" element={<WeldingTorchPage />} />
            <Route path="/cross-slides" element={<CrossSlidesPage />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
