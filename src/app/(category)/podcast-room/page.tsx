import StudioCard from '@/components/StudioCard';
import { IStudio } from '@/components/Type/type';

const PhotoStudioCtgPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/CTG-Podcast-Room`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch studio: ${res.status}`);
  }
  const data : IStudio[] = await res.json();
  

    return (
        <div>
            <h2>Music Suites</h2>
            <StudioCard Studio={data} />
        </div>
    );
};

export default PhotoStudioCtgPage;