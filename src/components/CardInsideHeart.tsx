"use client";
import { Button } from '@base-ui/react';
import { Heart } from 'lucide-react';
import React, { useContext } from 'react';
import { IStudio } from './Type/type';
import { studioContext } from '@/app/context/studioContext';

const CardInsideHeartButton = ({ AllStudio, ItemId }: { AllStudio: IStudio[]; ItemId: string }) => {
    console.log(ItemId);
    const {liked, setLiked} = useContext(studioContext);

    const findStudio : IStudio[] = AllStudio.filter((studio) => studio._id === ItemId);
    const handleClick = () => {
        setLiked(findStudio);
    };
    console.log(liked);
    


    return (
        <div>
            <Button
                onClick={handleClick}
                className="absolute right-4 top-4 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition hover:bg-black/60">
                <Heart className="h-5 w-5" />
            </Button>
        </div>
    );
};

export default CardInsideHeartButton;