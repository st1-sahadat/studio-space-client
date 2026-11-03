import { TBooking } from "@/components/Type/type";
import WishListCardPage from "@/components/WishListCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const SavedWishlistPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-wishlist/${user?.email}`)
    const wishlist: TBooking[] = await res.json()

    return (
        <WishListCardPage wishlist={wishlist} />
    );
};

export default SavedWishlistPage;