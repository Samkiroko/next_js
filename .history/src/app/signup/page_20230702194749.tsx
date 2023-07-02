'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Axios } from 'axios';

export default function SignupPage() {
  const [user, setUser] = React.useState({
    username: '',
    password: '',
    email: '',
  });
  const onSignup = async () => {};
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign up</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2"
              htmlFor="name"
            >
              username
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-400 dark:border-gray-700 rounded-md focus:outline-none focus:ring-orange-500"
              type="text"
              id="username"
              placeholder="Enter your name"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
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
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
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
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <button
            onAbort={onSignup}
            className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold py-2 px-4 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          >
            Sign up
          </button>
          <Link href="/login">Visit the login page</Link>
        </form>
      </div>
    </div>
  );
}
