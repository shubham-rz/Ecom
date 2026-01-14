import React from "react";

const MiniProjects = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      {/* Page Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          Mini Projects 🚀
        </h1>
        <p className="mt-3 text-gray-600">
          A collection of small projects to practice and showcase skills.
        </p>
      </div>

      {/* Empty State / Placeholder */}
      <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-white py-20 text-center shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-gray-800">
          No projects added yet
        </h2>
        <p className="mb-6 max-w-md text-gray-500">
          Start adding your mini projects here. Each project can include a title,
          description, and live demo or GitHub link.
        </p>

        <button className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">
          Add First Project
        </button>
      </div>
    </div>
  );
};

export default MiniProjects;
