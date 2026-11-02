import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { TBooking } from "./Type/type";



const ListCardPage = ({ listing }: { listing: TBooking[] }) => {
    return (
        <div>
            <main className="min-h-screen bg-[#f7f8fc] px-4 py-10 text-slate-900 sm:px-8 lg:px-16">
            <div className="mx-auto max-w-6xl">
                <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                    <div>
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-indigo-600">Your creative calendar</p>
                        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">My bookings</h1>
                        <p className="mt-2 text-sm text-slate-500">Everything you need for your upcoming studio sessions.</p>
                    </div>
                    <Link href="/studios" className="w-fit rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
                        Find another studio <span className="ml-2">↗</span>
                    </Link>
                </div>

                {listing.length === 0 ? (
                    <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center shadow-sm">
                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-2xl">✦</div>
                        <h2 className="text-xl font-bold">No bookings yet</h2>
                        <p className="mt-2 text-sm text-slate-500">Your next production adventure starts here.</p>
                    </div>
                ) : (
                    <div className="grid gap-6">
                        {listing.map((booking, index) => {
                            const bookingDate = new Date(booking.bookingDate);
                            const date = bookingDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
                            const time = bookingDate.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });

                            return (
                                <article key={booking._id || `${booking.email}-${index}`} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white leading-tight shadow-[0_8px_30px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:shadow-xl">
                                    <div className="flex flex-col sm:flex-row">
                                        <div className="relative h-40 shrink-0 overflow-hidden sm:h-48 sm:w-48">
                                            {booking.image_link ? (
                                                <Image height={200} width={300} src={booking.image_link} alt={booking.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                                            ) : (
                                                <div className="h-full w-full bg-slate-200" aria-label={`${booking.title} placeholder`} />
                                            )}
                                            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-indigo-700 shadow-sm">UPCOMING</span>
                                        </div>
                                        <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                                            <div>
                                                <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
                                                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">● Confirmed</span>
                                                    <span>Booking #{booking._id.slice(-6)}</span>
                                                </div>
                                                <h2 className="text-xl font-extrabold leading-tight tracking-tight sm:text-2xl">{booking.title}</h2>
                                                <p className="mt-1.5 text-sm leading-snug text-slate-500">{booking.category} · {booking.capacity}</p>
                                            </div>
                                            <div className="mt-5 grid gap-3 border-y border-slate-100 py-4 text-sm sm:grid-cols-3">
                                                <div><p className="text-[10px] font-bold leading-none tracking-wider text-slate-400">DATE</p><p className="mt-1.5 font-bold leading-snug">{date}</p></div>
                                                <div><p className="text-[10px] font-bold leading-none tracking-wider text-slate-400">START TIME</p><p className="mt-1.5 font-bold leading-snug">{time}</p></div>
                                                <div><p className="text-[10px] font-bold leading-none tracking-wider text-slate-400">LOCATION</p><p className="mt-1.5 font-bold leading-snug text-slate-700">{booking.location}</p></div>
                                            </div>
                                            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                                                <div><p className="text-[10px] font-bold leading-none tracking-wider text-slate-400">HOURLY RATE</p><p className="mt-1 text-2xl font-black leading-none text-indigo-700">${booking.price_per_hour}<span className="text-sm font-medium text-slate-400"> / hour</span></p></div>
                                                <Link href={`/my-studio-list/${booking._id}`}>
                                                    <Button type="button">
                                                        View details →
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                )}
            </div>
        </main>
        </div>
    );
};

export default ListCardPage;