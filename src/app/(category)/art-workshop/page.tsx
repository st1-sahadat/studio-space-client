import StudioCard from '@/components/StudioCard';
import { IStudio } from '@/components/Type/type';

const PhotoStudioCtgPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/CTG-Art-Workshop`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch studio: ${res.status}`);
  }
  const data : IStudio[] = await res.json();
  

    return (
        <div>
            <h2>Podcast Rooms</h2>
            <StudioCard Studio={data} />
        </div>
    );
};

export default PhotoStudioCtgPage;