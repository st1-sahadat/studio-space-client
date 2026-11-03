"use client";
import { studioContext } from '@/app/context/studioContext';
import { useContext } from 'react';

const  SavedWishlistPage = () => {
        const {liked, setLiked} = useContext(studioContext);
        console.log(liked);
        
    return (
        <div>
            <h2>Saved Wishlist</h2>
        </div>
    );
};

export default  SavedWishlistPage;