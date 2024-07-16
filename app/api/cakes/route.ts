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

// If you have other methods like GET, PUT, DELETE, you can define them similarly
