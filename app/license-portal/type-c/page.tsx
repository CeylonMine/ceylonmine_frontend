// 'use client'
// import React, { useState, useEffect, useRef } from 'react'
// import Navbar from '../../navbar/page'
// import * as THREE from 'three';

// interface FormData {
//   explorationLicenseNo: string;
//   individualDetails: {
//     applicantName: string;
//     nationalIdNo: string;
//     address: string;
//     nationality: string;
//     employment: string;
//     sriLankaDetails: {
//       placeBusiness: string;
//       residence: string;
//     }
//   };
//   corporationDetails: {
//     companyName: string;
//     countryIncorporation: string;
//     headOffice: string;
//     sriLankaAddress: string;
//     legalFinancialData: {
//       capitalization: string;
//       articlesOfAssociation: File | null;
//       annualReports: File | null;
//     }
//   };
//   technicalData: {
//     licensedBoundarySurvey: File | null;
//     projectTeamCredentials: File | null;
//     economicViabilityReport: File | null;
//   };
//   industrialMiningOperation: {
//     blastingMethod: string;
//     boreHoleDepth: string;
//     productionVolume: string;
//     machineryUsed: string;
//     shaftDepth: string;
//     explosivesType: string;
//   };
//   licenseAreaDetails: {
//     landName: string;
//     landOwner: string;
//     villageName: string;
//     gramaNiladhariDivision: string;
//     divisionalSecretary: string;
//     administrativeDistrict: string;
//     deedCopy: File | null;
//     surveyPlan: File | null;
//     leaseAgreement: File | null;
//   };
//   mineRestorationPlan: File | null;
//   bondDetails: string;
//   mineralsToMine: string;
//   licenseFeeReceipt: File | null;
//   declaration: {
//     date: string;
//     signature: string;
//     mineManager: string;
//   }
// }

// export default function TypeALicense() {
//   const [formData, setFormData] = useState<FormData>({
//     explorationLicenseNo: '',
//     individualDetails: {
//       applicantName: '',
//       nationalIdNo: '',
//       address: '',
//       nationality: '',
//       employment: '',
//       sriLankaDetails: {
//         placeBusiness: '',
//         residence: ''
//       }
//     },
//     corporationDetails: {
//       companyName: '',
//       countryIncorporation: '',
//       headOffice: '',
//       sriLankaAddress: '',
//       legalFinancialData: {
//         capitalization: '',
//         articlesOfAssociation: null,
//         annualReports: null
//       }
//     },
//     technicalData: {
//       licensedBoundarySurvey: null,
//       projectTeamCredentials: null,
//       economicViabilityReport: null
//     },
//     industrialMiningOperation: {
//       blastingMethod: '',
//       boreHoleDepth: '',
//       productionVolume: '',
//       machineryUsed: '',
//       shaftDepth: '',
//       explosivesType: ''
//     },
//     licenseAreaDetails: {
//       landName: '',
//       landOwner: '',
//       villageName: '',
//       gramaNiladhariDivision: '',
//       divisionalSecretary: '',
//       administrativeDistrict: '',
//       deedCopy: null,
//       surveyPlan: null,
//       leaseAgreement: null
//     },
//     mineRestorationPlan: null,
//     bondDetails: '',
//     mineralsToMine: '',
//     licenseFeeReceipt: null,
//     declaration: {
//       date: '',
//       signature: '',
//       mineManager: ''
//     }
//   });

//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   // Listen for theme change event from navbar
//   useEffect(() => {
//     const handleThemeChange = (event: CustomEvent) => {
//       setIsDarkMode(event.detail.isDarkMode);
//     };

//     window.addEventListener('themeChange', handleThemeChange as EventListener);

//     // Set initial theme based on local storage or system preference
//     const savedTheme = localStorage.getItem('theme');
//     const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//     if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
//       setIsDarkMode(true);
//     } else {
//       setIsDarkMode(false);
//     }

//     return () => {
//       window.removeEventListener('themeChange', handleThemeChange as EventListener);
//     };
//   }, []);

