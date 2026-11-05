import BookingDetailsPage from "@/components/Booking/BookingDetails";
import { getTokenFromServer } from "@/lib/getTokenFormServer";

const DetailsPage = async (props: PageProps<"/studios/[Id]">) => {
    const { Id } = await props.params;
    const token = await getTokenFromServer()
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/studio/${Id}`, {
        headers: {
            authorization: `Bearer ${token}`,
        }
    });
    if (!res.ok) {
        throw new Error(`Failed to fetch destination: ${res.status}`);
    }
    const data = await res.json();


    return (
        <div>
            <BookingDetailsPage data={data} />
        </div>
    );
};

export default DetailsPage;
