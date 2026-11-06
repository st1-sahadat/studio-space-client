import Link from 'next/link';
import StudioCard from '../StudioCard';
import { IStudio } from '../Type/type';

const StudioTopSixPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/studio-top-6`, {
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error(`Failed to fetch studio: ${res.status}`);
    }
    const data: IStudio[] = await res.json();

    return (
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-600">
                        <span className="text-[9px]">✣</span>
                        Curated selection {data.length}
                    </span>
                    <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-neutral-50 sm:text-[22px]">
                        Featured Creative Workspaces
                    </h2>
                    <p className="mt-1 max-w-md text-xs leading-5 text-slate-500 dark:text-neutral-400">
                        Hand-inspected production facilities and studio suites top-rated by
                        professional directors, producers, and audio engineers.
                    </p>
                </div>
                <Link
                    href="/studios"
                    className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-amber-500 transition-colors hover:text-amber-600"
                >
                    View All Workspaces
                    <span aria-hidden="true" className="text-base leading-none">→</span>
                </Link>
            </div>
            <StudioCard Studio={data} />
        </div>
    );
};

export default StudioTopSixPage;