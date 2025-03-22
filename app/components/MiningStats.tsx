

// 'use client';

// import { useState, useEffect } from 'react';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
// import { toast } from 'react-hot-toast';

// interface MiningData {
//   explosiveQuantity: number;
//   blastedVolume: number;
//   totalRoyalty: number;
//   dueDate: string;
//   lastCalculated: string;
// }

// interface MiningStatsProps {
//   explosiveQuantity: number;
//   blastedVolume: number;
//   totalRoyalty: number;
//   dueDate: string;
//   lastCalculated: string;
//   onDueDateChange: (date: Date) => void;
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

// export default function MiningStats({
//   explosiveQuantity,
//   blastedVolume,
//   totalRoyalty,
//   dueDate,
//   lastCalculated,
//   onDueDateChange
// }: MiningStatsProps) {
//   const [selectedDate, setSelectedDate] = useState<Date | null>(dueDate ? new Date(dueDate) : null);
//   const [savedCalculations, setSavedCalculations] = useState<SavedCalculation[]>([]);
//   const [showHistory, setShowHistory] = useState(false);
//   const [totals, setTotals] = useState({
//     totalAmount: 0,
//     totalExplosive: 0,
//     totalVolume: 0
//   });

//   // Calculate totals whenever saved calculations change
//   useEffect(() => {
//     const calculatedTotals = savedCalculations.reduce((acc, calc) => {
//       return {
//         totalAmount: acc.totalAmount + calc.totalAmount,
//         totalExplosive: acc.totalExplosive + calc.explosiveQuantity,
//         totalVolume: acc.totalVolume + calc.blastedVolume
//       };
//     }, {
//       totalAmount: 0,
//       totalExplosive: 0,
//       totalVolume: 0
//     });

//     setTotals(calculatedTotals);
//   }, [savedCalculations]);

//   useEffect(() => {
//     const saved = localStorage.getItem('royaltyCalculations');
//     if (saved) {
//       const calculations = JSON.parse(saved);
//       setSavedCalculations(calculations);
//     }
//   }, [lastCalculated]);

//   const handleDateChange = (date: Date) => {
//     setSelectedDate(date);
//     onDueDateChange(date);

//     // Update the due date for the latest calculation
//     const saved = localStorage.getItem('royaltyCalculations');
//     if (saved) {
//       const calculations = JSON.parse(saved);
//       if (calculations.length > 0) {
//         // Update the most recent calculation's due date
//         const updatedCalculations = calculations.map((calc: SavedCalculation, index: number) => {
//           if (index === calculations.length - 1) {
//             return { ...calc, dueDate: date.toISOString() };
//           }
//           return calc;
//         });
        
//         localStorage.setItem('royaltyCalculations', JSON.stringify(updatedCalculations));
//         setSavedCalculations(updatedCalculations);
//         toast.success('Due date saved successfully');
//       }
//     }
//   };

//   const handleDeleteCalculation = (id: string) => {
//     const calculationToDelete = savedCalculations.find(calc => calc.id === id);
//     if (!calculationToDelete) return;

//     const updatedCalculations = savedCalculations.filter(calc => calc.id !== id);
//     setSavedCalculations(updatedCalculations);
    
//     // Update localStorage
//     localStorage.setItem('royaltyCalculations', JSON.stringify(updatedCalculations));

//     toast.success('Calculation deleted successfully');
//   };

//   return (
//     <div className="space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {/* Total Amount Card */}
//         <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-gray-400 text-sm font-medium">Total Amount to Pay</h3>
//             <span className="p-2 bg-yellow-500/10 rounded-lg">
//               <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//             </span>
//           </div>
//           <div className="flex items-baseline">
//             <span className="text-2xl font-bold text-white">
//               LKR {totals.totalAmount.toLocaleString(undefined, { 
//                 minimumFractionDigits: 2, 
//                 maximumFractionDigits: 2 
//               })}
//             </span>
//           </div>
//         </div>

//         {/* Total Explosive Quantity Card */}
//         <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-gray-400 text-sm font-medium">Total Explosive Quantity</h3>
//             <span className="p-2 bg-blue-500/10 rounded-lg">
//               <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//             </span>
//           </div>
//           <div className="flex items-baseline">
//             <span className="text-2xl font-bold text-white">{totals.totalExplosive.toFixed(2)}</span>
//             <span className="ml-2 text-gray-400">kg</span>
//           </div>
//         </div>

//         {/* Blasted Rock Volume Card */}
//         <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-gray-400 text-sm font-medium">Blasted Rock Volume</h3>
//             <span className="p-2 bg-green-500/10 rounded-lg">
//               <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12V8H6a2 2 0 00-2 2v4m16 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4m16 0h-2m-4 0h-8" />
//               </svg>
//             </span>
//           </div>
//           <div className="flex items-baseline">
//             <span className="text-2xl font-bold text-white">{blastedVolume.toFixed(2)}</span>
//             <span className="ml-2 text-gray-400">m³</span>
//           </div>
//         </div>

