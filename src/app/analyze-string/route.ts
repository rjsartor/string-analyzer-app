import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const backendUrl = 'http://localhost:3001/analyze-string';
    const body = await req.json();

    const response = await axios.post(backendUrl, {
      data: body.inputValue,
    });
    return NextResponse.json(response.data, { status: response.status });
  } catch (error: any) {
    console.error('Error: ', error.message);
    return new NextResponse('Error', { status: 500 });
  }
}