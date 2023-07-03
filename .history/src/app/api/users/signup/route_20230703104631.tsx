import { connect } from '@/src/dbconfig/dbConfig';
import User from '@/src/models/userModel';
import bcryptjs from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, email, password } = reqBody;

    console.log(reqBody);

    // Check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 400 }
      );
    }
  } catch (err: any) {
    return NextResponse.json({ message: err.message }), { status: 500 };
  }
}
