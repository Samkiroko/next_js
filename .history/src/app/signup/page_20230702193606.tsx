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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg p-8 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign up</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-blue-500"
              type="text"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-blue-500"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-blue-500"
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
