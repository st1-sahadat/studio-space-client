import Image from "next/image";

const DetailsPage = async (props: PageProps<"/studios/[Id]">) => {
    const { Id } = await props.params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/studio/${Id}`);
    const data = await res.json();
    console.log(Id, data);

    return (
        <div>
            <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="grid overflow-hidden rounded-3xl bg-white shadow-sm lg:grid-cols-2">
                        <div className="relative min-h-[320px] bg-slate-200 lg:min-h-[560px]">
                            <Image
                                width={300}
                                height={300}
                                src={data.image_link}
                                alt={data.title}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
                            <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">
                                <span className="rounded-full bg-indigo-100 px-3 py-1 font-medium text-indigo-700">
                                    {data.category}
                                </span>
                                <span className="text-amber-500">★ {data.rating}</span>
                            </div>

                            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                {data.title}
                            </h1>
                            <p className="mt-3 text-slate-500">{data.location}</p>
                            <p className="mt-6 leading-7 text-slate-600">{data.description}</p>

                            <div className="mt-8 grid grid-cols-2 gap-4 border-y border-slate-200 py-6">
                                <div>
                                    <p className="text-sm text-slate-500">Price per hour</p>
                                    <p className="mt-1 text-2xl font-bold text-slate-900">
                                        ${data.price_per_hour}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Security deposit</p>
                                    <p className="mt-1 text-2xl font-bold text-slate-900">
                                        ${data.deposit}
                                    </p>
                                </div>
                            </div>

                            <button className="mt-8 w-full rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white transition hover:bg-indigo-700">
                                Book this studio
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DetailsPage;
