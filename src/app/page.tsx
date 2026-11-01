import { BannerPage } from "@/components/HomePage/Banner";
import { CategorySection } from "@/components/HomePage/CategorySection";
import StudioSpaceWork from "@/components/StudioSpaceWork";
import StudioTopSixPage from "@/components/StudioTopSix";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <BannerPage />
      <CategorySection />
      <StudioTopSixPage />
      <section id="about" className="scroll-mt-20">
        <StudioSpaceWork />
      </section>
    </div>
  );
}