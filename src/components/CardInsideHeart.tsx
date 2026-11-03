"use client";

import { Button } from "@base-ui/react";
import { Heart } from "lucide-react";
import { IStudio } from "./Type/type";
import { authClient } from "@/lib/auth-client";
import React from "react";

const CardInsideHeartButton = ({ItemId,}: {AllStudio:IStudio[];ItemId: string;}) => {
    // ✅ Hook must be called at the top level
    const { data: session } = authClient.useSession();
    const user = session?.user;
    // ✅ handleBooking is now in the component scope
    const handleBooking = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Fetch studio data
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/studio/${ItemId}`
        );
        const data = await res.json();
        const wishListData = {
            userName: user?.name,
            email: user?.email,
            image: user?.image,
            ...data,
            bookingDate: new Date(),
        };
        // Save to wishlist
        const wishlistRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wishlist`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(wishListData),
            }
        );
        const bookingData = await wishlistRes.json();
        console.log(bookingData);
    };

    return (
        <div>
            <form onSubmit={handleBooking}>
                <Button
                    type="submit"
                    className="absolute right-4 top-4 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition hover:bg-black/60"
                >
                    <Heart className="h-5 w-5" />
                </Button>
            </form>
        </div>
    );
};

export default CardInsideHeartButton;