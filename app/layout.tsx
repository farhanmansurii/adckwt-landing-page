import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight:["300", "400", "500", "600", "700", "500"]
});

export const metadata: Metadata = {
  title: "ADC Shipping & Forwarding Service",
  description:
    "Experience seamless relocation services tailored to meet your needs, ensuring a smooth transition to your new destination.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