//   // Three.js Sand (Particle) Effect
//   useEffect(() => {
//     if (!canvasRef.current) return;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvasRef.current,
//       alpha: true,
//     });

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//     const particlesGeometry = new THREE.BufferGeometry();
//     const particlesCount = 5000;
//     const posArray = new Float32Array(particlesCount * 3);

//     for (let i = 0; i < particlesCount * 3; i++) {
//       posArray[i] = (Math.random() - 0.5) * 5;
//     }
//     particlesGeometry.setAttribute(
//       'position',
//       new THREE.BufferAttribute(posArray, 3)
//     );

//     const particlesMaterial = new THREE.PointsMaterial({
//       size: 0.004,
//       color: isDarkMode ? 0xD2B48C : 0xFFD700, // Sand color
//       transparent: true,
//       blending: THREE.AdditiveBlending,
//     });

//     const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
//     scene.add(particlesMesh);

//     camera.position.z = 2;

//     let mouseX = 0;
//     let mouseY = 0;

//     function onDocumentMouseMove(event: MouseEvent) {
//       mouseX = (event.clientX - window.innerWidth / 2) / 100;
//       mouseY = (event.clientY - window.innerHeight / 2) / 100;
//     }
//     document.addEventListener('mousemove', onDocumentMouseMove);

//     function onWindowResize() {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     }
//     window.addEventListener('resize', onWindowResize);

//     const animate = () => {
//       requestAnimationFrame(animate);
//       particlesMesh.rotation.x += 0.0002 + mouseY * 0.0002; // Slowed down rotation
//       particlesMesh.rotation.y += 0.0002 + mouseX * 0.0002; // Slowed down rotation
//       renderer.render(scene, camera);
//     };
//     animate();

//     const updateParticleColor = () => {
//       particlesMaterial.color.set(isDarkMode ? 0xD2B48C : 0xFFD700);
//     };

//     const themeChangeListener = () => {
//       updateParticleColor();
//     };
//     window.addEventListener('themeChange', themeChangeListener);

//     return () => {
//       document.removeEventListener('mousemove', onDocumentMouseMove);
//       window.removeEventListener('resize', onWindowResize);
//       window.removeEventListener('themeChange', themeChangeListener);
//       if (particlesGeometry) particlesGeometry.dispose();
//       if (particlesMaterial) particlesMaterial.dispose();
//       if (renderer) renderer.dispose();
//     };
//   }, [isDarkMode]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     const data = new FormData();
    
//     // Append all form data
//     Object.entries(formData).forEach(([key, value]) => {
//       if (value instanceof File) {
//         data.append(key, value);
//       } else if (typeof value === 'object') {
//         data.append(key, JSON.stringify(value));
//       } else {
//         data.append(key, value.toString());
//       }
//     });

//     try {
//       const response = await fetch('http://localhost:5000/api/licenses/type-a', {
//         method: 'POST',
//         body: data,
//       });
      
//       if (response.ok) {
//         alert('License application submitted successfully!');
//       } else {
//         alert('Failed to submit license application');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error submitting license application');
//     }
//   };

//   const handleFileChange = (section: keyof FormData | '', field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       if (section === '') {
//         // Handle root level file fields
//         setFormData(prev => ({
//           ...prev,
//           [field]: e.target.files![0]
//         }));
//       } else {
//         // Handle nested file fields
//         setFormData(prev => {
//           const sectionData = prev[section] as Record<string, unknown>;
//           return {
//             ...prev,
//             [section]: {
//               ...sectionData,
//               [field]: e.target.files![0]
//             }
//           };
//         });
//       }
//     }
//   };

