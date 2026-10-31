import { BannerPage } from "@/components/HomePage/Banner";
import { CategorySection } from "@/components/HomePage/CategorySection";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <BannerPage />
      <CategorySection />
    </div>
  );
}