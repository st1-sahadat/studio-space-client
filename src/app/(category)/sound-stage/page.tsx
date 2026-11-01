import StudioCard from '@/components/StudioCard';
import { IStudio } from '@/components/Type/type';
import React from 'react';

const SoundStagePage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/CTG-Sound-Stage`, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error(`Failed to fetch studio: ${res.status}`);
      }
      const data : IStudio[] = await res.json();
    return (
        <div>
            <h2>Sound Stages</h2>
            <StudioCard Studio={data} />
        </div>
    );
};

export default SoundStagePage;