//   return (
//     <div className={`relative min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'} overflow-hidden`}>
//       <Navbar />
//       <div className="relative z-10 min-h-screen pt-32 pb-16">
//         <div className="max-w-3xl mx-auto py-6 sm:px-6 lg:px-8">
//           <h1 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//             IML Type C License Application
//           </h1>
//           <div className={`${isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-white'} shadow-lg rounded-lg p-6`}>
//             <form onSubmit={handleSubmit} className="space-y-8">
//               {/* 1. Exploration License */}
//               <div className="space-y-4">
//                 <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                   1. Exploration License No
//                 </h2>
//                 <div>
//                   <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                     Exploration License No (where applicable)
//                   </label>
//                   <input
//                     type="text"
//                     className={`mt-1 block w-full rounded-md ${
//                       isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
//                     } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
//                     value={formData.explorationLicenseNo}
//                     onChange={(e) => setFormData({...formData, explorationLicenseNo: e.target.value})}
//                   />
//                 </div>
//               </div>

//               {/* 2. Individual Details */}
//               <div className="space-y-4">
//                 <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                   2. Individual Details
//                 </h2>
//                 <div className="grid grid-cols-1 gap-4">
//                   <div>
//                     <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                       Name of Applicant / Authorized Agent
//                     </label>
//                     <input
//                       type="text"
//                       className={`mt-1 block w-full rounded-md ${
//                         isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
//                       } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
//                       value={formData.individualDetails.applicantName}
//                       onChange={(e) => setFormData({
//                         ...formData,
//                         individualDetails: { ...formData.individualDetails, applicantName: e.target.value }
//                       })}
//                     />
//                   </div>
//                   <div>
//                     <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                       National Identity Card No
//                     </label>
//                     <input
//                       type="text"
//                       className={`mt-1 block w-full rounded-md ${
//                         isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
//                       } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
//                       value={formData.individualDetails.nationalIdNo}
//                       onChange={(e) => setFormData({
//                         ...formData,
//                         individualDetails: { ...formData.individualDetails, nationalIdNo: e.target.value }
//                       })}
//                     />
//                   </div>
//                   {/* Add other individual fields similarly */}
//                 </div>
//               </div>

//               {/* 3. Corporation Details */}
//               <div className="space-y-4">
//                 <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                   3. Corporation Details
//                 </h2>
//                 <div className="grid grid-cols-1 gap-4">
//                   <div>
//                     <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                       Name of Company/Partnership
//                     </label>
//                     <input
//                       type="text"
//                       className={`mt-1 block w-full rounded-md ${
//                         isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
//                       } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
//                       value={formData.corporationDetails.companyName}
//                       onChange={(e) => setFormData({
//                         ...formData,
//                         corporationDetails: { ...formData.corporationDetails, companyName: e.target.value }
//                       })}
//                     />
//                   </div>
//                   <div>
//                     <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                       Articles of Association
//                     </label>
//                     <input
//                       type="file"
//                       className="mt-1 block w-full"
//                       onChange={handleFileChange('corporationDetails', 'articlesOfAssociation')}
//                     />
//                   </div>
//                   <div>
//                     <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                       Last three years Annual Reports
//                     </label>
//                     <input
//                       type="file"
//                       multiple
//                       className="mt-1 block w-full"
//                       onChange={handleFileChange('corporationDetails', 'annualReports')}
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* 4. Technical/Professional Data */}
//               <div className="space-y-4">
//                 <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                   4. Technical/Professional Data
//                 </h2>
//                 <div className="grid grid-cols-1 gap-4">
//                   <div>
//                     <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                       Licensed Boundary Survey
//                     </label>
//                     <input
//                       type="file"
//                       className="mt-1 block w-full"
//                       onChange={handleFileChange('technicalData', 'licensedBoundarySurvey')}
//                     />
//                   </div>
//                   <div>
//                     <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                       Professional/Technical Credentials
//                     </label>
//                     <input
//                       type="file"
//                       className="mt-1 block w-full"
//                       onChange={handleFileChange('technicalData', 'projectTeamCredentials')}
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* 5. Industrial Mining Operation */}
//               <div className="space-y-4">
//                 <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                   5. Type of Industrial Mining Operation
//                 </h2>
//                 <div className="grid grid-cols-1 gap-4">
//                   <div>
//                     <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                       Blasting Method
//                     </label>
//                     <input
//                       type="text"
//                       className={`mt-1 block w-full rounded-md ${
//                         isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
//                       } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
//                       value={formData.industrialMiningOperation.blastingMethod}
//                       onChange={(e) => setFormData({
//                         ...formData,
//                         industrialMiningOperation: { ...formData.industrialMiningOperation, blastingMethod: e.target.value }
//                       })}
//                     />
//                   </div>
//                   {/* Add other mining operation fields */}
//                 </div>
//               </div>

