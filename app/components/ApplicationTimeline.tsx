import React from 'react';

interface TimelineEvent {
  status: string;
  date: string;
  comment: string;
}

interface TimelineProps {
  events: TimelineEvent[];
  currentStatus: string;
}

export default function ApplicationTimeline({ events, currentStatus }: TimelineProps) {
  const statusColors = {
    'Submitted': 'bg-blue-500',
    'Under Review': 'bg-yellow-500',
    'Additional Info Required': 'bg-orange-500',
    'Approved': 'bg-green-500',
    'Rejected': 'bg-red-500'
  };

  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {events.map((event, eventIdx) => (
          <li key={eventIdx}>
            <div className="relative pb-8">
              {eventIdx !== events.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${
                      statusColors[event.status as keyof typeof statusColors] || 'bg-gray-500'
                    }`}
                  >
                    <svg
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-1.5">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium text-gray-900">{event.status}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(event.date).toLocaleDateString()}
                    </p>
                  </div>
                  {event.comment && (
                    <p className="mt-1 text-sm text-gray-500">{event.comment}</p>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
} 