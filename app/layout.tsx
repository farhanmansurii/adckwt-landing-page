import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { GoogleAnalyticsTracking } from "@/lib/GoogleTags";
import Script from "next/script";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "500"],
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
      {/* Google tag (gtag.js) */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-16484992696"
      ></Script>
      <Script
        id="script-html"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16484992696');
            `,
        }}
      />
      <body className={poppins.className}>{children}</body>
      <GoogleAnalyticsTracking />
    </html>
  );
}
