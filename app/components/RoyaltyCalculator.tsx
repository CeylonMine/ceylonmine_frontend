'use client';

import { useState, FormEvent, useContext } from 'react';
import { toast } from 'react-hot-toast';
import { calculateRoyalty } from '../services/royalty_calculator';

interface RoyaltyData {
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

interface RoyaltyCalculatorProps {
  onCalculated: (data: RoyaltyData) => void;
}

export default function RoyaltyCalculator({ onCalculated }: RoyaltyCalculatorProps) {
  const [waterGel, setWaterGel] = useState('');
  const [nh4no3, setNh4no3] = useState('');
  const [powderFactor, setPowderFactor] = useState('');
  const [loading, setLoading] = useState(false);
  const [royaltyData, setRoyaltyData] = useState<RoyaltyData | null>(null);
  
  // Check for dark mode from localStorage to maintain theme consistency
  const isDarkMode = typeof window !== 'undefined' ? 
    localStorage.getItem('theme') !== 'light' : true;

  const handleCalculateRoyalty = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Input validation
      const waterGelValue = parseFloat(waterGel);
      const nh4no3Value = parseFloat(nh4no3);
      const powderFactorValue = parseFloat(powderFactor);

      if (isNaN(waterGelValue) || isNaN(nh4no3Value) || isNaN(powderFactorValue)) {
        throw new Error('All values must be valid numbers');
      }

      if (waterGelValue < 0 || nh4no3Value < 0 || powderFactorValue <= 0) {
        throw new Error('All values must be greater than zero');
      }

      // Calculate royalty in the frontend using our service
      const data = await calculateRoyalty({
        water_gel: waterGelValue,
        nh4no3: nh4no3Value,
        powder_factor: powderFactorValue
      });
      
      setRoyaltyData(data);
      onCalculated(data);
      toast.success('Royalty calculated successfully!');
    } catch (error) {
      console.error('Error calculating royalty:', error);
      let errorMessage = 'Failed to calculate royalty. Please try again.';
      
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setWaterGel('');
    setNh4no3('');
    setPowderFactor('');
    setRoyaltyData(null);
    toast.success('Calculator reset');
  };

  // Define dynamic classes based on theme
  const inputClass = isDarkMode 
    ? "w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
    : "w-full px-4 py-2 rounded-md bg-white border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500";
  
  const resultsPanelClass = isDarkMode 
    ? "mt-8 p-6 bg-gray-800 rounded-lg"
    : "mt-8 p-6 bg-gray-100 rounded-lg shadow-md";
  
  const resultsSectionClass = isDarkMode 
    ? "p-4 bg-gray-700 rounded-lg"
    : "p-4 bg-white rounded-lg shadow-sm";

  return (
    <div className="space-y-8">
      <form onSubmit={handleCalculateRoyalty} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="waterGel" className="block text-sm font-medium mb-2">
              Water Gel (kg)
            </label>
            <input
              id="waterGel"
              type="number"
              step="0.01"
              value={waterGel}
              onChange={(e) => setWaterGel(e.target.value)}
              className={inputClass}
              required
            />
          </div>

          <div>
            <label htmlFor="nh4no3" className="block text-sm font-medium mb-2">
              NH4NO3 (kg)
            </label>
            <input
              id="nh4no3"
              type="number"
              step="0.01"
              value={nh4no3}
              onChange={(e) => setNh4no3(e.target.value)}
              className={inputClass}
              required
            />
          </div>

          <div>
            <label htmlFor="powderFactor" className="block text-sm font-medium mb-2">
              Powder Factor
            </label>
            <input
              id="powderFactor"
              type="number"
              step="0.001"
              value={powderFactor}
              onChange={(e) => setPowderFactor(e.target.value)}
              className={inputClass}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Calculating...' : 'Calculate Royalty'}
        </button>
      </form>

      {royaltyData && (
        <div className={resultsPanelClass}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Royalty Calculation Results</h2>
            <div>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm font-medium transition-colors"
              >
                Reset
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={resultsSectionClass}>
                <h3 className={isDarkMode ? "text-sm font-medium text-gray-400 mb-2" : "text-sm font-medium text-gray-600 mb-2"}>Explosive Quantities</h3>
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span>Total Explosive Quantity:</span>
                    <span>{royaltyData.calculations.total_explosive_quantity.toFixed(2)} kg</span>
                  </p>
                  <div className={isDarkMode ? "border-t border-gray-600 my-2" : "border-t border-gray-200 my-2"} />
                  <p className="flex justify-between text-sm">
                    <span>Water Gel:</span>
                    <span>{royaltyData.inputs.water_gel_kg.toFixed(2)} kg</span>
                  </p>
                  <p className="flex justify-between text-sm">
                    <span>NH4NO3:</span>
                    <span>{royaltyData.inputs.nh4no3_kg.toFixed(2)} kg</span>
                  </p>
                </div>
              </div>
              
              <div className={resultsSectionClass}>
                <h3 className={isDarkMode ? "text-sm font-medium text-gray-400 mb-2" : "text-sm font-medium text-gray-600 mb-2"}>Rock Volume</h3>
                <p className="flex justify-between">
                  <span>Blasted Rock Volume:</span>
                  <span>{royaltyData.calculations.blasted_rock_volume.toFixed(2)} m³</span>
                </p>
                <p className="flex justify-between text-sm mt-2">
                  <span>Powder Factor:</span>
                  <span>{royaltyData.inputs.powder_factor.toFixed(3)}</span>
                </p>
              </div>
            </div>

            <div className={resultsSectionClass}>
              <h3 className={isDarkMode ? "text-sm font-medium text-gray-400 mb-2" : "text-sm font-medium text-gray-600 mb-2"}>Payment Details</h3>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span>Base Royalty:</span>
                  <span>Rs. {royaltyData.calculations.base_royalty.toFixed(2)}</span>
                </p>
                <p className="flex justify-between text-sm">
                  <span>SSCL ({royaltyData.rates_applied.sscl_rate}):</span>
                  <span>Rs. {(royaltyData.calculations.royalty_with_sscl - royaltyData.calculations.base_royalty).toFixed(2)}</span>
                </p>
                <p className="flex justify-between text-sm">
                  <span>VAT ({royaltyData.rates_applied.vat_rate}):</span>
                  <span>Rs. {(royaltyData.calculations.total_amount_with_vat - royaltyData.calculations.royalty_with_sscl).toFixed(2)}</span>
                </p>
                <div className={isDarkMode ? "border-t border-gray-600 my-2" : "border-t border-gray-200 my-2"} />
                <p className="flex justify-between font-semibold">
                  <span>Total Amount Due:</span>
                  <span>Rs. {royaltyData.calculations.total_amount_with_vat.toFixed(2)}</span>
                </p>
              </div>
            </div>
            
            <div className={resultsSectionClass}>
              <h3 className={isDarkMode ? "text-sm font-medium text-gray-400 mb-2" : "text-sm font-medium text-gray-600 mb-2"}>Calculation Details</h3>
              <div className="space-y-2">
                <p className="flex justify-between text-sm">
                  <span>Royalty Rate:</span>
                  <span>Rs. {royaltyData.rates_applied.royalty_rate_per_cubic_meter} per m³</span>
                </p>
                <p className="flex justify-between text-sm">
                  <span>Calculation Date:</span>
                  <span>{new Date(royaltyData.calculation_date).toLocaleString()}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 