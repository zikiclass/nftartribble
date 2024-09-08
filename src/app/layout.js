"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import { name, title } from "../../env";
import AuthProvider from "./auth/Provider";
import { useEffect } from "react";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://www.smartsuppchat.com/loader.js?";
    script.async = true;
    script.onload = () => {
      window._smartsupp = window._smartsupp || {};
      window._smartsupp.key = "a228e1a7e48a5f6f9bfe8c5c8c582883666d6855";
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={poppins.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
