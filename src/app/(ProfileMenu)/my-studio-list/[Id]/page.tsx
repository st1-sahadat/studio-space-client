import BookingDetailsPage from "@/components/Booking/BookingDetails";
import { TBooking } from "@/components/Type/type";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const DetailsPage = async (props: PageProps<"/my-studio-list/[Id]">) => {
    const { Id } = await props.params;
    
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-listing/${user?.email}/${Id}`)
    const data: TBooking = await res.json()
    console.log(data);
    

    return (
        <div>
             <BookingDetailsPage data={data} />
        </div>
    );
};

export default DetailsPage;
