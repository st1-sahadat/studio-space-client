import StudioCard from "@/components/StudioCard";
import { IStudio } from "@/components/Type/type";

const StudioPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/studio`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch studio: ${res.status}`);
  }
  const data : IStudio[] = await res.json();
  

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-serif text-4xl text-gray-900 md:text-[40px]">
          Explore All Destinations
        </h2>
        <p className="mt-3 text-sm text-gray-500">
          Find your perfect travel experience from our curated collection
        </p>

        <div className="mt-8">
          <StudioCard Studio={data} />
        </div>
        <div>
          
        </div>
      </div>
    </section>
  );
};

export default StudioPage;
