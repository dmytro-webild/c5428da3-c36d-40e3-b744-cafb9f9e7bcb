import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Inter_Tight } from "next/font/google";



export const metadata: Metadata = {
  title: 'A-z Detailing | Premium Mobile Car Detailing',
  description: 'Experience top-tier mobile car detailing services from A-z Detailing in Palm Coast, FL. We bring professional showroom shine directly to your doorstep.',
  keywords: ["car detailing, mobile car wash, auto detailing, car cleaning, Palm Coast, Florida, A-z Detailing, car ceramic coating, interior car cleaning"],
  openGraph: {
    "title": "A-z Detailing | Premium Mobile Car Detailing",
    "description": "Experience top-tier mobile car detailing services from A-z Detailing in Palm Coast, FL. We bring professional showroom shine directly to your doorstep.",
    "url": "https://www.azdetailing.com",
    "siteName": "A-z Detailing",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/beautiful-car-washing-service_23-2149212227.jpg",
        "alt": "Luxury car being detailed, showing a deep shine"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "A-z Detailing | Premium Mobile Car Detailing",
    "description": "Experience top-tier mobile car detailing services from A-z Detailing in Palm Coast, FL. We bring professional showroom shine directly to your doorstep.",
    "images": [
      "http://img.b2bpic.net/free-photo/beautiful-car-washing-service_23-2149212227.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${interTight.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
