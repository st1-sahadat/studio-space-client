import ListCardPage from '@/components/ListCard';
import { TBooking } from '@/components/Type/type';
import { auth } from '@/lib/auth';
// import { getTokenFromServer } from '@/lib/getTokenFormServer';
import { headers } from 'next/headers';

const MyStudioListPage = async() => {
    const session = await auth.api.getSession({
            headers: await headers() // you need to pass the headers object.
        })
        const user = session?.user
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/studio/${encodeURIComponent(user?.email ?? "")}`
             )
        if (!res.ok) {
            throw new Error(`Failed to fetch listings: ${res.status}`)
        }
        const listing: TBooking[] = await res.json()

    return (
        <div>
        <ListCardPage listing={listing} />
        </div>
    );
};

export default MyStudioListPage;
