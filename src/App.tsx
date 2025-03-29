import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const HomePage = lazy(() => import("./pages/index"));
const ServicesPage = lazy(() => import("./pages/services"));
const ContactPage = lazy(() => import("./pages/contact"));
const AboutPage = lazy(() => import("./pages/about"));

function App() {
  // Get the base URL from the environment or default to /HireDriver/ for GitHub Pages
  const basename = process.env.NODE_ENV === "development" ? "/" : "/HireDriver";

  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-full items-center justify-center">
          <p>Loading...</p>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/booking" element={<Navigate to="/contact" />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}

export default App;
