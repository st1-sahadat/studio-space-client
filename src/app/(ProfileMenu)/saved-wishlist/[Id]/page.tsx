import BookingDetailsPage from '@/components/Booking/BookingDetails';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
export const dynamicParams = false;

const MyWishlistPage = async (props: PageProps<"/saved-wishlist/[Id]">) => {
    const { Id } = await props.params;
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-wishlist/${user?.email}/${Id}`);
    const data = await res.json();
    console.log(Id);
    
    
    return (
        <div>            
            <BookingDetailsPage data={data} />
        </div>
    );
};

export default MyWishlistPage;