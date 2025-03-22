// 'use client';

// import React, { useState, FormEvent } from "react";
// import Swal from "sweetalert2";

// interface ComplaintFormData {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// export default function ComplaintForm() {
//   const [formData, setFormData] = useState<ComplaintFormData>({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     try {
//       await Swal.fire({
//         title: "Success!",
//         text: "Your complaint has been submitted successfully",
//         icon: "success",
//         confirmButtonText: "OK",
//       });
//       setFormData({ name: '', email: '', subject: '', message: '' });
//     } catch (error) {
//       Swal.fire({
//         title: "Error!",
//         text: "Something went wrong. Please try again.",
//         icon: "error",
//         confirmButtonText: "OK",
//       });
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   return (
//     <form onSubmit={handleSubmit} className="animate-fadeIn">
//       <div className="space-y-6">
//         <div className="group">
//           <label 
//             htmlFor="name" 
//             className="block text-sm font-medium text-amber-400 mb-2 group-hover:text-orange-400 transition-colors"
//           >
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             required
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full px-4 py-3 rounded-lg bg-[#1a2942]/40 border border-indigo-900/50 
//                      text-blue-100 placeholder-blue-100/50 backdrop-blur-xl
//                      focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50
//                      hover:border-amber-400/30 transition-all duration-300"
//             placeholder="Enter your name"
//           />
//         </div>

//         <div className="group">
//           <label 
//             htmlFor="email" 
//             className="block text-sm font-medium text-amber-400 mb-2 group-hover:text-orange-400 transition-colors"
//           >
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             required
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-4 py-3 rounded-lg bg-[#1a2942]/40 border border-indigo-900/50 
//                      text-blue-100 placeholder-blue-100/50 backdrop-blur-xl
//                      focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50
//                      hover:border-amber-400/30 transition-all duration-300"
//             placeholder="Enter your email"
//           />
//         </div>

//         <div className="group">
//           <label 
//             htmlFor="subject" 
//             className="block text-sm font-medium text-amber-400 mb-2 group-hover:text-orange-400 transition-colors"
//           >
//             Subject
//           </label>
//           <input
//             type="text"
//             id="subject"
//             name="subject"
//             required
//             value={formData.subject}
//             onChange={handleChange}
//             className="w-full px-4 py-3 rounded-lg bg-[#1a2942]/40 border border-indigo-900/50 
//                      text-blue-100 placeholder-blue-100/50 backdrop-blur-xl
//                      focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50
//                      hover:border-amber-400/30 transition-all duration-300"
//             placeholder="Enter subject"
//           />
//         </div>

//         <div className="group">
//           <label 
//             htmlFor="message" 
//             className="block text-sm font-medium text-amber-400 mb-2 group-hover:text-orange-400 transition-colors"
//           >
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             required
//             value={formData.message}
//             onChange={handleChange}
//             rows={4}
//             className="w-full px-4 py-3 rounded-lg bg-[#1a2942]/40 border border-indigo-900/50 
//                      text-blue-100 placeholder-blue-100/50 backdrop-blur-xl
//                      focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50
//                      hover:border-amber-400/30 transition-all duration-300 resize-none"
//             placeholder="Enter your message"
//           />
//         </div>

//         <div className="flex justify-end">
//           <button
//             type="submit"
//             className="px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 
//                      text-[#1a2942] font-semibold rounded-lg shadow-lg
//                      hover:from-orange-500 hover:to-amber-400
//                      transform hover:scale-105 hover:shadow-amber-400/20
//                      focus:outline-none focus:ring-2 focus:ring-amber-400/50
//                      transition-all duration-300 animate-gradient"
//           >
//             Submit Complaint
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// } 

'use client';

import React, { useState, FormEvent } from "react";
import Swal from "sweetalert2";

interface ComplaintFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ComplaintForm() {
  const [formData, setFormData] = useState<ComplaintFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await Swal.fire({
        title: "Success!",
        text: "Your complaint has been submitted successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="animate-fadeIn">
      <div className="space-y-6">
        <div className="group">
          <label 
            htmlFor="name" 
            className="block text-sm font-medium text-amber-400 mb-2 group-hover:text-orange-400 transition-colors"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 
                     text-white placeholder-gray-500 backdrop-blur-xl
                     focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50
                     hover:border-amber-400/30 transition-all duration-300"
            placeholder="Enter your name"
          />
        </div>

        <div className="group">
          <label 
            htmlFor="email" 
            className="block text-sm font-medium text-amber-400 mb-2 group-hover:text-orange-400 transition-colors"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 
                     text-white placeholder-gray-500 backdrop-blur-xl
                     focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50
                     hover:border-amber-400/30 transition-all duration-300"
            placeholder="Enter your email"
          />
        </div>

        <div className="group">
          <label 
            htmlFor="subject" 
            className="block text-sm font-medium text-amber-400 mb-2 group-hover:text-orange-400 transition-colors"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 
                     text-white placeholder-gray-500 backdrop-blur-xl
                     focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50
                     hover:border-amber-400/30 transition-all duration-300"
            placeholder="Enter subject"
          />
        </div>

        <div className="group">
          <label 
            htmlFor="message" 
            className="block text-sm font-medium text-amber-400 mb-2 group-hover:text-orange-400 transition-colors"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 
                     text-white placeholder-gray-500 backdrop-blur-xl
                     focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50
                     hover:border-amber-400/30 transition-all duration-300 resize-none"
            placeholder="Enter your message"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 
                     text-black font-semibold rounded-lg shadow-lg
                     hover:from-orange-500 hover:to-amber-400
                     transform hover:scale-105 hover:shadow-amber-400/20
                     focus:outline-none focus:ring-2 focus:ring-amber-400/50
                     transition-all duration-300 animate-gradient"
          >
            Submit Complaint
          </button>
        </div>
      </div>
    </form>
  );
}