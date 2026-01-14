// src/pages/NotFound.jsx
import React from 'react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 text-center">
      <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-red-500 drop-shadow-lg">
        404
      </h1>

      <h2 className="mb-3 text-2xl font-semibold text-white">
        Page Not Found 🚫
      </h2>

      <p className="mb-8 max-w-md text-gray-400">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>

      <a
        href="/"
        className="rounded-lg bg-red-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-red-600 hover:shadow-red-500/40 focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        Go Back Home
      </a>
    </div>
  );
}

