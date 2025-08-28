import { FaStar } from "react-icons/fa";
import { notFound } from "next/navigation";

interface MoviePageProps {
  params: Promise<{ id: string }>; // 👈 mark it as Promise
}

export default async function MovieDetails({ params }: MoviePageProps) {
  const { id } = await params; // 👈 await here

  const movies = [
    {
      id: "1",
      title: "Inception",
      comments: 124,
      rating: 4.7,
      description: "A mind-bending thriller by Christopher Nolan.",
      commentsList: ["Great movie!", "Mind-blowing!", "A true masterpiece."],
    },
    {
      id: "2",
      title: "Interstellar",
      comments: 98,
      rating: 4.8,
      description: "A space exploration film by Christopher Nolan.",
      commentsList: [
        "Amazing visual effects!",
        "Loved the soundtrack.",
        "A bit confusing but great.",
      ],
    },
    {
      id: "3",
      title: "The Dark Knight",
      comments: 255,
      rating: 4.9,
      description: "The iconic Batman film directed by Christopher Nolan.",
      commentsList: [
        "The best Batman movie!",
        "Heath Ledger was outstanding.",
        "Iconic movie.",
      ],
    },
  ];

  const movie = movies.find((movie) => movie.id === id);

  if (!movie) {
    return notFound(); // 👈 Better than inline "Movie not found"
  }

  return (
    <div className="p-8 space-y-8 bg-gray-900 min-h-screen">
      {/* Movie Title and Description */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-semibold text-white mb-4">{movie.title}</h2>
        <p className="text-lg text-gray-300">{movie.description}</p>
      </div>

      {/* Rating & Comments Summary */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-center items-center">
            <p className="text-xl text-gray-300 mb-2">Rating</p>
            <div className="flex items-center text-yellow-400">
              <FaStar className="mr-1" />
              <span className="text-2xl font-bold">{movie.rating}</span> / 5
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-xl text-gray-300 mb-2">Comments</p>
            <p className="text-2xl font-semibold text-white">{movie.comments}</p>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div>
        <h3 className="text-3xl font-semibold text-white mb-4">Comments</h3>
        <ul className="space-y-4">
          {movie.commentsList.map((comment, index) => (
            <li
              key={index}
              className="bg-gray-800 p-4 rounded-lg hover:shadow-xl transition-all duration-300"
            >
              <p className="text-gray-300">{comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
