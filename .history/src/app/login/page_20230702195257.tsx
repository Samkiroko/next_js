import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-400 dark:border-gray-700 rounded-md focus:outline-none focus:ring-orange-500"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-400 dark:border-gray-700 rounded-md focus:outline-none focus:ring-orange-500"
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
          <br />
          <Link className="m " href="/login">
            Visit the login page
          </Link>
        </form>
      </div>
    </div>
  );
}
