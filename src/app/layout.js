import "./globals.css";

export const metadata = {
  title: "Squeezy",
  description: "A variable font experiment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
