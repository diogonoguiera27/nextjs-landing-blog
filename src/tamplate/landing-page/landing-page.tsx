import {
  CallToAction,
  CostumerStorySection,
  FeatureSection,
  HeroSection,
  SupportSection,
} from "@/tamplate/landing-page/sections";

export const LandingPage = () => {
  return (
    <article className="flex flex-col gap-10 md:gap-20">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CostumerStorySection />
      <CallToAction />
    </article>
  );
};
