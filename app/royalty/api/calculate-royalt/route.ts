import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Call your Flask backend here
    const response = await fetch('http://127.0.0.1:5000/royalty/calculate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error('Failed to calculate royalty');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error calculating royalty:', error);
    return NextResponse.json(
      { error: 'Failed to calculate royalty' },
      { status: 500 }
    );
  }
} 