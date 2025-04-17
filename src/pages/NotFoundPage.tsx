import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  const waitTime = 4;
  const [seconds, setSeconds] = useState(waitTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 0.1) return 0;
        return +(prev - 0.1).toFixed(1);
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (seconds <= 0) {
      navigate("/", { replace: true });
    }
  }, [seconds, navigate]);

  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: undefined,
      overflow: "hidden",
      position: "relative"
    }}>
      {/* Animated Sun with Glow */}
      <div style={{ position: "absolute", top: 60, left: 80, zIndex: 1 }}>
        <div className="sun-glow">
          <div className="sun" />
        </div>
      </div>
      {/* Improved Animated Clouds */}
      <div className="cloud-svg cloud1" />
      <div className="cloud-svg cloud2" />
      <div className="cloud-svg cloud3" />
      {/* Cityscape Silhouette - now a real SVG skyline */}
      <div className="cityscape">
        <svg width="100vw" height="70" viewBox="0 0 1200 70" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100vw', height: 70, display: 'block' }}>
          <g opacity="0.18">
            <rect x="0" y="40" width="50" height="30" fill="#7b8ba8" />
            <rect x="60" y="30" width="32" height="40" fill="#8d9db6" />
            <rect x="100" y="20" width="24" height="50" fill="#b0b6c4" />
            <rect x="130" y="50" width="18" height="20" fill="#b0b6c4" />
            <rect x="160" y="35" width="30" height="35" fill="#7b8ba8" />
            <rect x="195" y="25" width="20" height="45" fill="#8d9db6" />
            <rect x="220" y="45" width="16" height="25" fill="#b0b6c4" />
            <rect x="240" y="38" width="28" height="32" fill="#7b8ba8" />
            <rect x="275" y="20" width="18" height="50" fill="#b0b6c4" />
            <rect x="300" y="35" width="34" height="35" fill="#8d9db6" />
            <rect x="340" y="50" width="18" height="20" fill="#b0b6c4" />
            <rect x="370" y="30" width="28" height="40" fill="#7b8ba8" />
            <rect x="400" y="20" width="24" height="50" fill="#b0b6c4" />
            <rect x="430" y="45" width="16" height="25" fill="#8d9db6" />
            <rect x="450" y="38" width="28" height="32" fill="#7b8ba8" />
            <rect x="485" y="20" width="18" height="50" fill="#b0b6c4" />
            <rect x="510" y="35" width="34" height="35" fill="#8d9db6" />
            <rect x="550" y="50" width="18" height="20" fill="#b0b6c4" />
            <rect x="580" y="30" width="28" height="40" fill="#7b8ba8" />
            <rect x="610" y="20" width="24" height="50" fill="#b0b6c4" />
            <rect x="640" y="45" width="16" height="25" fill="#8d9db6" />
            <rect x="660" y="38" width="28" height="32" fill="#7b8ba8" />
            <rect x="695" y="20" width="18" height="50" fill="#b0b6c4" />
            <rect x="720" y="35" width="34" height="35" fill="#8d9db6" />
            <rect x="760" y="50" width="18" height="20" fill="#b0b6c4" />
            <rect x="790" y="30" width="28" height="40" fill="#7b8ba8" />
            <rect x="820" y="20" width="24" height="50" fill="#b0b6c4" />
            <rect x="850" y="45" width="16" height="25" fill="#8d9db6" />
            <rect x="870" y="38" width="28" height="32" fill="#7b8ba8" />
            <rect x="905" y="20" width="18" height="50" fill="#b0b6c4" />
            <rect x="930" y="35" width="34" height="35" fill="#8d9db6" />
            <rect x="970" y="50" width="18" height="20" fill="#b0b6c4" />
            <rect x="1000" y="30" width="28" height="40" fill="#7b8ba8" />
            <rect x="1030" y="20" width="24" height="50" fill="#b0b6c4" />
            <rect x="1060" y="45" width="16" height="25" fill="#8d9db6" />
            <rect x="1080" y="38" width="28" height="32" fill="#7b8ba8" />
            <rect x="1115" y="20" width="18" height="50" fill="#b0b6c4" />
            <rect x="1140" y="35" width="34" height="35" fill="#8d9db6" />
          </g>
        </svg>
      </div>
      {/* Road with dashed lines */}
      <div className="road">
        <div className="road-line" />
      </div>
      {/* Classic Animated Car (side view, proper wheel spin, horizontal movement) */}
      <div className="car-horizontal-anim">
        <div className="car-classic-container">
          <svg width="180" height="70" viewBox="0 0 180 70" className="car-classic-svg">
            {/* Car body */}
            <rect x="30" y="30" rx="12" ry="12" width="120" height="28" fill="#1976d2" stroke="#222" strokeWidth="2" />
            {/* Car roof */}
            <rect x="60" y="18" rx="6" ry="6" width="60" height="18" fill="#2196f3" stroke="#1976d2" strokeWidth="2" />
            {/* Windows */}
            <rect x="70" y="22" rx="3" ry="3" width="18" height="10" fill="#fff" opacity="0.85" />
            <rect x="94" y="22" rx="3" ry="3" width="18" height="10" fill="#fff" opacity="0.7" />
            {/* Door line */}
            <line x1="90" y1="30" x2="90" y2="58" stroke="#1565c0" strokeWidth="2" />
            {/* Driver */}
            <circle cx="80" cy="28" r="5" fill="#ffe082" />
            {/* Wheels */}
            <g className="car-wheel" style={{ transformOrigin: "50px 62px" }}>
              <circle cx="50" cy="62" r="10" fill="#333" stroke="#222" strokeWidth="3" />
              <circle cx="50" cy="62" r="4" fill="#fff" />
            </g>
            <g className="car-wheel" style={{ transformOrigin: "130px 62px" }}>
              <circle cx="130" cy="62" r="10" fill="#333" stroke="#222" strokeWidth="3" />
              <circle cx="130" cy="62" r="4" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
      <h1 style={{ color: "#222", marginBottom: 8, fontSize: 38, fontWeight: 700, letterSpacing: 1, zIndex: 10 }}>404 - Page Not Found</h1>
      <p style={{ color: "#444", marginBottom: 8, fontSize: 20, zIndex: 10 }}>The page you are looking for does not exist.</p>
      <p style={{ color: "#1976d2", fontWeight: 500, marginBottom: 16, fontSize: 18, zIndex: 10 }}>Redirecting to home in <b>{seconds.toFixed(1)}</b> second{seconds !== 1 ? 's' : ''}...</p>
      <a href="/" style={{ color: "#fff", background: "#1976d2", textDecoration: "none", fontWeight: 600, padding: "10px 28px", borderRadius: 30, fontSize: 18, boxShadow: "0 2px 8px #1976d266", zIndex: 10 }}>Go to Home</a>
      {/* Animation Styles */}
      <style>{`
        body, .notfound-bg-anim {
          animation: bg-day-night 6s steps(1, end) infinite;
          background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
        }
        @keyframes bg-day-night {
          0% {
            background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
          }
          49% {
            background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
          }
          51% {
            background: linear-gradient(135deg, #0f2027 0%, #2c5364 100%);
          }
          100% {
            background: linear-gradient(135deg, #0f2027 0%, #2c5364 100%);
          }
        }
        .sun-glow {
          position: relative;
          width: 60px; height: 60px;
        }
        .sun {
          width: 60px; height: 60px; border-radius: 50%; background: #fff176;
          box-shadow: 0 0 60px 20px #fff17688, 0 0 120px 40px #fffde788;
          animation: sun-pulse 2.2s infinite alternate;
        }
        @keyframes sun-pulse {
          0% { box-shadow: 0 0 60px 20px #fff17688, 0 0 120px 40px #fffde788; }
          100% { box-shadow: 0 0 80px 28px #fff176bb, 0 0 180px 80px #fffde7cc; }
        }
        /* Improved clouds with SVG shapes, blur, and parallax */
        .cloud-svg {
          position: absolute; top: 70px; width: 140px; height: 60px; z-index: 2;
          background: none;
        }
        .cloud1::before {
          content: '';
          display: block;
          width: 100%; height: 100%;
          background: url('data:image/svg+xml;utf8,<svg width="140" height="60" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="30" rx="40" ry="20" fill="white" opacity="0.85"/><ellipse cx="90" cy="25" rx="30" ry="16" fill="white" opacity="0.7"/><ellipse cx="110" cy="35" rx="18" ry="12" fill="white" opacity="0.5"/></svg>') no-repeat center/contain;
          filter: blur(1.5px);
          opacity: 0.7;
        }
        .cloud2 { top: 110px; left: 40vw; animation: cloud-move2 22s linear infinite; }
        .cloud2::before {
          content: '';
          display: block;
          width: 100%; height: 100%;
          background: url('data:image/svg+xml;utf8,<svg width="140" height="60" xmlns="http://www.w3.org/2000/svg"><ellipse cx="70" cy="30" rx="36" ry="16" fill="white" opacity="0.7"/><ellipse cx="110" cy="25" rx="28" ry="13" fill="white" opacity="0.5"/></svg>') no-repeat center/contain;
          filter: blur(2.5px);
          opacity: 0.5;
        }
        .cloud3 { top: 90px; left: 70vw; animation: cloud-move3 13s linear infinite; }
        .cloud3::before {
          content: '';
          display: block;
          width: 100%; height: 100%;
          background: url('data:image/svg+xml;utf8,<svg width="140" height="60" xmlns="http://www.w3.org/2000/svg"><ellipse cx="60" cy="30" rx="32" ry="14" fill="white" opacity="0.6"/><ellipse cx="100" cy="28" rx="20" ry="10" fill="white" opacity="0.45"/></svg>') no-repeat center/contain;
          filter: blur(2px);
          opacity: 0.6;
        }
        .cloud1 { left: 10vw; animation: cloud-move1 16s linear infinite; }
        @keyframes cloud-move1 { 0% { left: 10vw; } 100% { left: 80vw; } }
        @keyframes cloud-move2 { 0% { left: 40vw; } 100% { left: 0vw; } }
        @keyframes cloud-move3 { 0% { left: 70vw; } 100% { left: 20vw; } }
        .cityscape {
          position: absolute; bottom: 110px; left: 0; width: 100vw; height: 70px; z-index: 3;
          pointer-events: none;
        }
        /* Classic car container with horizontal animation */
        .car-horizontal-anim {
          width: 180px; height: 70px; position: absolute; left: -200px; bottom: 65px; z-index: 10;
          animation: car-move-horizontal 5s linear infinite;
          transform: scaleX(-1);
        }
        @keyframes car-move-horizontal {
          0% { left: -200px; }
          100% { left: 100vw; }
        }
        .car-classic-container {
          width: 180px; height: 70px; position: relative; margin: 0 auto 24px auto; z-index: 10;
        }
        .car-classic-svg {
          width: 180px; height: 70px; display: block;
        }
        .car-wheel {
          animation: wheel-spin-classic 0.7s linear infinite;
        }
        @keyframes wheel-spin-classic {
          100% { transform: rotate(360deg); }
        }
        .road {
          position: absolute; left: 0; right: 0; bottom: 65px; height: 16px; background: #888; border-radius: 8px; z-index: 8;
        }
        .road-line {
          width: 100%; height: 4px; background: repeating-linear-gradient(90deg,#fff, #fff 32px, #888 32px, #888 64px); margin: 6px 0;
        }
      `}</style>
    </div>
  );
}
