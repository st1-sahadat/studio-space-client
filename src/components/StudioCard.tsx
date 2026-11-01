import { Heart, Star, MapPin, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import { IStudio } from "./Type/type";
import Link from "next/link";

const StudioCard = ({ Studio }: { Studio: IStudio[] }) => {
console.log(Studio);

    return (
        <div className="flex flex-wrap gap-6">
            {Studio.map((item) => (
                <div
                    key={item.title}
                    className="w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                >
                    <div className="relative h-48 w-full sm:h-56 lg:h-64">
                        <Image
                            width={300}
                            height={300}
                            src={item.image_link}
                            alt={item.title}
                            className="h-full w-full object-cover"
                        />

                        {/* Category Badge */}
                        <div className="absolute left-4 top-4 rounded-full bg-purple-100/90 px-3 py-1 text-xs font-semibold text-purple-700 backdrop-blur-sm">
                            {item.category}
                        </div>

                        {/* Favorite Button */}
                        <button className="absolute right-4 top-4 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition hover:bg-black/60">
                            <Heart className="h-5 w-5" />
                        </button>

                        {/* Price & Rating Overlay */}
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                            <div className="flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-white backdrop-blur-sm">
                                <span className="text-lg font-bold">${item.price_per_hour}</span>
                                <span className="text-sm text-gray-300">/ hr</span>
                            </div>

                            <div className="flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-white backdrop-blur-sm">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-bold">{item.rating}</span>
                            </div>
                        </div>
                    </div>

                    {/* Content Container */}
                    <div className="p-5">
                        {/* Location */}
                        <div className="flex items-center gap-1.5 text-sm text-gray-500">
                            <MapPin className="h-4 w-4 text-gray-400" />
                            <span>{item.location}</span>
                        </div>

                        {/* Title */}
                        <h3 className="mt-2 text-xl font-bold text-gray-900 truncate">
                            {item.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                            {item.description}
                        </p>

                        {/* Divider */}
                        <hr className="my-4 border-gray-100" />

                        {/* Footer Details */}
                        <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center gap-1.5">
                                <Users className="h-4 w-4 text-gray-400" />
                                <span>{item.capacity}</span>
                            </div>
                            <div>
                                <span>Deposit: ${item.deposit}</span>
                            </div>
                        </div>

                        {/* Action Button */}
                        <Link href={`/studios/${item._id}`}>
                        <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1A1A1A] py-3 text-sm font-semibold text-white transition hover:bg-black">
                            View Details
                            <ArrowRight className="h-4 w-4" />
                        </button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StudioCard;