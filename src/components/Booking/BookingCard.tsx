"use client"
import { IStudio } from '../Type/type';
import { authClient } from '@/lib/auth-client';
import { Button } from '../ui/button';

const BookingCard = ({ studio }: { studio: IStudio }) => {
    // user info
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const handleBooking = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()
        const { ...studioData } = studio;
        const data = {
            userName: user?.name,
            email: user?.email,
            image: user?.image,
            ...studioData,
            bookingDate: new Date(),
        }
        console.log(data);
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const bookingData = await res.json();
        console.log(bookingData);
    }
    return (
        <div>
            <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/60 lg:sticky lg:top-6">
                <p className="text-3xl font-black text-amber-500">
                    ${studio.price_per_hour}
                    <span className="text-sm font-normal text-slate-400">/ hour</span></p>
                <div className="mt-5 space-y-4 border-t border-slate-100 pt-5 text-sm"><p className="flex justify-between"><span className="text-slate-500">Security Deposit</span>
                    <b>${studio.deposit}</b>
                </p><p className="flex justify-between"><span className="text-slate-500">Cancellation Policy</span><b className="text-emerald-600">Free before shoot confirmation</b></p><p className="flex justify-between"><span className="text-slate-500">Availability</span><b>Instant Request Slots</b></p></div>
                <form onSubmit={handleBooking}>
                    <Button                     
                    type='submit'
                    className="mt-7 w-full rounded-2xl bg-slate-900 px-6 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-amber-400 hover:text-slate-900">
                        ▣ &nbsp; Book Workspace Now
                    </Button>
                </form>
                <p className="mt-5 text-center text-xs leading-5 text-slate-400">You won&apos;t be charged immediately. Your reservation will enter pending status for host approval.</p>
            </aside>
        </div>
    );
};

export default BookingCard;