//         {/* Due Date Card */}
//         <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-gray-400 text-sm font-medium">Payment Due Date</h3>
//             <span className="p-2 bg-red-500/10 rounded-lg">
//               <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//               </svg>
//             </span>
//           </div>
//           <div className="flex flex-col">
//             <DatePicker
//               selected={selectedDate}
//               onChange={handleDateChange}
//               dateFormat="MMMM d, yyyy"
//               minDate={new Date()}
//               className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//               placeholderText="Select due date"
//             />
//             {lastCalculated && (
//               <span className="text-sm text-gray-400 mt-2">
//                 Last Calculated: {new Date(lastCalculated).toLocaleString()}
//               </span>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="bg-gray-800 rounded-xl p-6">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-lg font-medium">Calculation History</h3>
//           <button
//             onClick={() => setShowHistory(!showHistory)}
//             className="text-sm text-blue-400 hover:text-blue-300"
//           >
//             {showHistory ? 'Hide History' : 'Show History'}
//           </button>
//         </div>

//         {showHistory && (
//           <div className="space-y-4">
//             {savedCalculations.length === 0 ? (
//               <p className="text-gray-400">No saved calculations yet</p>
//             ) : (
//               savedCalculations.map((calc) => (
//                 <div key={calc.id} className="p-4 bg-gray-700 rounded-lg">
//                   <div className="flex justify-between items-start mb-3">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
//                       <div>
//                         <p className="text-sm text-gray-400">Calculation Date & Time</p>
//                         <p className="font-medium">{new Date(calc.date).toLocaleString()}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-400">Due Date</p>
//                         <p className="font-medium">{new Date(calc.dueDate).toLocaleDateString()}</p>
//                       </div>
//                     </div>
//                     <button
//                       onClick={() => handleDeleteCalculation(calc.id)}
//                       className="p-1 hover:bg-gray-600 rounded-full transition-colors ml-4"
//                       title="Delete calculation"
//                     >
//                       <svg 
//                         className="w-5 h-5 text-red-400 hover:text-red-300" 
//                         fill="none" 
//                         stroke="currentColor" 
//                         viewBox="0 0 24 24"
//                       >
//                         <path 
//                           strokeLinecap="round" 
//                           strokeLinejoin="round" 
//                           strokeWidth={2} 
//                           d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
//                         />
//                       </svg>
//                     </button>
//                   </div>
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                     <div>
//                       <p className="text-sm text-gray-400">Total Amount</p>
//                       <p className="font-medium">LKR {calc.totalAmount.toLocaleString(undefined, {
//                         minimumFractionDigits: 2,
//                         maximumFractionDigits: 2
//                       })}</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-400">Explosive Used</p>
//                       <p className="font-medium">{calc.explosiveQuantity.toFixed(2)} kg</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-400">Blasted Volume</p>
//                       <p className="font-medium">{calc.blastedVolume.toFixed(2)} m³</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-400">Input Details</p>
//                       <p className="font-medium text-sm">
//                         WG: {calc.waterGel}kg, NH4: {calc.nh4no3}kg, PF: {calc.powderFactor}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               )).reverse()
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// } 

'use client';

import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-hot-toast';

// Remove unused interface
// interface MiningData {
//   explosiveQuantity: number;
//   blastedVolume: number;
//   totalRoyalty: number;
//   dueDate: string;
//   lastCalculated: string;
// }

interface MiningStatsProps {
  explosiveQuantity: number;
  blastedVolume: number;
  totalRoyalty: number;
  dueDate: string;
  lastCalculated: string;
  onDueDateChange: (date: Date) => void;
}

interface SavedCalculation {
  id: string;
  date: string;
  waterGel: number;
  nh4no3: number;
  powderFactor: number;
  totalAmount: number;
  explosiveQuantity: number;
  blastedVolume: number;
  dueDate: string;
}

