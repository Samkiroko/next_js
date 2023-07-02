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
        <input type="text" name="username" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
