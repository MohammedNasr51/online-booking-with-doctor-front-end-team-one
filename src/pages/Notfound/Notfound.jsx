import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-blue-600 mb-4 md:animate-pulse">
            404
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 md:text-lg leading-relaxed text-xs w-[80%] mx-auto md:w-auto">
            Sorry, the page you are looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back to finding the right doctor.
          </p>
        </div>

        {/* Medical Icon */}
        <div className="mb-8">
          <div className="w-16 h-16 md:w-24 md:h-24 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 md:w-12 md:h-12 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM9 9V6h2v3h3v2h-3v3H9v-3H6V9h3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="space-y-4">
          <Link
            to="/"
            className=" inline-block bg-blue-600 hover:bg-blue-700 text-white md:font-semibold py-1 md:py-3 px-4 md:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Back to Home
          </Link>

          <div className="text-sm text-gray-500">
            Or try searching for what you need
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="hidden md:block md:absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-50 animate-bounce"></div>
        <div className="hidden md:block md:absolute bottom-10 right-10 w-16 h-16 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="hidden md:block md:absolute top-1/2 left-4 w-12 h-12 bg-blue-50 rounded-full opacity-40"></div>
      </div>
    </div>
  );
}
