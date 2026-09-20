"use client";
import { useEffect, useState } from "react";
import { initClarity, isLocalhost } from "./Clarity";

const CONSENT_KEY = "clarity-consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Clarity is disabled on localhost, so there is nothing to ask consent for.
    if (isLocalhost()) return;

    let consent = null;
    try {
      consent = localStorage.getItem(CONSENT_KEY);
    } catch (e) {}

    if (consent === "accepted") {
      initClarity();
    } else if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(CONSENT_KEY, "accepted");
    } catch (e) {}
    initClarity();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        left: "20px",
        right: "20px",
        bottom: "20px",
        zIndex: 9999,
        maxWidth: "420px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "18px 20px",
        borderRadius: "10px",
        background: "#171818",
        border: "1px solid rgba(255, 189, 74, 0.3)",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <p
        style={{
          margin: 0,
          color: "#e5e5e5",
          fontSize: "13px",
          lineHeight: 1.5,
        }}
      >
        This site uses{" "}
        <a
          href="https://clarity.microsoft.com/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#ffbd4a", textDecoration: "underline" }}
        >
          Microsoft Clarity
        </a>{" "}
        to understand how visitors use it (analytics).
      </p>
      <button
        onClick={handleAccept}
        style={{
          alignSelf: "flex-end",
          padding: "8px 20px",
          border: "none",
          borderRadius: "6px",
          background: "#ffbd4a",
          color: "#171818",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 600,
          fontSize: "13px",
          cursor: "pointer",
        }}
      >
        Accept
      </button>
    </div>
  );
};

export default CookieConsent;
