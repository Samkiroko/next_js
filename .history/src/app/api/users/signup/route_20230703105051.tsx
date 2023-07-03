import { connect } from '@/src/dbconfig/dbConfig';
import User from '@/src/models/userModel';
import bcryptjs from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    console.log(reqBody);

    // Check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save user
    const savedUser = await newUser.save();
    console.log(savedUser);

    return NextResponse.json({
      message: 'User created successfully',
      success: true,
      user: savedUser,
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }), { status: 500 };
  }
}
