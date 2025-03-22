'use client'
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '../../../navbar/page';
import ApplicationTimeline from '../../../components/ApplicationTimeline';

export default function AdminApplicationView() {
  const params = useParams();
  const [application, setApplication] = useState<any>(null);
  const [newStatus, setNewStatus] = useState('');
  const [comment, setComment] = useState('');

  const statusOptions = [
    'Under Review',
    'Additional Info Required',
    'Approved',
    'Rejected'
  ];

  const updateStatus = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/applications/${params.id}/status`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status: newStatus, comment }),
        }
      );

      if (response.ok) {
        // Refresh application data
        fetchApplication();
        setComment('');
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const fetchApplication = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/applications/${params.id}`);
      if (response.ok) {
        const data = await response.json();
        setApplication(data);
      }
    } catch (error) {
      console.error('Error fetching application:', error);
    }
  };

  useEffect(() => {
    fetchApplication();
  }, [params.id]);

  if (!application) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-3xl mx-auto py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Manage Application: {params.id}
          </h1>
          <div className="bg-white shadow-sm rounded-lg p-6 space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Update Status</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    New Status
                  </label>
                  <select
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                  >
                    <option value="">Select status</option>
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Comment
                  </label>
                  <textarea
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </div>
                <button
                  onClick={updateStatus}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Update Status
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Timeline</h2>
              <ApplicationTimeline 
                events={application.timeline}
                currentStatus={application.status}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 