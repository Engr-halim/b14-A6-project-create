
import React from "react";

const getLibrary = async () => {
  'use cache';
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!response.ok) {
    throw new Error("Failed to fetch library data");
  }

  const data = await response.json();

  return data;
};

const Library = async () => {
  const libraryData = await getLibrary();

  return (
    <main className="min-h-screen bg-[#0b0b0b] px-5 py-12 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-lime-400">
              Your Training Collection
            </p>

            <h1 className="text-4xl font-black sm:text-5xl">
              THE <span className="text-lime-400">LIBRARY.</span>
            </h1>

            <p className="mt-3 text-sm text-gray-400 sm:text-base">
              Explore powerful workouts and build your strength.
            </p>
          </div>

          <div className="w-fit rounded-2xl border border-white/10 bg-white/5 px-5 py-3">
            <p className="text-xs text-gray-400">Total Workouts</p>
            <p className="mt-1 text-2xl font-bold text-lime-400">
              {libraryData.length}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {libraryData.map((workout) => (
            <article
              key={workout.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#151515] transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/50"
            >
    
              <div className="relative h-56 overflow-hidden">
                <img
                  src={workout.image}
                  alt={workout.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-xs backdrop-blur-md">
                  {workout.difficulty}
                </span>

                <div className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1.5 text-sm backdrop-blur-md">
                  <span className="text-yellow-400">★</span>{" "}
                  {workout.rating}
                </div>

                <div className="absolute bottom-4 left-4">
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-lime-400">
                    Workout #{String(workout.id).padStart(2, "0")}
                  </p>

                  <h2 className="text-2xl font-extrabold">
                    {workout.name}
                  </h2>
                </div>
              </div>
              <div className="p-5">
                <div className="mb-4 flex flex-wrap gap-2">
                  {workout.muscleGroups?.map((muscle) => (
                    <span
                      key={muscle}
                      className="rounded-full bg-lime-400/10 px-3 py-1 text-xs text-lime-300"
                    >
                      {muscle}
                    </span>
                  ))}
                </div>

                <p className="mb-5 line-clamp-2 min-h-12 text-sm leading-6 text-gray-400">
                  {workout.description}
                </p>
                <div className="grid grid-cols-3 gap-2 border-y border-white/10 py-4">
                  <div>
                    <p className="text-lg font-bold">
                      {workout.duration}{" "}
                      <span className="text-xs font-normal text-gray-400">
                        min
                      </span>
                    </p>
                    <p className="mt-1 text-xs text-gray-500">Duration</p>
                  </div>

                  <div className="border-x border-white/10 px-3">
                    <p className="text-lg font-bold">
                      {workout.caloriesBurned}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">Calories</p>
                  </div>

                  <div className="pl-2">
                    <p className="text-lg font-bold">{workout.sets}</p>
                    <p className="mt-1 text-xs text-gray-500">Sets</p>
                  </div>
                </div>

                {/* Equipment */}
                <div className="mt-4">
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Equipment
                  </p>

                  <p className="mt-1 text-sm text-gray-200">
                    {workout.equipment}
                  </p>
                </div>

                {/* Reps */}
                <div className="mt-3">
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Reps
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    {workout.reps}
                  </p>
                </div>
                <a
                  href={`/workout/${workout.id}`}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-lime-400 px-4 py-3 text-sm font-extrabold text-black transition-colors hover:bg-lime-300"
                >
                  View Details <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div>
      
        </div>
        {libraryData.length === 0 && (
          <div className="rounded-3xl border border-white/10 bg-white/5 py-16 text-center">
            <p className="text-xl font-bold">No workouts found</p>
            <p className="mt-2 text-sm text-gray-400">
              Your workout collection is empty.
            </p>
          </div>
        )}

      </div>
    </main>
  );
};

export default Library;
