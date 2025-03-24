'use client';

import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

interface MiningData {
  explosiveQuantity: number;
  blastedVolume: number;
  totalRoyalty: number;
  dueDate: string;
  lastCalculated: string;
}

interface MiningStatsProps {
  explosiveQuantity: number;
  blastedVolume: number;
  totalRoyalty: number;
  dueDate: string;
  lastCalculated: string;
  onDueDateChange: (date: Date) => void;
}

export default function MiningStats({
  explosiveQuantity,
  blastedVolume,
  totalRoyalty,
  dueDate,
  lastCalculated,
  onDueDateChange
}: MiningStatsProps) {

  // Check for dark mode from localStorage to maintain theme consistency
  const isDarkMode = typeof window !== 'undefined' ? 
    localStorage.getItem('theme') !== 'light' : true;

  // Define dynamic classes based on theme
  const cardClass = isDarkMode 
    ? "bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors"
    : "bg-white shadow-md rounded-xl p-6 hover:bg-gray-50 transition-colors";
  
  const labelClass = isDarkMode 
    ? "text-gray-400 text-sm font-medium"
    : "text-gray-600 text-sm font-medium";

  const valueClass = isDarkMode 
    ? "text-2xl font-bold text-white"
    : "text-2xl font-bold text-gray-900";

  const unitClass = isDarkMode 
    ? "ml-2 text-gray-400"
    : "ml-2 text-gray-500";

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Amount Card */}
        <div className={cardClass}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={labelClass}>Total Amount Due</h3>
            <span className="p-2 bg-yellow-500/10 rounded-lg">
              <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </div>
          <div className="flex items-baseline">
            <span className={valueClass}>
              Rs. {totalRoyalty.toLocaleString(undefined, { 
                minimumFractionDigits: 2, 
                maximumFractionDigits: 2 
              })}
            </span>
          </div>
        </div>

        {/* Total Explosive Quantity Card */}
        <div className={cardClass}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={labelClass}>Total Explosive Quantity</h3>
            <span className="p-2 bg-blue-500/10 rounded-lg">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
          </div>
          <div className="flex items-baseline">
            <span className={valueClass}>{explosiveQuantity.toFixed(2)}</span>
            <span className={unitClass}>kg</span>
          </div>
        </div>

        {/* Blasted Rock Volume Card */}
        <div className={cardClass}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={labelClass}>Blasted Rock Volume</h3>
            <span className="p-2 bg-green-500/10 rounded-lg">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12V8H6a2 2 0 00-2 2v4m16 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4m16 0h-2m-4 0h-8" />
              </svg>
            </span>
          </div>
          <div className="flex items-baseline">
            <span className={valueClass}>{blastedVolume.toFixed(2)}</span>
            <span className={unitClass}>m³</span>
          </div>
        </div>
      </div>
    </div>
  );
}