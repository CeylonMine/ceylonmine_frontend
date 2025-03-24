// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

// interface RoyaltyCalculationRequest {
//   water_gel: number;
//   nh4no3: number;
//   powder_factor: number;
// }

// interface RoyaltyCalculationResponse {
//   calculation_date: string;
//   inputs: {
//     water_gel_kg: number;
//     nh4no3_kg: number;
//     powder_factor: number;
//   };
//   calculations: {
//     total_explosive_quantity: number;
//     basic_volume: number;
//     blasted_rock_volume: number;
//     base_royalty: number;
//     royalty_with_sscl: number;
//     total_amount_with_vat: number;
//   };
//   rates_applied: {
//     royalty_rate_per_cubic_meter: number;
//     sscl_rate: string;
//     vat_rate: string;
//   };
// }

// /**
//  * Calculate royalty based on input parameters
//  */
// export const calculateRoyalty = async (data: RoyaltyCalculationRequest): Promise<RoyaltyCalculationResponse> => {
//   try {
//     // Use the endpoint with the blueprint prefix
//     const endpoint = `${API_BASE_URL}/royalty/calculate`;
//     console.log('Calling API endpoint:', endpoint);
    
//     const response = await fetch(endpoint, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify(data),
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error('API error:', response.status, errorText);
//       throw new Error(`API error: ${response.status} - ${errorText || response.statusText}`);
//     }

//     return await response.json();
//   } catch (error) {
//     console.error('API call failed:', error);
//     throw error;
//   }
// };

//JANIDUUUUUUUU
// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// interface RoyaltyCalculationRequest {
//   water_gel: number;
//   nh4no3: number;
//   powder_factor: number;
// }

// interface RoyaltyCalculationResponse {
//   calculation_date: string;
//   inputs: {
//     water_gel_kg: number;
//     nh4no3_kg: number;
//     powder_factor: number;
//   };
//   calculations: {
//     total_explosive_quantity: number;
//     basic_volume: number;
//     blasted_rock_volume: number;
//     base_royalty: number;
//     royalty_with_sscl: number;
//     total_amount_with_vat: number;
//   };
//   rates_applied: {
//     royalty_rate_per_cubic_meter: number;
//     sscl_rate: string;
//     vat_rate: string;
//   };
// }

// export const calculateRoyalty = async (data: RoyaltyCalculationRequest): Promise<RoyaltyCalculationResponse> => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/calculate-royalty`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     return await response.json();
//   } catch (error) {
//     console.error('API call failed:', error);
//     throw error;
//   }
// }; 

// API URL configuration with environment-based fallback
// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// interface RoyaltyCalculationRequest {
//   water_gel: number;
//   nh4no3: number;
//   powder_factor: number;
// }

// interface RoyaltyCalculationResponse {
//   calculation_date: string;
//   inputs: {
//     water_gel_kg: number;
//     nh4no3_kg: number;
//     powder_factor: number;
//   };
//   calculations: {
//     total_explosive_quantity: number;
//     basic_volume: number;
//     blasted_rock_volume: number;
//     base_royalty: number;
//     royalty_with_sscl: number;
//     total_amount_with_vat: number;
//   };
//   rates_applied: {
//     royalty_rate_per_cubic_meter: number;
//     sscl_rate: string;
//     vat_rate: string;
//   };
// }

// export const calculateRoyalty = async (data: RoyaltyCalculationRequest): Promise<RoyaltyCalculationResponse> => {
//   try {
//     const response = await fetch(${API_BASE_URL}/calculate-royalty, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });

//     if (!response.ok) {
//       throw new Error(HTTP error! status: ${response.status});
//     }

//     return await response.json();
//   } catch (error) {
//     console.error('API call failed:', error);
//     throw error;
//   }
// }; 

// API URL configuration with environment-based fallback
// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// interface RoyaltyCalculationRequest {
//   water_gel: number;
//   nh4no3: number;
//   powder_factor: number;
// }

