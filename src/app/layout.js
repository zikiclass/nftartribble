import { Poppins } from "next/font/google";
import "./globals.css";
import { name, title } from "../../env";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: name + title,
  description: title,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
