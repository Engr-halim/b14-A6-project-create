import React from "react";

export default function Loading() {
  return (
    <main className="mx-4 my-10 rounded-3xl bg-slate-200 p-6 sm:p-10 animate-pulse">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 md:grid-cols-2">
        <div className="h-72 w-full rounded-3xl bg-slate-300 sm:h-96 md:h-[500px]" />
        <div className="space-y-4">
          <div className="h-6 w-24 rounded-full bg-slate-300" />
          <div className="h-10 w-3/4 rounded-xl bg-slate-300" />
          <div className="h-20 w-full rounded-xl bg-slate-300" />
          <div className="grid grid-cols-2 gap-4">
            <div className="h-20 rounded-2xl bg-slate-300" />
            <div className="h-20 rounded-2xl bg-slate-300" />
            <div className="h-20 rounded-2xl bg-slate-300" />
            <div className="h-20 rounded-2xl bg-slate-300" />
          </div>
        </div>
      </div>
    </main>
  );
}