//               {/* 6. License Area Details */}
//               <div className="space-y-4">
//                 <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                   6. Details of License Area
//                 </h2>
//                 <div className="grid grid-cols-1 gap-4">
//                   <div>
//                     <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                       Name of Land
//                     </label>
//                     <input
//                       type="text"
//                       className={`mt-1 block w-full rounded-md ${
//                         isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
//                       } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
//                       value={formData.licenseAreaDetails.landName}
//                       onChange={(e) => setFormData({
//                         ...formData,
//                         licenseAreaDetails: { ...formData.licenseAreaDetails, landName: e.target.value }
//                       })}
//                     />
//                   </div>
//                   <div>
//                     <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                       Deed and Survey Plan
//                     </label>
//                     <input
//                       type="file"
//                       className="mt-1 block w-full"
//                       onChange={handleFileChange('licenseAreaDetails', 'deedCopy')}
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* 7. Mine Restoration Plan */}
//               <div className="space-y-4">
//                 <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                   7. Detailed Mine Restoration Plan
//                 </h2>
//                 <div>
//                   <input
//                     type="file"
//                     className="mt-1 block w-full"
//                     onChange={handleFileChange('', 'mineRestorationPlan')}
//                   />
//                 </div>
//               </div>

//               {/* 8. Bond Details */}
//               <div className="space-y-4">
//                 <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                   8. Nature of Amount of Bond
//                 </h2>
//                 <div>
//                   <input
//                     type="text"
//                     className={`mt-1 block w-full rounded-md ${
//                       isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
//                     } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
//                     value={formData.bondDetails}
//                     onChange={(e) => setFormData({...formData, bondDetails: e.target.value})}
//                   />
//                 </div>
//               </div>

//               {/* 9. Minerals */}
//               <div className="space-y-4">
//                 <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                   9. Names of Mineral/Minerals to be Mined
//                 </h2>
//                 <div>
//                   <input
//                     type="text"
//                     className={`mt-1 block w-full rounded-md ${
//                       isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
//                     } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
//                     value={formData.mineralsToMine}
//                     onChange={(e) => setFormData({...formData, mineralsToMine: e.target.value})}
//                   />
//                 </div>
//               </div>

//               {/* 10. License Fee */}
//               <div className="space-y-4">
//                 <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                   10. License Fee Receipt
//                 </h2>
//                 <div>
//                   <input
//                     type="file"
//                     className="mt-1 block w-full"
//                     onChange={handleFileChange('', 'licenseFeeReceipt')}
//                   />
//                 </div>
//               </div>

//               {/* Declaration */}
//               <div className="space-y-4 border-t pt-6">
//                 <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                   Declaration
//                 </h2>
//                 <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//                   I, the undersigned, do hereby certify that the statements contained in this application are true and
//                   correct to the best of my knowledge and undertake to comply with the provisions the Mines & Minerals Act No.33 of 1992,
//                   and the Regulation made thereunder.
//                 </p>
//                 <div className="grid grid-cols-1 gap-4">
//                   <div>
//                     <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                       Date
//                     </label>
//                     <input
//                       type="date"
//                       className={`mt-1 block w-full rounded-md ${
//                         isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
//                       } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
//                       value={formData.declaration.date}
//                       onChange={(e) => setFormData({
//                         ...formData,
//                         declaration: { ...formData.declaration, date: e.target.value }
//                       })}
//                     />
//                   </div>
//                   <div>
//                     <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                       Mine Manager
//                     </label>
//                     <input
//                       type="text"
//                       className={`mt-1 block w-full rounded-md ${
//                         isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
//                       } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
//                       value={formData.declaration.mineManager}
//                       onChange={(e) => setFormData({
//                         ...formData,
//                         declaration: { ...formData.declaration, mineManager: e.target.value }
//                       })}
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="pt-5">
//                 <button
//                   type="submit"
//                   className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
//                 >
//                   Submit Application
//                 </button>
//               </div>

