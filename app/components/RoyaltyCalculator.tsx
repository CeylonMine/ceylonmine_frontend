
// 'use client';

// import { useState, FormEvent, useEffect } from 'react';
// import { toast } from 'react-hot-toast';
// import { calculateRoyalty } from '../services/royalty_calculator';

// interface RoyaltyData {
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

// interface RoyaltyCalculatorProps {
//   onCalculated: (data: RoyaltyData) => void;
// }

// interface SavedCalculation {
//   id: string;
//   date: string;
//   waterGel: number;
//   nh4no3: number;
//   powderFactor: number;
//   totalAmount: number;
//   explosiveQuantity: number;
//   blastedVolume: number;
//   dueDate: string;
// }

// export default function RoyaltyCalculator({ onCalculated }: RoyaltyCalculatorProps) {
//   const [waterGel, setWaterGel] = useState('');
//   const [nh4no3, setNh4no3] = useState('');
//   const [powderFactor, setPowderFactor] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [royaltyData, setRoyaltyData] = useState<RoyaltyData | null>(null);
//   const [savedCalculations, setSavedCalculations] = useState<SavedCalculation[]>([]);

//   // Load saved calculations from localStorage on component mount
//   useEffect(() => {
//     const saved = localStorage.getItem('royaltyCalculations');
//     if (saved) {
//       setSavedCalculations(JSON.parse(saved));
//     }
//   }, []);

//   const handleCalculateRoyalty = async (e: FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // Validate inputs
//       if (!waterGel || !nh4no3 || !powderFactor) {
//         toast.error('All fields are required');
//         setLoading(false);
//         return;
//       }

//       const waterGelValue = parseFloat(waterGel);
//       const nh4no3Value = parseFloat(nh4no3);
//       const powderFactorValue = parseFloat(powderFactor);

//       if (isNaN(waterGelValue) || isNaN(nh4no3Value) || isNaN(powderFactorValue)) {
//         toast.error('All inputs must be valid numbers');
//         setLoading(false);
//         return;
//       }

//       if (waterGelValue < 0 || nh4no3Value < 0 || powderFactorValue <= 0) {
//         toast.error('Values must be greater than zero');
//         setLoading(false);
//         return;
//       }

//       // Show a loading toast that will be dismissed when calculation completes
//       const loadingToast = toast.loading('Calculating royalty...');
      
//       try {
//         const data = await calculateRoyalty({
//           water_gel: waterGelValue,
//           nh4no3: nh4no3Value,
//           powder_factor: powderFactorValue
//         });
        
//         toast.dismiss(loadingToast);
//         setRoyaltyData(data);
//         onCalculated(data);
//         toast.success('Royalty calculated successfully!');
//       } catch (apiError) {
//         toast.dismiss(loadingToast);
//         const errorMessage = apiError instanceof Error ? apiError.message : 'Failed to calculate royalty. Please try again.';
        
//         // Display a more helpful message for connection issues
//         if (errorMessage.includes('Connection failed') || errorMessage.includes('Failed to fetch')) {
//           toast.error('Cannot connect to the backend server. Please ensure the backend is running.');
//           console.error('Backend connection error:', apiError);
//         } else {
//           toast.error(errorMessage);
//           console.error('API error:', apiError);
//         }
//       }
//     } catch (error) {
//       console.error('Error in royalty calculation function:', error);
//       const errorMessage = error instanceof Error ? error.message : 'Failed to calculate royalty. Please try again.';
//       toast.error(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSaveCalculation = () => {
//     if (!royaltyData) return;

//     // Check if this calculation has already been saved
//     const existingSaved = localStorage.getItem('royaltyCalculations');
//     const savedCalculations = existingSaved ? JSON.parse(existingSaved) : [];
    
//     // Create new calculation object
//     const newCalculation: SavedCalculation = {
//       id: Date.now().toString(),
//       date: new Date().toISOString(),
//       waterGel: parseFloat(waterGel),
//       nh4no3: parseFloat(nh4no3),
//       powderFactor: parseFloat(powderFactor),
//       totalAmount: royaltyData.calculations.total_amount_with_vat,
//       explosiveQuantity: royaltyData.calculations.total_explosive_quantity,
//       blastedVolume: royaltyData.calculations.blasted_rock_volume,
//       dueDate: royaltyData.calculation_date
//     };

//     // Check if this exact calculation already exists
//     const isDuplicate = savedCalculations.some((calc: SavedCalculation) => 
//       calc.waterGel === newCalculation.waterGel &&
//       calc.nh4no3 === newCalculation.nh4no3 &&
//       calc.powderFactor === newCalculation.powderFactor &&
//       calc.totalAmount === newCalculation.totalAmount
//     );

//     if (isDuplicate) {
//       toast.error('This calculation has already been saved');
//       return;
//     }

