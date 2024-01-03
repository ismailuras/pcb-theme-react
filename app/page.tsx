import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import ReadyToHelp from "@/components/ReadyToHelp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PCB Tasarım",
  description: "PCB Tasarım İnternet Sitesi",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ReadyToHelp />
      <Contact />
    </>
  );
}
