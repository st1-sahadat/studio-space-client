import BookingDetailsPage from "@/components/Booking/BookingDetails";

const DetailsPage = async (props: PageProps<"/studios/[Id]">) => {
    const { Id } = await props.params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/studio/${Id}`);
    const data = await res.json();

    return (
        <div>
            <BookingDetailsPage data={data} />
        </div>
    );
};

export default DetailsPage;
