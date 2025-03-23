
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

/**
 * Calculate royalty based on input parameters
 */
export const calculateRoyalty = async (data: RoyaltyCalculationRequest): Promise<RoyaltyCalculationResponse> => {
  try {
    // Validate input data before sending request
    if (isNaN(data.water_gel) || isNaN(data.nh4no3) || isNaN(data.powder_factor)) {
      throw new Error('Invalid input: All values must be valid numbers');
    }
    
    if (data.water_gel < 0 || data.nh4no3 < 0 || data.powder_factor <= 0) {
      throw new Error('Invalid input: Values must be greater than zero');
    }
    
    // Use the endpoint with the prefix
    const endpoint = `${API_BASE_URL}/royalty/api/calculate-royalty`;
    console.log('Calling API endpoint:', endpoint);
    console.log('With data:', data);
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout
    
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API error:', response.status, errorText);
        
        // Try to parse error as JSON
        let errorMessage;
        try {
          const errorJson = JSON.parse(errorText);
          errorMessage = errorJson.error || `API error: ${response.status}`;
        } catch {
          errorMessage = `API error: ${response.status} - ${errorText || response.statusText}`;
        }
        
        throw new Error(errorMessage);
      }
      
      const result = await response.json();
      console.log('API response:', result);
      return result;
    } catch (fetchError: any) {
      clearTimeout(timeoutId);
      
      if (fetchError.name === 'AbortError') {
        throw new Error('Request timeout: The server took too long to respond');
      }
      
      // Connection errors usually mean the backend is not running
      if (fetchError instanceof TypeError && fetchError.message.includes('fetch')) {
        throw new Error('Connection failed: Please ensure the backend server is running');
      }
      
      throw fetchError;
    }
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};