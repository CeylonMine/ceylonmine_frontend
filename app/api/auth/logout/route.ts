import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // Create response that will clear the cookie
    const response = NextResponse.json({ success: true });

    // Clear the userToken cookie
    response.cookies.set({
      name: 'userToken',
      value: '',
      expires: new Date(0),
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });

    return response;
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json({ error: 'Logout failed' }, { status: 500 });
  }
}