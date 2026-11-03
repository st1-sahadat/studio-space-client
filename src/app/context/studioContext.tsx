'use client'

import { IStudio } from "@/components/Type/type";
import { createContext, ReactNode, useState } from "react"

interface IStudioContext {
    liked: IStudio[];
    setLiked: React.Dispatch<React.SetStateAction<IStudio[]>>;
}



export const studioContext = createContext<IStudioContext>({
    liked: [], setLiked: () => { },
})


const StudioProvider = ({ children }: { children: ReactNode }) => {
    // date show
        const [liked, setLiked] = useState<IStudio[]>([]);


    const shareData = {
        liked, setLiked
    };
    return (
        <studioContext.Provider value={shareData}>{children}</studioContext.Provider>
    )
}

export default StudioProvider;







