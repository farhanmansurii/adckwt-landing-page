import ContactForm from "@/components/contact-form";
import Features from "@/components/features-section";
import FooterSection from "@/components/footer-section";
import HeroSection from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import Services from "@/components/services-section";
import Testimonials from "@/components/testimonials-section";
import Logos from "@/components/trusted-section";
import { cn } from "@/lib/utils";
import { IconJarLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Logos />
      <Suspense>
        <ContactForm />
      </Suspense>
      <Services />
      <Testimonials />
      <FooterSection />
    </>
  );
}