// interface RoyaltyCalculationResponse {
//   calculation_date: string;
//   inputs: {
//     water_gel_kg: number;
//     nh4no3_kg: number;
//     powder_factor: number;
//   };
//   calculations: {
//     total_explosive_quantity: number;
//     basic_volume: number;
//     blasted_rock_volume: number;
//     base_royalty: number;
//     royalty_with_sscl: number;
//     total_amount_with_vat: number;
//   };
//   rates_applied: {
//     royalty_rate_per_cubic_meter: number;
//     sscl_rate: string;
//     vat_rate: string;
//   };
// }

// export const calculateRoyalty = async (data: RoyaltyCalculationRequest): Promise<RoyaltyCalculationResponse> => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/calculate-royalty`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     return await response.json();
//   } catch (error) {
//     console.error('API call failed:', error);
//     throw error;
//   }
// }; 

// API URL configuration with environment-based fallback
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

interface RoyaltyCalculationRequest {
  water_gel: number;
  nh4no3: number;
  powder_factor: number;
}

interface RoyaltyCalculationResponse {
  calculation_date: string;
  inputs: {
    water_gel_kg: number;
    nh4no3_kg: number;
    powder_factor: number;
  };
  calculations: {
    total_explosive_quantity: number;
    basic_volume: number;
    blasted_rock_volume: number;
    base_royalty: number;
    royalty_with_sscl: number;
    total_amount_with_vat: number;
  };
  rates_applied: {
    royalty_rate_per_cubic_meter: number;
    sscl_rate: string;
    vat_rate: string;
  };
}

// Constants for royalty calculation
const RATES = {
  ROYALTY_RATE_PER_CUBIC_METER: 150, // Rs. per cubic meter
  SSCL_RATE: 0.01, // 1%
  VAT_RATE: 0.15, // 15%
};

/**
 * Calculate royalty based on input parameters without backend dependency
 */
export const calculateRoyalty = async (data: RoyaltyCalculationRequest): Promise<RoyaltyCalculationResponse> => {
  try {
    // Validate input data
    if (isNaN(data.water_gel) || isNaN(data.nh4no3) || isNaN(data.powder_factor)) {
      throw new Error('Invalid input: All values must be valid numbers');
    }
    
    if (data.water_gel < 0 || data.nh4no3 < 0 || data.powder_factor <= 0) {
      throw new Error('Invalid input: Values must be greater than zero');
    }

    // Calculate total explosive quantity
    const total_explosive_quantity = data.water_gel + data.nh4no3;

    // Calculate blasted rock volume using powder factor
    // Powder Factor = Total Explosive / Rock Volume
    // Therefore, Rock Volume = Total Explosive / Powder Factor
    const blasted_rock_volume = total_explosive_quantity / data.powder_factor;

    // Calculate base royalty
    const base_royalty = blasted_rock_volume * RATES.ROYALTY_RATE_PER_CUBIC_METER;

    // Calculate SSCL amount
    const sscl_amount = base_royalty * RATES.SSCL_RATE;
    const royalty_with_sscl = base_royalty + sscl_amount;

    // Calculate VAT
    const vat_amount = royalty_with_sscl * RATES.VAT_RATE;
    const total_amount_with_vat = royalty_with_sscl + vat_amount;

    // Prepare response
    const response: RoyaltyCalculationResponse = {
      calculation_date: new Date().toISOString(),
      inputs: {
        water_gel_kg: data.water_gel,
        nh4no3_kg: data.nh4no3,
        powder_factor: data.powder_factor
      },
      calculations: {
        total_explosive_quantity,
        basic_volume: blasted_rock_volume, // Same as blasted_rock_volume in this case
        blasted_rock_volume,
        base_royalty,
        royalty_with_sscl,
        total_amount_with_vat
      },
      rates_applied: {
        royalty_rate_per_cubic_meter: RATES.ROYALTY_RATE_PER_CUBIC_METER,
        sscl_rate: `${RATES.SSCL_RATE * 100}%`,
        vat_rate: `${RATES.VAT_RATE * 100}%`
      }
    };

    return response;
  } catch (error) {
    console.error('Royalty calculation failed:', error);
    throw error;
  }
};