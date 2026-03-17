import type { Metadata } from "next";
import "./globals.css";
import "./theme.css";
export const metadata: Metadata = {
  title: "JS Hospital Narhe, Pune | 24/7 Emergency Care | Trusted Healthcare",
  description: "JS Hospital in Narhe, Pune offers 24/7 emergency care, kidney stone treatment, pregnancy care, and expert medical services. Book your appointment with Dr. Umesh Jadhav today.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%230A6EBD'/><text x='16' y='22' text-anchor='middle' font-size='16' font-weight='bold' fill='white'>JS</text></svg>"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
