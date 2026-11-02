import AboutUs from "@/components/HomePage/AboutUs";
import { BannerPage } from "@/components/HomePage/Banner";
import { CategorySection } from "@/components/HomePage/CategorySection";
import StudioSpaceWork from "@/components/HomePage/StudioSpaceWork";
import StudioTopSixPage from "@/components/HomePage/StudioTopSix";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <BannerPage />
      <CategorySection />
      <StudioTopSixPage />
      <section id="howItWorks" className="scroll-mt-20">
        <StudioSpaceWork />
      </section>
      <section id="aboutUs" className="scroll-mt-20">
        <AboutUs />
      </section>
    </div>
  );
}