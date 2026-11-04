import BookingDetailsPage from '@/components/Booking/BookingDetails';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const MyWishlistPage = async (props: PageProps<"/saved-wishlist/[Id]">) => {
    const { Id } = await props.params;

    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;

    if (!user?.email) {
        return <div>Please login first.</div>;
    }

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/my-wishlist/${user.email}/${Id}`
    );

    if (!res.ok) {
        console.log("API Error:", res.status);
        return <div>Wishlist not found!</div>;
    }

    const data = await res.json();

    return (
        <div>
            <BookingDetailsPage data={data} />
        </div>
    );
};

export default MyWishlistPage;