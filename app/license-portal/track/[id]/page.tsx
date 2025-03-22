// 'use client'
// import { useEffect, useState } from 'react';
// import { useParams } from 'next/navigation';
// import Navbar from '../../../navbar/page';
// import ApplicationTimeline from '../../../components/ApplicationTimeline';

// export default function TrackApplication() {
//   const params = useParams();
//   const [application, setApplication] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchApplication = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/api/applications/${params.id}`);
//         if (response.ok) {
//           const data = await response.json();
//           setApplication(data);
//         }
//       } catch (error) {
//         console.error('Error fetching application:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchApplication();
//   }, [params.id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!application) {
//     return <div>Application not found</div>;
//   }

//   return (
//     <main>
//       <Navbar />
//       <div className="min-h-screen bg-gray-100">
//         <div className="max-w-3xl mx-auto py-6 sm:px-6 lg:px-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-6">
//             Application Status: {application.status}
//           </h1>
//           <div className="bg-white shadow-sm rounded-lg p-6">
//             <ApplicationTimeline 
//               events={application.timeline}
//               currentStatus={application.status}
//             />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// } 

'use client'

import React from 'react';
import { motion } from 'framer-motion';

interface TimelineEvent {
  status: string;
  date: string;
  description: string;
}

interface ApplicationTimelineProps {
  events: TimelineEvent[];
  currentStatus: string;
  isDarkMode?: boolean;
}

export default function ApplicationTimeline({ 
  events, 
  currentStatus,
  isDarkMode = false
}: ApplicationTimelineProps) {
  // Sort events by date (newest first)
  const sortedEvents = [...events].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Define timeline status order for visual reference
  const statusOrder = [
    'Submitted',
    'In Review',
    'Information Requested',
    'Under Final Review',
    'Approved',
    'Rejected'
  ];

  // Function to determine step completion
  const isCompleted = (status: string) => {
    const currentIndex = statusOrder.indexOf(currentStatus);
    const statusIndex = statusOrder.indexOf(status);
    return statusIndex <= currentIndex;
  };

  // Function to determine if step is current
  const isCurrent = (status: string) => status === currentStatus;

  // Function to determine status color
  const getStatusColor = (status: string, completed: boolean) => {
    if (!completed) return isDarkMode ? 'bg-gray-700' : 'bg-gray-300';
    
    const statusColorMap: Record<string, string> = {
      'Submitted': 'bg-blue-500',
      'In Review': 'bg-yellow-500',
      'Information Requested': 'bg-purple-500',
      'Under Final Review': 'bg-orange-500',
      'Approved': 'bg-green-500',
      'Rejected': 'bg-red-500'
    };
    
    return statusColorMap[status] || 'bg-amber-500';
  };

  return (
    <div className="py-2">
      {sortedEvents.map((event, index) => {
        const completed = isCompleted(event.status);
        const current = isCurrent(event.status);
        
        return (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`mb-8 ${index !== sortedEvents.length - 1 ? 'relative' : ''}`}
          >
            {/* Timeline connector */}
            {index !== sortedEvents.length - 1 && (
              <div 
                className={`absolute left-5 top-10 bottom-0 w-0.5 ${
                  completed ? 'bg-amber-500' : isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
                }`}
              />
            )}
            
            <div className="flex gap-4">
              {/* Status circle */}
              <div className={`
                relative flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center
                ${getStatusColor(event.status, completed)}
                ${current ? 'ring-4 ring-amber-300 ring-opacity-50' : ''}
              `}>
                {completed && (
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              
              {/* Event details */}
              <div className="flex-1">
                <h3 className={`font-bold text-lg ${
                  current ? 'text-amber-500' : ''
                }`}>
                  {event.status}
                  {current && <span className="ml-2">• Current Status</span>}
                </h3>
                
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-sm mb-2`}>
                  {new Date(event.date).toLocaleDateString()} at {new Date(event.date).toLocaleTimeString()}
                </p>
                
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {event.description}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}