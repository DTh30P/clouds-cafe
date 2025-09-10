import React from "react";

export default function WelcomeSVG({ className = "" }) {
  return (
    <img 
      src={process.env.BASE_URL ? `${process.env.BASE_URL}nube-designs/welcome.svg` : "/clouds-cafe/nube-designs/welcome.svg"}
      alt="Welcome"
      className={`mx-auto mb-2 max-w-xs w-full h-auto drop-shadow-lg ${className}`}
      style={{ minHeight: 80 }}
      draggable="false"
    />
  );
}
