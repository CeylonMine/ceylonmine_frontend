// // import { NextResponse } from 'next/server';

// // export async function POST(request: Request) {
// //   try {
// //     const body = await request.json();
    
// //     // Call your Flask backend here
// //     const response = await fetch('http://127.0.0.1:5000/royalty/calculate', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify(body),
// //     });

// //     if (!response.ok) {
// //       throw new Error('Failed to calculate royalty');
// //     }

// //     const data = await response.json();
// //     return NextResponse.json(data);
// //   } catch (error) {
// //     console.error('Error calculating royalty:', error);
// //     return NextResponse.json(
// //       { error: 'Failed to calculate royalty' },
// //       { status: 500 }
// //     );
// //   }
// // } 


// import { NextResponse } from 'next/server';

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
    
//     // Basic validation
//     if (!body || typeof body !== 'object') {
//       return NextResponse.json(
//         { error: 'Invalid request body' },
//         { status: 400 }
//       );
//     }
    
//     const { water_gel, nh4no3, powder_factor } = body;
    
//     // Validate required fields
//     if (water_gel === undefined || nh4no3 === undefined || powder_factor === undefined) {
//       return NextResponse.json(
//         { error: 'Missing required fields: water_gel, nh4no3, powder_factor' },
//         { status: 400 }
//       );
//     }
    
//     // Validate numeric values
//     if (isNaN(water_gel) || isNaN(nh4no3) || isNaN(powder_factor)) {
//       return NextResponse.json(
//         { error: 'All values must be valid numbers' },
//         { status: 400 }
//       );
//     }
    
//     // Validate positive values
//     if (water_gel < 0 || nh4no3 < 0 || powder_factor <= 0) {
//       return NextResponse.json(
//         { error: 'Values must be greater than zero' },
//         { status: 400 }
//       );
//     }
    
//     // Log the request for debugging
//     console.log('Sending request to Flask backend:', body);
    
//     // Call your Flask backend here
//     // Make sure the Flask server is running at this address
//     const response = await fetch('https://ceylonminebackend.up.railway.app/royalty/calculate', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(body),
//       // Add timeout to avoid long wait times
//       signal: AbortSignal.timeout(10000), // 10 seconds timeout
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error('Backend error:', response.status, errorText);
//       return NextResponse.json(
//         { error: `Backend error: ${response.status} - ${errorText || response.statusText}` },
//         { status: response.status }
//       );
//     }

//     const data = await response.json();
//     console.log('Received from backend:', data);
//     return NextResponse.json(data);
//   } catch (error) {
//     console.error('Error calculating royalty:', error);
//     let errorMessage = 'Failed to calculate royalty';
    
//     // More detailed error for connection issues
//     if (error instanceof TypeError && error.message.includes('fetch')) {
//       errorMessage = 'Failed to connect to the backend server. Please make sure the backend is running.';
//     } else if (error instanceof Error) {
//       errorMessage = error.message;
//     }
    
//     return NextResponse.json(
//       { error: errorMessage },
//       { status: 500 }
//     );
//   }
// } 