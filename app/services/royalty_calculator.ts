// Royalty calculation service - cleaned up version

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
 * Calculate royalty locally in the frontend based on input parameters
 * Following the formula:
 * 
 * Step 1: Calculate Total Explosive Quantity (TEQ)
 * TEQ = (Water Gel × 1.2) + (NH4NO3)
 * 
 * Step 2: Determine Blasted Rock Volume
 * Expanded Blasted Rock Volume = (TEQ × 1.6) / (Powder Factor × 2.83)
 * 
 * Step 3: Calculate Royalty Fee
 * Royalty = Blasted Rock Volume × 240
 * 
 * Step 4: Apply Additional Charges
 * SSCL (2.56%): Royalty with SSCL = Royalty × 1.0256
 * VAT (18%): Total Amount Due = Royalty with SSCL × 1.18
 */
export const calculateRoyalty = async (data: RoyaltyCalculationRequest): Promise<RoyaltyCalculationResponse> => {
  try {
    // Extract input values
    const { water_gel, nh4no3, powder_factor } = data;
    
    // Validate inputs
    if (isNaN(water_gel) || isNaN(nh4no3) || isNaN(powder_factor)) {
      throw new Error('All values must be valid numbers');
    }
    
    if (water_gel < 0 || nh4no3 < 0 || powder_factor <= 0) {
      throw new Error('Values must be greater than zero');
    }
    
    // Step 1: Calculate Total Explosive Quantity (TEQ)
    const totalExplosiveQuantity = (water_gel * 1.2) + nh4no3;
    
    // Step 2: Determine Blasted Rock Volume
    // Basic volume (TEQ / Powder Factor)
    const basicVolume = totalExplosiveQuantity / powder_factor;
    
    // Expanded Blasted Rock Volume = (TEQ × 1.6) / (Powder Factor × 2.83)
    const blastedRockVolume = (totalExplosiveQuantity * 1.6) / (powder_factor * 2.83);
    
    // Step 3: Calculate Royalty Fee (Base Royalty)
    // Royalty = Blasted Rock Volume × 240
    const baseRoyalty = blastedRockVolume * 240;
    
    // Step 4: Apply Additional Charges
    // SSCL (2.56%): Royalty with SSCL = Royalty × 1.0256
    const royaltyWithSSCL = baseRoyalty * 1.0256;
    
    // VAT (18%): Total Amount Due = Royalty with SSCL × 1.18
    const totalAmountWithVAT = royaltyWithSSCL * 1.18;
    
    // Create response object
    const response: RoyaltyCalculationResponse = {
      calculation_date: new Date().toISOString(),
      inputs: {
        water_gel_kg: water_gel,
        nh4no3_kg: nh4no3,
        powder_factor: powder_factor
      },
      calculations: {
        total_explosive_quantity: totalExplosiveQuantity,
        basic_volume: basicVolume,
        blasted_rock_volume: blastedRockVolume,
        base_royalty: baseRoyalty,
        royalty_with_sscl: royaltyWithSSCL,
        total_amount_with_vat: totalAmountWithVAT
      },
      rates_applied: {
        royalty_rate_per_cubic_meter: 240,
        sscl_rate: '2.56%',
        vat_rate: '18%'
      }
    };
    
    return response;
  } catch (error) {
    console.error('Royalty calculation failed:', error);
    throw error;
  }
}; 