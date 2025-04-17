import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const HomePage = lazy(() => import("./pages/index"));
const ServicesPage = lazy(() => import("./pages/services"));
const AboutPage = lazy(() => import("./pages/about"));
const ContactPage = lazy(() => import("./pages/contact"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const callMessages = [
  "Experienced Drivers",
  "Affordable Prices",
  "24/7 Customer Support",
  "Quick Booking",
  "Safe & Secure",
];

function App() {
  const darkBlue = "#0b2341"; // Use your footer's dark blue here
  const [msgIdx, setMsgIdx] = useState(0);
  const [showMsg, setShowMsg] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setShowMsg(false);
      setTimeout(() => {
        setMsgIdx((idx) => (idx + 1) % callMessages.length);
        setShowMsg(true);
      }, 500); // match exit animation duration
    }, 2700);
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [msgIdx]);

  return (
    <>
      {/* Pulse animation for floating call button, ringing phone icon, and message bubble */}
      <style>{`
        @keyframes callPulse {
          0% { box-shadow: 0 0 0 0 rgba(11, 35, 65, 0.4); }
          70% { box-shadow: 0 0 0 16px rgba(11, 35, 65, 0); }
          100% { box-shadow: 0 0 0 0 rgba(11, 35, 65, 0); }
        }
        .floating-call-btn {
          animation: callPulse 1.8s infinite;
        }
        @keyframes phoneRing {
          0% { transform: rotate(0deg); }
          15% { transform: rotate(-18deg); }
          30% { transform: rotate(18deg); }
          45% { transform: rotate(-12deg); }
          60% { transform: rotate(12deg); }
          75% { transform: rotate(-6deg); }
          85% { transform: rotate(6deg); }
          100% { transform: rotate(0deg); }
        }
        .call-btn-icon {
          display: block;
          animation: phoneRing 1.5s infinite cubic-bezier(.36,.07,.19,.97);
          transform-origin: 50% 80%;
        }
        .call-btn-bubble {
          position: absolute;
          left: -10px;
          right: auto;
          bottom: 70px;
          background: rgba(20,30,50,0.97);
          color: #fff;
          font-size: 1rem;
          font-weight: 700;
          border-radius: 13px 13px 13px 13px;
          padding: 10px 12px;
          box-shadow: 0 2px 16px rgba(11,35,65,0.18), 0 0 0 1.5px #223a5e;
          min-width: 190px;
          max-width: 250px;
          max-width: 90vw;
          word-break: break-word;
          pointer-events: none;
          opacity: 0;
          transform: translateX(-100%) translateY(12px) scale(0.97);
          transition: opacity 0.5s, transform 0.5s;
          z-index: 1010;
          display: flex;
          align-items: center;
          letter-spacing: 0.01em;
        }
        .call-btn-bubble.show {
          opacity: 1;
          transform: translateX(-80%) translateY(0) scale(1);
        }
        .call-btn-bubble:after {
          content: '';
          position: absolute;
          
          left: 90%;
          right: auto;
          bottom: -14px;
          transform: translateX(-50%) rotate(90deg);
          border-top: none;
          border-left: 13px solid rgba(20,30,50,0.97);
          border-bottom: 8px solid transparent;
          border-right: 13px solid transparent;
          width: 0;
          height: 0;
        }
        @media (max-width: 600px) {
          .call-btn-bubble {
            font-size: 0.93rem;
            padding: 10px 12px;
          }
        }
      `}</style>
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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      {/* Stylish Floating Phone Call Button with animated phone icon and message bubble */}
      <div style={{ position: "fixed", right: 20, bottom: 20, zIndex: 1000 }}>
        <div className={`call-btn-bubble${showMsg ? " show" : ""}`}>{callMessages[msgIdx]}</div>
        <a
          href="tel:+1234567890"
          className="floating-call-btn"
          title="Call Now"
          style={{
            background: darkBlue,
            borderRadius: "50%",
            width: 60,
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            textDecoration: "none",
            transition: "background 0.2s, box-shadow 0.2s, transform 0.2s",
            border: "2.5px solid #fff",
            boxShadow: "0 2px 8px rgba(11, 35, 65, 0.16)",
            position: "relative",
          }}
          onMouseOver={e => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#091a2b";
            (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.07)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 24px rgba(11, 35, 65, 0.28)";
          }}
          onMouseOut={e => {
            (e.currentTarget as HTMLAnchorElement).style.background = darkBlue;
            (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 2px 8px rgba(11, 35, 65, 0.16)";
          }}
        >
          {/* Inline SVG phone icon with ringing animation */}
          <svg className="call-btn-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13 1.09.36 2.16.7 3.18a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.02.34 2.09.57 3.18.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>
      </div>
    </>
  );
}

export default App;
