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
    <div className="flex flex-col items-center justify-center min-h-screen py-2  ">
      <h1>Signup Page</h1>
      <form className=" ">
        <label htmlFor="username">Username</label>
        <input
          className="p-2 border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent "
          type="text"
          name="username"
          id="username"
          placeholder="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
