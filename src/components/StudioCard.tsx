import {  Star, MapPin, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import { IStudio } from "./Type/type";
import Link from "next/link";
import CardInsideHeartButton from "./CardInsideHeart";

const StudioCard = ({ Studio }: { Studio: IStudio[] }) => {

    return (
        <div className="flex flex-wrap gap-6">
            {Studio.map((item) => (
                <div
                    key={item.title}
                    className="w-full overflow-hidden rounded-2xl border border-gray-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                >
                    <div className="relative h-48 w-full sm:h-56 lg:h-64">
                        {item.image_link ? (
                            <Image height={200} width={300} src={item.image_link} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                        ) : (
                            <div className="h-full w-full bg-slate-200 dark:bg-neutral-800" aria-label={`${item.title} placeholder`} />
                        )}

                        {/* Category Badge */}
                        <div className="absolute left-4 top-4 rounded-full bg-purple-100/90 px-3 py-1 text-xs font-semibold text-purple-700 dark:bg-purple-950/80 dark:text-purple-300 backdrop-blur-sm">
                            {item.category}
                        </div>

                        {/* Favorite Button */}
                        <CardInsideHeartButton 
                          AllStudio={Studio}    
                          ItemId={item._id}                       
                        />
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
                        <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-neutral-400">
                            <MapPin className="h-4 w-4 text-gray-400 dark:text-neutral-500" />
                            <span>{item.location}</span>
                        </div>
                        {/* Title */}
                        <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-neutral-50 truncate">
                            {item.title}
                        </h3>
                        {/* Description */}
                        <p className="mt-2 text-sm text-gray-500 dark:text-neutral-400 line-clamp-2">
                            {item.description}
                        </p>
                        {/* Divider */}
                        <hr className="my-4 border-gray-100 dark:border-neutral-800" />
                        {/* Footer Details */}
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-neutral-400">
                            <div className="flex items-center gap-1.5">
                                <Users className="h-4 w-4 text-gray-400 dark:text-neutral-500" />
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