export default function MiningStats({
  // We're not directly using explosiveQuantity in this component
  // explosiveQuantity,
  blastedVolume,
  // totalRoyalty isn't used, but we'll keep it in props for compatibility
  // totalRoyalty,
  dueDate,
  lastCalculated,
  onDueDateChange
}: MiningStatsProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(dueDate ? new Date(dueDate) : null);
  const [savedCalculations, setSavedCalculations] = useState<SavedCalculation[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [totals, setTotals] = useState({
    totalAmount: 0,
    totalExplosive: 0,
    totalVolume: 0
  });

  // Calculate totals whenever saved calculations change
  useEffect(() => {
    const calculatedTotals = savedCalculations.reduce((acc, calc) => {
      return {
        totalAmount: acc.totalAmount + calc.totalAmount,
        totalExplosive: acc.totalExplosive + calc.explosiveQuantity,
        totalVolume: acc.totalVolume + calc.blastedVolume
      };
    }, {
      totalAmount: 0,
      totalExplosive: 0,
      totalVolume: 0
    });

    setTotals(calculatedTotals);
  }, [savedCalculations]);

  useEffect(() => {
    const saved = localStorage.getItem('royaltyCalculations');
    if (saved) {
      const calculations = JSON.parse(saved);
      setSavedCalculations(calculations);
    }
  }, [lastCalculated]);

  // Fix TypeScript error for DatePicker by handling null case
  const handleDateChange = (date: Date | null) => {
    if (date) {
      setSelectedDate(date);
      onDueDateChange(date);

      // Update the due date for the latest calculation
      const saved = localStorage.getItem('royaltyCalculations');
      if (saved) {
        const calculations = JSON.parse(saved);
        if (calculations.length > 0) {
          // Update the most recent calculation's due date
          const updatedCalculations = calculations.map((calc: SavedCalculation, index: number) => {
            if (index === calculations.length - 1) {
              return { ...calc, dueDate: date.toISOString() };
            }
            return calc;
          });
          
          localStorage.setItem('royaltyCalculations', JSON.stringify(updatedCalculations));
          setSavedCalculations(updatedCalculations);
          toast.success('Due date saved successfully');
        }
      }
    }
  };

  const handleDeleteCalculation = (id: string) => {
    const calculationToDelete = savedCalculations.find(calc => calc.id === id);
    if (!calculationToDelete) return;

    const updatedCalculations = savedCalculations.filter(calc => calc.id !== id);
    setSavedCalculations(updatedCalculations);
    
    // Update localStorage
    localStorage.setItem('royaltyCalculations', JSON.stringify(updatedCalculations));

    toast.success('Calculation deleted successfully');
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Amount Card */}
        <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-400 text-sm font-medium">Total Amount to Pay</h3>
            <span className="p-2 bg-yellow-500/10 rounded-lg">
              <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-white">
              LKR {totals.totalAmount.toLocaleString(undefined, { 
                minimumFractionDigits: 2, 
                maximumFractionDigits: 2 
              })}
            </span>
          </div>
        </div>

        {/* Total Explosive Quantity Card */}
        <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-400 text-sm font-medium">Total Explosive Quantity</h3>
            <span className="p-2 bg-blue-500/10 rounded-lg">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-white">{totals.totalExplosive.toFixed(2)}</span>
            <span className="ml-2 text-gray-400">kg</span>
          </div>
        </div>

        {/* Blasted Rock Volume Card */}
        <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-400 text-sm font-medium">Blasted Rock Volume</h3>
            <span className="p-2 bg-green-500/10 rounded-lg">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12V8H6a2 2 0 00-2 2v4m16 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4m16 0h-2m-4 0h-8" />
              </svg>
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-white">{blastedVolume.toFixed(2)}</span>
            <span className="ml-2 text-gray-400">m³</span>
          </div>
        </div>

        {/* Due Date Card */}
        <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-400 text-sm font-medium">Payment Due Date</h3>
            <span className="p-2 bg-red-500/10 rounded-lg">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </span>
          </div>
          <div className="flex flex-col">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MMMM d, yyyy"
              minDate={new Date()}
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholderText="Select due date"
            />
            {lastCalculated && (
              <span className="text-sm text-gray-400 mt-2">
                Last Calculated: {new Date(lastCalculated).toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Calculation History</h3>
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="text-sm text-blue-400 hover:text-blue-300"
          >
            {showHistory ? 'Hide History' : 'Show History'}
          </button>
        </div>

        {showHistory && (
          <div className="space-y-4">
            {savedCalculations.length === 0 ? (
              <p className="text-gray-400">No saved calculations yet</p>
            ) : (
              savedCalculations.map((calc) => (
                <div key={calc.id} className="p-4 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
                      <div>
                        <p className="text-sm text-gray-400">Calculation Date & Time</p>
                        <p className="font-medium">{new Date(calc.date).toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Due Date</p>
                        <p className="font-medium">{new Date(calc.dueDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteCalculation(calc.id)}
                      className="p-1 hover:bg-gray-600 rounded-full transition-colors ml-4"
                      title="Delete calculation"
                    >
                      <svg 
                        className="w-5 h-5 text-red-400 hover:text-red-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-gray-400">Total Amount</p>
                      <p className="font-medium">LKR {calc.totalAmount.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Explosive Used</p>
                      <p className="font-medium">{calc.explosiveQuantity.toFixed(2)} kg</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Blasted Volume</p>
                      <p className="font-medium">{calc.blastedVolume.toFixed(2)} m³</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Input Details</p>
                      <p className="font-medium text-sm">
                        WG: {calc.waterGel}kg, NH4: {calc.nh4no3}kg, PF: {calc.powderFactor}
                      </p>
                    </div>
                  </div>
                </div>
              )).reverse()
            )}
          </div>
        )}
      </div>
    </div>
  );
}