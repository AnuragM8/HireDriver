import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const HomePage = lazy(() => import("./pages/index"));
const ServicesPage = lazy(() => import("./pages/services"));
const ContactPage = lazy(() => import("./pages/contact"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-full items-center justify-center">
          <p>Loading...</p>
        </div>
      }
    >
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<Navigate to="/" />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/booking" element={<Navigate to="/contact" />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
