import { NextResponse } from 'next/server';
import { supabase } from '@/app/utility/supabase';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Sign in with Supabase
    const { data: { user }, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !user) {
      console.error('Login error:', error);
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Get user details from users table
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('role, license_status')
      .eq('id', user.id)
      .single();

    if (userError || !userData) {
      console.error('User data error:', userError);
      return NextResponse.json(
        { error: 'User data not found' },
        { status: 404 }
      );
    }

    // Check license status
    const needsLicensePortal = userData.license_status === 'not_started' || 
                             (userData.role !== 'public' && userData.role !== 'miner' && userData.license_status === 'expired');

    // Generate JWT token with user role and license status
    const token = jwt.sign(
      { 
        userId: user.id, 
        email: user.email, 
        role: userData.role,
        licenseStatus: userData.license_status,
        needsLicensePortal
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Create response with user role and redirect information
    const response = NextResponse.json({
      success: true,
      role: userData.role,
      needsLicensePortal,
      redirectTo: needsLicensePortal ? '/license-portal' : 
                 userData.role === 'public' ? '/' : 
                 userData.role === 'miner' ? '/constructor' : '/'
    });
    
    // Set HTTP-only cookie with token
    response.cookies.set({
      name: 'userToken',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 // 24 hours
    });

    console.log('Login successful:', {
      email: user.email,
      role: userData.role,
      licenseStatus: userData.license_status,
      needsLicensePortal,
      tokenSet: !!token,
      cookieSet: true
    });

    return response;
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 