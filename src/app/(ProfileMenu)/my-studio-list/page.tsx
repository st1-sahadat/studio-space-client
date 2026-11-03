import ListCardPage from '@/components/ListCard';
import { TBooking } from '@/components/Type/type';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const MyStudioListPage = async() => {
    const session = await auth.api.getSession({
            headers: await headers() // you need to pass the headers object.
        })
        const user = session?.user
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/studio/${user?.email}`)
        const listing: TBooking[] = await res.json()
        
    return (
        <div>
        <ListCardPage listing={listing} />
        </div>
    );
};

export default MyStudioListPage;