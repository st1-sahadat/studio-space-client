import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#111319] text-white px-4">
      <h2 className="text-6xl font-bold text-[#ccff00] mb-4">404</h2>
      <h1 className="text-2xl font-semibold mb-2">Page Not Found</h1>
      <p className="text-gray-400 mb-6 text-center max-w-md">
        Oops! The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#ccff00] text-black font-bold rounded-full hover:bg-[#b3e600] transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}