import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
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
