"use client";

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function AdminComplaints() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/get_complaints");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setComplaints(data);
    } catch (error) {
      console.error("Error fetching complaints:", error);
      Swal.fire("Error", "Failed to fetch complaints.", "error");
    }
  };

  // Handle status change
  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/update_complaint/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        Swal.fire("Updated!", "Complaint status updated successfully.", "success");
        fetchComplaints(); // Refresh the complaint list
      } else {
        Swal.fire("Error", "Failed to update complaint status.", "error");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  // Handle edit complaint
  const handleEditComplaint = async (complaint) => {
    if (updatedComplaint) {
      try {
        const response = await fetch(`http://127.0.0.1:5000/update_complaint/${complaint.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ complaint: updatedComplaint }),
        });

        if (response.ok) {
          Swal.fire("Updated!", "Complaint updated successfully.", "success");
          fetchComplaints();
        } else {
          Swal.fire("Error", "Failed to update complaint.", "error");
        }
      } catch (error) {
        console.error("Error updating complaint:", error);
      }
    }
  };

  // Handle delete complaint
  const handleDeleteComplaint = async (id, status) => {
    if (status !== "Resolved") {
      Swal.fire("Error", "Only resolved complaints can be deleted.", "error");
      return;
    }
  
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This complaint will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });
  
    if (result.isConfirmed) {
      try {
        const response = await fetch(`http://127.0.0.1:5000/delete_complaint/${id}`, {
          method: "DELETE",
        });
  
        if (response.ok) {
          Swal.fire("Deleted!", "Complaint has been deleted.", "success");
          fetchComplaints(); // Refresh the complaint list
        } else {
          Swal.fire("Error", "Failed to delete complaint.", "error");
        }
      } catch (error) {
        console.error("Error deleting complaint:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-gray-700 text-center mb-6">Admin Complaint Management</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-purple-500 text-white">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Project</th>
              <th className="p-3 text-left">Complaint</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint) => (
              <tr key={complaint.id} className="border-b hover:bg-gray-100">
                <td className="p-3">{complaint.id}</td>
                <td className="p-3">{complaint.anonymous ? "Anonymous" : complaint.email}</td>
                <td className="p-3">{complaint.project}</td>
                <td className="p-3">{complaint.complaint_text}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      complaint.status === "Pending"
                        ? "bg-yellow-500"
                        : complaint.status === "Resolved"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {/* {complaint.status} */}
                  </span>
                </td>
                <td className="p-3 flex space-x-2">
                  {/* Status Dropdown */}
                  <select
                    className="border border-gray-300 p-2 rounded"
                    value={complaint.status}
                    onChange={(e) => handleStatusChange(complaint.id, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Resolved">Resolved</option>
                    <option value="Rejected">Rejected</option>
                  </select>

                  {/* Edit Button */}
                  {/* <button
                    className="bg-blue-500 text-white px-3 py-1 rounded-md shadow-md hover:bg-blue-600"
                    onClick={() => handleEditComplaint(complaint)}
                  >
                    Edit
                  </button> */}

                  {/* Delete Button */}
                  <button
                   className="bg-red-500 text-white px-3 py-1 rounded-md shadow-md hover:bg-red-600"
                   onClick={() => handleDeleteComplaint(complaint.id, complaint.status)}
                 >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
