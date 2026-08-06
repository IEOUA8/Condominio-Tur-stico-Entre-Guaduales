import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ExperienceSelector } from "@/components/home/ExperienceSelector";
import { Recommender } from "@/components/home/Recommender";
import { Narrative } from "@/components/home/Narrative";
import { ServicesSection } from "@/components/home/ServicesSection";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { Moments } from "@/components/home/Moments";
import { TrustAndTestimonials } from "@/components/home/TrustAndTestimonials";
import { LocationTeaser } from "@/components/home/LocationTeaser";
import { FaqPreview } from "@/components/home/FaqPreview";
import { ConversionClose } from "@/components/home/ConversionClose";
import { PageView } from "@/components/analytics/PageView";

export default function HomePage() {
  return (
    <>
      <PageView event="view_home" />
      <Hero />
      <TrustStrip />
      <ExperienceSelector />
      <Recommender />
      <Narrative />
      <ServicesSection />
      <GalleryPreview />
      <Moments />
      <TrustAndTestimonials />
      <LocationTeaser />
      <FaqPreview />
      <ConversionClose />
    </>
  );
}
