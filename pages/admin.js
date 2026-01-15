import Link from "next/link";

export default function Admin() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-10">
      <h1 className="text-3xl font-bold text-indigo-600">Admin Dashboard</h1>
      <p className="text-gray-600 mt-2">Manage Sellers, Products & Revenue</p>

      <div className="mt-6 flex flex-col gap-4">
        <Link href="/admin/sellers">
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg">
            Manage Sellers
          </button>
        </Link>

        <Link href="/admin/products">
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg">
            Manage Products
          </button>
        </Link>

        <Link href="/admin/analytics">
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg">
            Analytics
          </button>
        </Link>
      </div>
    </div>
  );
}
