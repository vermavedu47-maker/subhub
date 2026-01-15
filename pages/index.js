import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-indigo-600">SubHub</h1>
        <p className="text-gray-600 mt-2">
          India’s creator subscription platform
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link href="/login">
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg">
              Login
            </button>
          </Link>

          <Link href="/signup">
            <button className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg">
              Sign Up
            </button>
          </Link>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Sell courses, communities, digital products & subscriptions.
        </p>
      </div>
    </div>
  );
}
