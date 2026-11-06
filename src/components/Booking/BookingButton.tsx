"use client"
import { IStudio, TBooking } from '../Type/type';
import { authClient } from '@/lib/auth-client';
import { Button } from '../ui/button';
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';
import { getTokenFromClient } from '@/lib/getTokenFronClient';

const BookingCard = ({ studio }: { studio: IStudio }) => {
    // user info
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const handleBooking = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!user) {
            redirect('/sign-in');
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-bookings/${user?.email}`);
        const bookingAvailableData = await res.json();
        const isAlreadyBooked = bookingAvailableData.find((booking: TBooking) => booking.title === studio.title);
        if (isAlreadyBooked) {
            toast.error('You have already booked this studio.');
            return;
        } else {
            const data = {
                userName: user.name,
                email: user.email,
                image: user.image,
                ...studio,
                bookingDate: new Date(),
            };
            try {
                const token = await getTokenFromClient();
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking`, {
                    method: 'POST',

                    headers: {
                        'Content-Type': 'application/json',
                        authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify(data),
                });

                if (!res.ok) throw new Error('Booking failed');

                await res.json();
                toast.success('Booking request submitted successfully!');
            } catch {
                toast.error('Failed to submit booking request. Please try again.');
            }
        }

    };
    return (
        <div>
            <aside className="h-fit rounded-3xl border border-slate-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-7 shadow-xl shadow-slate-200/60 lg:sticky lg:top-6">
                <p className="text-3xl font-black text-amber-500">
                    ${studio.price_per_hour}
                    <span className="text-sm font-normal text-slate-400 dark:text-neutral-500">/ hour</span></p>
                <div className="mt-5 space-y-4 border-t border-slate-100 dark:border-neutral-800 pt-5 text-sm"><p className="flex justify-between"><span className="text-slate-500 dark:text-neutral-400">Security Deposit</span>
                    <b>${studio.deposit}</b>
                </p><p className="flex justify-between"><span className="text-slate-500 dark:text-neutral-400">Cancellation Policy</span><b className="text-emerald-600 dark:text-emerald-400">Free before shoot confirmation</b></p><p className="flex justify-between"><span className="text-slate-500 dark:text-neutral-400">Availability</span><b>Instant Request Slots</b></p></div>
                <form onSubmit={handleBooking}>
                    <Button
                        type='submit'
                        className="mt-7 w-full rounded-2xl bg-slate-900 px-6 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-amber-400 hover:text-slate-900">
                        ▣ &nbsp; Book Workspace Now
                    </Button>
                </form>
                <p className="mt-5 text-center text-xs leading-5 text-slate-400 dark:text-neutral-500">You won&apos;t be charged immediately. Your reservation will enter pending status for host approval.</p>
            </aside>
        </div>
    );
};

export default BookingCard;