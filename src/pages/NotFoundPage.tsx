import React from "react";

export default function NotFoundPage() {
  return (
    <div style={{ minHeight: "60vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <a href="/" style={{ color: "#0070f3", textDecoration: "underline" }}>Go to Home</a>
    </div>
  );
}
