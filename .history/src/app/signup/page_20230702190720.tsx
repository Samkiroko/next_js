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
    </div>
  );
}
