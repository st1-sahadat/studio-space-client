import Image from 'next/image';
import React from 'react';
import BookingCard from './BookingButton';
import { TBooking } from '../Type/type';

const BookingDetailsPage = ({ data }: { data: TBooking }) => {

    return (
        <div>
            <main className="min-h-screen bg-[#f7f5f0] px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
                        <div>
                            <div className="mb-3 flex flex-wrap items-center gap-2 text-sm text-slate-500">
                                <span className="rounded-full bg-slate-900 px-4 py-1.5 font-semibold uppercase tracking-wider text-amber-300">
                                    {data.category}
                                </span>
                                <span className="text-slate-300">/</span>
                                <span className="font-medium">📍 {data.location}</span>
                            </div>
                            <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">{data.title}</h1>
                        </div>
                        <div className="flex gap-2">
                            <button className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:border-slate-900 hover:bg-slate-900 hover:text-white">↗ Share</button>
                            <button className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:border-amber-400 hover:bg-amber-100">♡ Save</button>
                        </div>
                    </div>

                    <section className="mb-8 overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl shadow-slate-300/50">
                        <div className="relative h-88 sm:h-128 lg:h-152">
                            {data.image_link ? (
                                <Image loading="lazy" height={200} width={300} src={data.image_link} alt={data.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                            ) : (
                                <div className="h-full w-full bg-slate-200" aria-label={`${data.title} placeholder`} />
                            )}
                            <div className="absolute inset-0 bg-linear-to-t from-slate-950/75 via-transparent to-transparent" />
                            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white sm:bottom-7 sm:left-7 sm:right-7">
                                <p className="max-w-md text-sm font-medium leading-6 text-slate-200">A considered space for bold ideas, beautiful frames, and unforgettable productions.</p>
                                <span className="shrink-0 rounded-full border border-white/30 bg-slate-950/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">01 / 02</span>
                            </div>
                        </div>
                        <div className="flex gap-3 bg-white/95 p-4">
                            <div className="relative h-20 w-28 overflow-hidden rounded-2xl ring-2 ring-amber-400 ring-offset-2">
                                {data.image_link ? (
                                    <Image loading="lazy" height={200} width={300} src={data.image_link} alt={data.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                                ) : (
                                    <div className="h-full w-full bg-slate-200" aria-label={`${data.title} placeholder`} />
                                )} 
                                </div>
                            <div className="flex h-20 w-28 items-center justify-center rounded-2xl bg-slate-100 text-2xl text-slate-400 transition hover:bg-amber-100">＋</div>
                        </div>
                    </section>

                    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
                        <div className="space-y-6">
                            <section className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 shadow-sm sm:grid-cols-4">
                                <div className="bg-white p-5"><p className="text-xs font-bold uppercase tracking-wider text-slate-400">Hourly Rate</p><p className="mt-2 text-2xl font-black text-amber-500">${data.price_per_hour}<span className="text-sm font-medium text-slate-400">/hr</span></p></div>
                                <div className="bg-white p-5"><p className="text-xs font-bold uppercase tracking-wider text-slate-400">Deposit</p><p className="mt-2 text-2xl font-black">${data.deposit}</p></div>
                                <div className="bg-white p-5"><p className="text-xs font-bold uppercase tracking-wider text-slate-400">Capacity</p><p className="mt-2 text-2xl font-black">{data.capacity ?? 30}<span className="text-sm font-medium text-slate-400"> people</span></p></div>
                                <div className="bg-white p-5"><p className="text-xs font-bold uppercase tracking-wider text-slate-400">Rating</p><p className="mt-2 text-2xl font-black">⭐ {data.rating}</p></div>
                            </section>
                            <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
                                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-500">The space</p>
                                <h2 className="text-2xl font-black">Workspace Overview</h2>
                                <p className="mt-5 text-lg leading-8 text-slate-600">{data.description}</p>
                            </section>
                            <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
                                <h2 className="text-2xl font-black">Equipment & Amenities</h2>
                                <div className="mt-5 grid gap-3 text-slate-600 sm:grid-cols-2">
                                    {["Cyclorama Wall", "4K DMX Lighting Grid", "Soundproof Vocal Booth", "Drive-In Loading Bay", "High-Speed Gigabit WiFi"].map((item: string) => <p key={item} className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium"><span className="mr-2 text-amber-500">✓</span>{item}</p>)}
                                </div>
                            </section>
                        </div>
                        {/* Booking */}
                        <BookingCard studio={data} />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BookingDetailsPage;