import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { IndustryDemos } from "@/components/IndustryDemos";
import { Stats } from "@/components/Stats";
import { Process } from "@/components/Process";
import { PackageCalculator } from "@/components/PackageCalculator";
import { Packages } from "@/components/Packages";
import { CaseStudiesPreview } from "@/components/CaseStudiesPreview";
import { CompetitorCompare } from "@/components/CompetitorCompare";
import { AntiPitch } from "@/components/AntiPitch";
import { Availability } from "@/components/Availability";
import { CTA } from "@/components/CTA";

export function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <IndustryDemos />
      <Stats />
      <Process />
      <PackageCalculator />
      <Packages />
      <CompetitorCompare />
      <CaseStudiesPreview />
      <AntiPitch />
      <Availability />
      <CTA />
    </>
  );
}
