import { TBooking } from "@/components/Type/type";
import UserCardPage from "@/components/UserCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const MyBookingsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-bookings/${user?.email}`)
    const bookings: TBooking[] = await res.json()

    return (
        <UserCardPage bookings={bookings} />
    );
};

export default MyBookingsPage;