//     // Add only the new calculation
//     const updatedCalculations = [...savedCalculations, newCalculation];
//     localStorage.setItem('royaltyCalculations', JSON.stringify(updatedCalculations));
    
//     // Update the mining stats
//     onCalculated({
//       ...royaltyData,
//       calculation_date: new Date().toISOString()
//     });
    
//     toast.success('Calculation saved successfully!');

//     // Reset form after successful save
//     handleReset();
//   };

//   const handleReset = () => {
//     setWaterGel('');
//     setNh4no3('');
//     setPowderFactor('');
//     setRoyaltyData(null);
//     toast.success('Calculator reset');
//   };

//   return (
//     <div className="space-y-8">
//       <form onSubmit={handleCalculateRoyalty} className="space-y-6">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div>
//             <label htmlFor="waterGel" className="block text-sm font-medium mb-2">
//               Water Gel (kg)
//             </label>
//             <input
//               id="waterGel"
//               type="number"
//               step="0.01"
//               value={waterGel}
//               onChange={(e) => setWaterGel(e.target.value)}
//               className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="nh4no3" className="block text-sm font-medium mb-2">
//               NH4NO3 (kg)
//             </label>
//             <input
//               id="nh4no3"
//               type="number"
//               step="0.01"
//               value={nh4no3}
//               onChange={(e) => setNh4no3(e.target.value)}
//               className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="powderFactor" className="block text-sm font-medium mb-2">
//               Powder Factor
//             </label>
//             <input
//               id="powderFactor"
//               type="number"
//               step="0.001"
//               value={powderFactor}
//               onChange={(e) => setPowderFactor(e.target.value)}
//               className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//               required
//             />
//           </div>
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           {loading ? 'Calculating...' : 'Calculate Royalty'}
//         </button>
//       </form>

//       {royaltyData && (
//         <div className="mt-8 p-6 bg-gray-800 rounded-lg">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-semibold">Royalty Calculation Results</h2>
//             <div className="space-x-4">
//               <button
//                 onClick={handleSaveCalculation}
//                 className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md text-sm font-medium transition-colors"
//               >
//                 Save Calculation
//               </button>
//               <button
//                 onClick={handleReset}
//                 className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-md text-sm font-medium transition-colors"
//               >
//                 Reset
//               </button>
//             </div>
//           </div>
//           <div className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="p-4 bg-gray-700 rounded-lg">
//                 <h3 className="text-sm font-medium text-gray-400 mb-2">Explosive Quantities</h3>
//                 <div className="space-y-2">
//                   <p className="flex justify-between">
//                     <span>Total Explosive Quantity:</span>
//                     <span>{royaltyData.calculations.total_explosive_quantity.toFixed(2)} kg</span>
//                   </p>
//                   <div className="border-t border-gray-600 my-2" />
//                   <p className="flex justify-between text-sm">
//                     <span>Water Gel:</span>
//                     <span>{royaltyData.inputs.water_gel_kg.toFixed(2)} kg</span>
//                   </p>
//                   <p className="flex justify-between text-sm">
//                     <span>NH4NO3:</span>
//                     <span>{royaltyData.inputs.nh4no3_kg.toFixed(2)} kg</span>
//                   </p>
//                 </div>
//               </div>
              
//               <div className="p-4 bg-gray-700 rounded-lg">
//                 <h3 className="text-sm font-medium text-gray-400 mb-2">Rock Volume</h3>
//                 <p className="flex justify-between">
//                   <span>Blasted Rock Volume:</span>
//                   <span>{royaltyData.calculations.blasted_rock_volume.toFixed(2)} m³</span>
//                 </p>
//               </div>
//             </div>

//             <div className="p-4 bg-gray-700 rounded-lg">
//               <h3 className="text-sm font-medium text-gray-400 mb-2">Payment Details</h3>
//               <div className="space-y-2">
//                 <p className="flex justify-between">
//                   <span>Base Royalty:</span>
//                   <span>LKR {royaltyData.calculations.base_royalty.toFixed(2)}</span>
//                 </p>
//                 <p className="flex justify-between">
//                   <span>With SSCL ({royaltyData.rates_applied.sscl_rate}):</span>
//                   <span>LKR {royaltyData.calculations.royalty_with_sscl.toFixed(2)}</span>
//                 </p>
//                 <div className="border-t border-gray-600 my-2" />
//                 <p className="flex justify-between text-lg font-semibold">
//                   <span>Total Amount (with {royaltyData.rates_applied.vat_rate} VAT):</span>
//                   <span>LKR {royaltyData.calculations.total_amount_with_vat.toFixed(2)}</span>
//                 </p>
//               </div>
//             </div>

//             <p className="text-sm text-gray-400">
//               Calculation Date: {new Date(royaltyData.calculation_date).toLocaleString()}
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// } 

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