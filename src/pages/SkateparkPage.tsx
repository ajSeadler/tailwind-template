// components/SkateparkPage.tsx
import { useParams, Link } from "react-router-dom";
import { skateparks } from "../data/skateparks";
import { MapPin, ArrowLeft } from "lucide-react";

const SkateparkPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const formattedId = id?.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const skatepark = skateparks.find(
    (p) => p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") === formattedId
  );

  if (!skatepark) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-gray-300 bg-neutral-900 px-4">
        <h1 className="text-4xl font-bold text-red-400 mb-4">
          Skatepark not found
        </h1>
        <p className="text-gray-400 mb-6">
          Please check the URL or go back to the homepage.
        </p>
        <Link
          to="/skateparks"
          className="flex items-center gap-2 text-teal-500 hover:text-teal-400 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to skateparks
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Back button */}
        <div className="mb-6">
          <Link
            to="/skateparks"
            className="inline-flex items-center text-sm text-teal-500 hover:text-teal-400 transition"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            All skateparks
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">
          {skatepark.name}
        </h1>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 mb-10">
          <img
            src={skatepark.imageUrl}
            alt={skatepark.name}
            className="w-full h-auto object-cover hover:scale-[1.01] transition-transform"
          />
        </div>

        {/* Info section */}
        <div className="space-y-6 text-lg leading-relaxed text-gray-300">
          <p className="border-l-4 border-teal-500 pl-4 text-base md:text-lg">
            {skatepark.description}
          </p>

          <div className="flex items-start gap-3 mt-4">
            <MapPin className="text-teal-500 w-5 h-5 mt-1" />
            <p className="text-gray-400">{skatepark.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkateparkPage;
