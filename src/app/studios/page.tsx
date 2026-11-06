import SearchFilterPage from "@/components/SearchFilter";
import StudioCard from "@/components/StudioCard";
import { IStudio } from "@/components/Type/type";





const StudioPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/studio`, {
    cache: "no-store",
  });
  const data: IStudio[] = await res.json();

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <SearchFilterPage data={data} />
      {/* Cards */}
      <div className="mt-10">
        {data.length > 0 ? (
          <StudioCard Studio={data} />
        ) : (
          <div className="rounded-3xl border border-[#EAECE6] dark:border-neutral-700 bg-white dark:bg-neutral-900 py-20 text-center shadow-sm">
            <p className="text-lg font-medium text-[#6B655D] dark:text-neutral-400">No studios found.</p>
            <p className="mt-2 text-sm text-[#A8A39D] dark:text-neutral-500">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default StudioPage;