//             </form>
//           </div>
//         </div>
//       </div>
      
//       {/* Three.js Canvas Background */}
//       <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0" />
//     </div>
//   );
// }

'use client'
import React, { useState, useEffect, useRef } from 'react'
import Navbar from '../../navbar/page'
import * as THREE from 'three';

interface FormData {
  exploration_license_no: string;
  applicant_name: string;
  national_id: string;
  address: string;
  nationality: string;
  employment: string;
  place_of_business: string;
  residence: string;
  company_name: string;
  country_of_incorporation: string;
  head_office_address: string;
  registered_address_in_sri_lanka: string;
  capitalization: string;
  blasting_method: string;
  depth_of_borehole: string;
  production_volume: string;
  machinery_used: string;
  underground_mining_depth: string;
  explosives_type: string;
  land_name: string;
  land_owner_name: string;
  village_name: string;
  grama_niladhari_division: string;
  divisional_secretary_division: string;
  administrative_district: string;
  nature_of_bound: string;
  minerals_to_be_mined: string;
  industrial_mining_license_no: string;
  period_of_validity: string;
  royalty_payable: string;
  // File uploads
  articles_of_association: File | null;
  annual_reports: File | null;
  licensed_boundary_survey: File | null;
  project_team_credentials: File | null;
  economic_viability_report: File | null;
  deed_copy: File | null;
  survey_plan: File | null;
  lease_agreement: File | null;
  mine_restoration_plan: File | null;
  license_fee_receipt: File | null;
}

