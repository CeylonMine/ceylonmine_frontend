import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { supabase } from '@/app/utility/supabase';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('userToken');

    if (!token) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    // Verify the token
    const secret = process.env.JWT_SECRET || 'your-secret-key';
    try {
      const decoded = jwt.verify(token.value, secret) as any;
      
      // Get user details from Supabase
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('role, license_status')
        .eq('id', decoded.userId)
        .single();

      if (userError || !userData) {
        return NextResponse.json({ authenticated: false }, { status: 401 });
      }

      return NextResponse.json({
        authenticated: true,
        user: {
          id: decoded.userId,
          email: decoded.email,
          role: userData.role,
          licenseStatus: userData.license_status,
          needsLicensePortal: userData.license_status === 'not_started' || 
                            (userData.role !== 'public' && userData.role !== 'miner' && userData.license_status === 'expired')
        }
      });
    } catch (error) {
      console.error('Token verification failed:', error);
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }
  } catch (error) {
    console.error('Auth check error:', error);
    return NextResponse.json({ authenticated: false }, { status: 500 });
  }
} 