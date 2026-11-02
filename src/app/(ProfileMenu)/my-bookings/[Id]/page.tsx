import BookingDetailsPage from '@/components/Booking/BookingDetails';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyBookingPage = async (props: PageProps<"/my-bookings/[Id]">) => {
    const { Id } = await props.params;
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-bookings/${user?.email}/${Id}`);
    const data = await res.json();
    console.log(data);
    
    
    return (
        <div>            
            <BookingDetailsPage data={data} />
        </div>
    );
};

export default MyBookingPage;