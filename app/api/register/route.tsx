import { connectMongoDB } from "@/lib2/mongodb";
import User from "@/models/user";
// import { connect } from "http2";
import { NextResponse } from "next/server";
import bycrypt from "bcryptjs";

export async function POST(req:any) {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword=await bycrypt.hash(password,10);
    await connectMongoDB();
    await User.create({name,email,password:hashedPassword});

    
    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    console.error("Error during registration:", error);
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
