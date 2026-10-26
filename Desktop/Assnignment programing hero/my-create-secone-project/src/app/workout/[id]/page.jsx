import { BiAddToQueue } from "react-icons/bi";
import { BiBookmarks } from "react-icons/bi";
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

export async function generateStaticParams() {
  const libraryData = await getLibrary();
  return libraryData.map((workout) => ({
    id: String(workout.id),
  }));
}

const Detailspage = async ({ params }) => {
  const { id } = await params;

  const libraryData = await getLibrary();

  const workout = libraryData.find(
    (workout) => String(workout.id) === String(id)
  );

  if (!workout) {
    return (
      <div className="p-10 text-center text-white">
        <h1 className="text-2xl font-bold">Workout not found!</h1>
      </div>
    );
  }

  return (

<main className="mx-4 my-10 rounded-3xl bg-base-200 p-6 sm:p-10 bg-slate-200">
  <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 md:grid-cols-2">

    
    <div className="overflow-hidden rounded-3xl">
      <img
        src={workout.image}
        alt={workout.name}
        className="h-72 w-full rounded-3xl object-cover sm:h-96 md:h-[500px]"
      />
    </div>


    <div className="min-w-0">

      
      <span className="inline-block rounded-full bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-500">
        {workout.difficulty}
      </span>

      <h1 className="mt-5 text-3xl font-extrabold sm:text-4xl">
        {workout.name}
      </h1>

      <p className="mt-4 leading-7 text-base-content/70">
        {workout.description}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="rounded-2xl border border-base-300 p-4">
          <p className="text-sm text-base-content/60">Duration</p>
          <p className="mt-2 text-xl font-bold">
            {workout.duration} min
          </p>
        </div>

        <div className="rounded-2xl border border-base-300 p-4">
          <p className="text-sm text-base-content/60">Calories</p>
          <p className="mt-2 text-xl font-bold">
            {workout.caloriesBurned} kcal
          </p>
        </div>

        <div className="rounded-2xl border border-base-300 p-4">
          <p className="text-sm text-base-content/60">Sets</p>
          <p className="mt-2 text-xl font-bold">{workout.sets}</p>
        </div>

        <div className="rounded-2xl border border-base-300 p-4">
          <p className="text-sm text-base-content/60">Rating</p>
          <p className="mt-2 text-xl font-bold">
            ⭐ {workout.rating}
          </p>
        </div>
      </div>
      <div className="mt-6 rounded-2xl border border-base-300 p-5">
        <h2 className="text-xl font-bold">Workout Information</h2>

        <div className="mt-4 space-y-3">
          <p>
            <span className="font-semibold">Equipment:</span>{" "}
            {workout.equipment}
          </p>

          <p>
            <span className="font-semibold">Reps:</span>{" "}
            {workout.reps}
          </p>

          <p>
            <span className="font-semibold">Muscle Groups:</span>{" "}
            {workout.muscleGroups?.join(", ")}
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-base-300 p-5">
        <h2 className="text-xl font-bold">Workout Instructions</h2>

        <ol className="mt-4 list-inside list-decimal space-y-3">
          {workout.instructions?.map((instruction, index) => (
            <li key={index} className="leading-7 text-base-content/70">
              {instruction}
            </li>
          ))}
        </ol>
    
<div className="grid grid-cols-2 gap-3">
  <button className="flex items-center justify-center gap-2 bg-amber-300 rounded-2xl p-3 hover:bg-amber-400 transition">
    Add to day plan <BiAddToQueue />
  </button>

  <button className="flex items-center justify-center gap-2 bg-slate-500 text-white rounded-2xl p-3 hover:bg-slate-600 transition">
    Save for later <BiBookmarks />
  </button>
</div>
      </div>
      <div>
      </div>
    </div>
    <div>
    </div>
  </div>
</main>

  );
};

export default Detailspage;
