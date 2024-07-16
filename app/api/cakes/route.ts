import { connectMongoDB } from "@/lib2/mongodb";
import Cake from '@/models/cake';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  await connectMongoDB();

  try {
    const body = await req.json();
    const cake = await Cake.create(body);
    return NextResponse.json({ success: true, data: cake }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
  }
}

// this code for get the data to the database::

export async function GET(_req: NextRequest) {
  await connectMongoDB();

  try {
    const cakes = await Cake.find().exec();
    return NextResponse.json({ success: true, data: cakes }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}




