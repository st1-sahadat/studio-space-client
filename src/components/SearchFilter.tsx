import { RotateCcw, Search, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { IStudio } from './Type/type';

const SearchFilterPage = ({data} : {data: IStudio[]}) => {
    const AllData = data.map((studio) => (studio));
    console.log(AllData);
    

    return (
        <div>
            {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF8E7] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#E8A317]">
            <Sparkles className="h-3 w-3" />
            Full Marketplace Catalog
          </span>
          <h2 className="mt-5 text-[2.75rem] font-extrabold leading-[1.05] tracking-tight text-[#1A1816] sm:text-5xl lg:text-[3.5rem]">
            Explore Creative Studios
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#6B655D] sm:text-base">
            Discover sound stages, photography cycloramas, podcast hubs, and mixing rooms
          </p>
        </div>
        <div className="text-sm font-medium text-[#6B655D] lg:text-base lg:font-semibold">
          Showing <span className="text-[#1A1816]">{data.length}</span> creative spaces
        </div>
      </div>

      {/* Search & Sort */}
      <div className="mt-10 flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
        <div className="relative flex-1">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A8A39D]">
            <Search className="h-5 w-5" />
          </div>
          <input
            type="text"
            placeholder="Search studios by title, equipment, city..."
            className="w-full rounded-2xl border border-[#EAECE6] bg-[#FAFAF5] py-3.5 pl-11 pr-4 text-sm text-[#1A1816] shadow-sm outline-none transition focus:border-[#D4D0C8] focus:ring-2 focus:ring-[#F5A623]/20 focus:bg-white"
          />
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-2xl bg-linear-to-r from-[#F5A623] to-[#E08C00] px-6 py-3.5 text-sm font-extrabold text-white shadow-md shadow-[#F5A623]/20 transition hover:shadow-lg hover:shadow-[#F5A623]/30"
          >
            Search
          </Link>
          <div className="relative">
            <select className="rounded-2xl border border-[#EAECE6] bg-white px-4 py-3.5 text-sm font-semibold text-[#1A1816] shadow-sm outline-none transition focus:border-[#D4D0C8] focus:ring-2 focus:ring-[#F5A623]/20">
              <option>Newest Listings</option>
              <option>Highest Rated</option>
              <option>Lowest Price</option>
            </select>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Category pills */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-xs font-bold uppercase tracking-wider text-[#A8A39D]">
            Category:
          </span>
          <Button className="rounded-full bg-linear-to-r from-[#F5A623] to-[#E08C00] px-4 py-1.5 text-xs font-extrabold text-white shadow-md shadow-[#F5A623]/20 transition hover:shadow-lg">
            All
          </Button>
          <Button className="rounded-full border border-[#EAECE6] bg-white px-4 py-1.5 text-xs font-semibold text-[#1A1816] shadow-sm transition hover:border-[#D4D0C8] hover:bg-[#FAFAF5]">
            Photo Studio
          </Button>
          <Button className="rounded-full border border-[#EAECE6] bg-white px-4 py-1.5 text-xs font-semibold text-[#1A1816] shadow-sm transition hover:border-[#D4D0C8] hover:bg-[#FAFAF5]">
            Film Stage
          </Button>
          <Button className="rounded-full border border-[#EAECE6] bg-white px-4 py-1.5 text-xs font-semibold text-[#1A1816] shadow-sm transition hover:border-[#D4D0C8] hover:bg-[#FAFAF5]">
            Podcast Room
          </Button>
          <Button className="rounded-full border border-[#EAECE6] bg-white px-4 py-1.5 text-xs font-semibold text-[#1A1816] shadow-sm transition hover:border-[#D4D0C8] hover:bg-[#FAFAF5]">
            Music Suite
          </Button>
          <Button className="rounded-full border border-[#EAECE6] bg-white px-4 py-1.5 text-xs font-semibold text-[#1A1816] shadow-sm transition hover:border-[#D4D0C8] hover:bg-[#FAFAF5]">
            Art Workshop
          </Button>
        </div>

        {/* Rate filter */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A8A39D]">
            Rate:
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#A8A39D]">Min $</span>
            <input
              type="number"
              placeholder="0"
              className="w-16 rounded-xl border border-[#EAECE6] bg-white px-3 py-1.5 text-xs font-medium text-[#1A1816] shadow-sm outline-none transition focus:border-[#D4D0C8] focus:ring-1 focus:ring-[#F5A623]/20"
            />
            <span className="text-xs text-[#D4D0C8]">-</span>
            <span className="text-xs font-semibold text-[#A8A39D]">Max $</span>
            <input
              type="number"
              placeholder="0"
              className="w-16 rounded-xl border border-[#EAECE6] bg-white px-3 py-1.5 text-xs font-medium text-[#1A1816] shadow-sm outline-none transition focus:border-[#D4D0C8] focus:ring-1 focus:ring-[#F5A623]/20"
            />
          </div>
          <button className="rounded-2xl bg-[#F7F5F0] px-4 py-1.5 text-xs font-extrabold text-[#1A1816] shadow-sm transition hover:bg-[#EAECE6]">
            Apply
          </button>
          <button
            type="button"
            aria-label="Reset filters"
            className="rounded-full p-2 text-[#A8A39D] transition hover:bg-[#F7F5F0] hover:text-[#6B655D]"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>
        </div>
    );
};

export default SearchFilterPage;