export default function TypeALicense() {
  const [formData, setFormData] = useState<FormData>({
    exploration_license_no: '',
    applicant_name: '',
    national_id: '',
    address: '',
    nationality: '',
    employment: '',
    place_of_business: '',
    residence: '',
    company_name: '',
    country_of_incorporation: '',
    head_office_address: '',
    registered_address_in_sri_lanka: '',
    capitalization: '',
    blasting_method: '',
    depth_of_borehole: '',
    production_volume: '',
    machinery_used: '',
    underground_mining_depth: '',
    explosives_type: '',
    land_name: '',
    land_owner_name: '',
    village_name: '',
    grama_niladhari_division: '',
    divisional_secretary_division: '',
    administrative_district: '',
    nature_of_bound: '',
    minerals_to_be_mined: '',
    industrial_mining_license_no: '',
    period_of_validity: '',
    royalty_payable: '',
    // File uploads
    articles_of_association: null,
    annual_reports: null,
    licensed_boundary_survey: null,
    project_team_credentials: null,
    economic_viability_report: null,
    deed_copy: null,
    survey_plan: null,
    lease_agreement: null,
    mine_restoration_plan: null,
    license_fee_receipt: null,
  });

  const [isDarkMode, setIsDarkMode] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Listen for theme change event from navbar
  useEffect(() => {
    const handleThemeChange = (event: CustomEvent) => {
      setIsDarkMode(event.detail.isDarkMode);
    };

    window.addEventListener('themeChange', handleThemeChange as EventListener);

    // Set initial theme based on local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }

    return () => {
      window.removeEventListener('themeChange', handleThemeChange as EventListener);
    };
  }, []);

  // Three.js Sand (Particle) Effect
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.004,
      color: isDarkMode ? 0xD2B48C : 0xFFD700, // Sand color
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 2;

    let mouseX = 0;
    let mouseY = 0;

    function onDocumentMouseMove(event: MouseEvent) {
      mouseX = (event.clientX - window.innerWidth / 2) / 100;
      mouseY = (event.clientY - window.innerHeight / 2) / 100;
    }
    document.addEventListener('mousemove', onDocumentMouseMove);

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onWindowResize);

    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.x += 0.0002 + mouseY * 0.0002; // Slowed down rotation
      particlesMesh.rotation.y += 0.0002 + mouseX * 0.0002; // Slowed down rotation
      renderer.render(scene, camera);
    };
    animate();

    const updateParticleColor = () => {
      particlesMaterial.color.set(isDarkMode ? 0xD2B48C : 0xFFD700);
    };

    const themeChangeListener = () => {
      updateParticleColor();
    };
    window.addEventListener('themeChange', themeChangeListener);

    return () => {
      document.removeEventListener('mousemove', onDocumentMouseMove);
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('themeChange', themeChangeListener);
      if (particlesGeometry) particlesGeometry.dispose();
      if (particlesMaterial) particlesMaterial.dispose();
      if (renderer) renderer.dispose();
    };
  }, [isDarkMode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const data = new FormData();
    
    // Add license type
    data.append('licenseType', 'type-a');
    
    // Helper function to append nested objects
    const appendNestedObject = (prefix: string, obj: any) => {
      Object.entries(obj).forEach(([key, value]) => {
        const fullKey = prefix ? `${prefix}[${key}]` : key;
        
        if (value instanceof File) {
          data.append(fullKey, value);
        } else if (value && typeof value === 'object') {
          appendNestedObject(fullKey, value);
        } else if (value !== null && value !== undefined) {
          data.append(fullKey, value.toString());
        }
      });
    };

    // Append all form data
    appendNestedObject('', formData);

    try {
      const response = await fetch('https://ceylonminebackend.up.railway.app/license/submit', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: data,
      });
      
      if (response.ok) {
        alert('License application submitted successfully!');
      } else {
        // Try to get error message from response
        let errorMessage = 'Failed to submit license application';
        try {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const errorData = await response.json();
            errorMessage = errorData.message || errorData.error || errorMessage;
          } else {
            const textError = await response.text();
            errorMessage = textError || errorMessage;
          }
        } catch (parseError) {
          console.error('Error parsing response:', parseError);
        }
        
        console.error('Server response:', {
          status: response.status,
          statusText: response.statusText,
          headers: Object.fromEntries(response.headers.entries())
        });
        
        alert(errorMessage);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error occurred while submitting the application. Please check your connection and try again.');
    }
  };

  const handleFileChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        [field]: e.target.files![0]
      }));
    }
  };

  return (
    <div className={`relative min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'} overflow-hidden`}>
      <Navbar />
      <div className="relative z-10 min-h-screen pt-32 pb-16">
        <div className="max-w-3xl mx-auto py-6 sm:px-6 lg:px-8">
          <h1 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            IML Type C License Application
          </h1>
          <div className={`${isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-white'} shadow-lg rounded-lg p-6`}>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="space-y-4">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Basic Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Exploration License No
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.exploration_license_no}
                      onChange={(e) => setFormData({...formData, exploration_license_no: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Industrial Mining License No
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.industrial_mining_license_no}
                      onChange={(e) => setFormData({...formData, industrial_mining_license_no: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              {/* Applicant Details */}
              <div className="space-y-4">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Applicant Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Applicant Name
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.applicant_name}
                      onChange={(e) => setFormData({...formData, applicant_name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      National ID
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.national_id}
                      onChange={(e) => setFormData({...formData, national_id: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Address
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Nationality
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.nationality}
                      onChange={(e) => setFormData({...formData, nationality: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Employment
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.employment}
                      onChange={(e) => setFormData({...formData, employment: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              {/* Business Details */}
              <div className="space-y-4">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Business Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Place of Business
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.place_of_business}
                      onChange={(e) => setFormData({...formData, place_of_business: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Residence
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.residence}
                      onChange={(e) => setFormData({...formData, residence: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Company Name
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.company_name}
                      onChange={(e) => setFormData({...formData, company_name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Country of Incorporation
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.country_of_incorporation}
                      onChange={(e) => setFormData({...formData, country_of_incorporation: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Head Office Address
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.head_office_address}
                      onChange={(e) => setFormData({...formData, head_office_address: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Registered Address in Sri Lanka
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.registered_address_in_sri_lanka}
                      onChange={(e) => setFormData({...formData, registered_address_in_sri_lanka: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Capitalization
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.capitalization}
                      onChange={(e) => setFormData({...formData, capitalization: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              {/* Mining Operation Details */}
              <div className="space-y-4">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Mining Operation Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Blasting Method
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.blasting_method}
                      onChange={(e) => setFormData({...formData, blasting_method: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Depth of Borehole
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.depth_of_borehole}
                      onChange={(e) => setFormData({...formData, depth_of_borehole: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Production Volume
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.production_volume}
                      onChange={(e) => setFormData({...formData, production_volume: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Machinery Used
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.machinery_used}
                      onChange={(e) => setFormData({...formData, machinery_used: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Underground Mining Depth
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.underground_mining_depth}
                      onChange={(e) => setFormData({...formData, underground_mining_depth: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Explosives Type
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.explosives_type}
                      onChange={(e) => setFormData({...formData, explosives_type: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              {/* License Area Details */}
              <div className="space-y-4">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  License Area Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Land Name
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.land_name}
                      onChange={(e) => setFormData({...formData, land_name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Land Owner Name
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.land_owner_name}
                      onChange={(e) => setFormData({...formData, land_owner_name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Village Name
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.village_name}
                      onChange={(e) => setFormData({...formData, village_name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Grama Niladhari Division
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.grama_niladhari_division}
                      onChange={(e) => setFormData({...formData, grama_niladhari_division: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Divisional Secretary Division
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.divisional_secretary_division}
                      onChange={(e) => setFormData({...formData, divisional_secretary_division: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Administrative District
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.administrative_district}
                      onChange={(e) => setFormData({...formData, administrative_district: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div className="space-y-4">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Additional Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Nature of Bond
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.nature_of_bound}
                      onChange={(e) => setFormData({...formData, nature_of_bound: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Minerals to be Mined
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.minerals_to_be_mined}
                      onChange={(e) => setFormData({...formData, minerals_to_be_mined: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Period of Validity
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.period_of_validity}
                      onChange={(e) => setFormData({...formData, period_of_validity: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Royalty Payable
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.royalty_payable}
                      onChange={(e) => setFormData({...formData, royalty_payable: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              {/* File Uploads */}
              <div className="space-y-4">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Required Documents
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Articles of Association
                    </label>
                    <input
                      type="file"
                      className="mt-1 block w-full"
                      onChange={handleFileChange('articles_of_association')}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Annual Reports
                    </label>
                    <input
                      type="file"
                      className="mt-1 block w-full"
                      onChange={handleFileChange('annual_reports')}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Licensed Boundary Survey
                    </label>
                    <input
                      type="file"
                      className="mt-1 block w-full"
                      onChange={handleFileChange('licensed_boundary_survey')}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Project Team Credentials
                    </label>
                    <input
                      type="file"
                      className="mt-1 block w-full"
                      onChange={handleFileChange('project_team_credentials')}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Economic Viability Report
                    </label>
                    <input
                      type="file"
                      className="mt-1 block w-full"
                      onChange={handleFileChange('economic_viability_report')}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Deed Copy
                    </label>
                    <input
                      type="file"
                      className="mt-1 block w-full"
                      onChange={handleFileChange('deed_copy')}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Survey Plan
                    </label>
                    <input
                      type="file"
                      className="mt-1 block w-full"
                      onChange={handleFileChange('survey_plan')}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Lease Agreement
                    </label>
                    <input
                      type="file"
                      className="mt-1 block w-full"
                      onChange={handleFileChange('lease_agreement')}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Mine Restoration Plan
                    </label>
                    <input
                      type="file"
                      className="mt-1 block w-full"
                      onChange={handleFileChange('mine_restoration_plan')}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      License Fee Receipt
                    </label>
                    <input
                      type="file"
                      className="mt-1 block w-full"
                      onChange={handleFileChange('license_fee_receipt')}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-5">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Three.js Canvas Background */}
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0" />
    </div>
  );
}