
'use client'
import React, { useState, useEffect, useRef } from 'react'
import Navbar from '../../navbar/page'
import * as THREE from 'three';

interface FormData {
  explorationLicenseNo: string;
  individualDetails: {
    applicantName: string;
    nationalIdNo: string;
    address: string;
    nationality: string;
    employment: string;
    sriLankaDetails: {
      placeBusiness: string;
      residence: string;
    }
  };
  corporationDetails: {
    companyName: string;
    countryIncorporation: string;
    headOffice: string;
    sriLankaAddress: string;
    legalFinancialData: {
      capitalization: string;
      articlesOfAssociation: File | null;
      annualReports: File | null;
    }
  };
  technicalData: {
    licensedBoundarySurvey: File | null;
    projectTeamCredentials: File | null;
    economicViabilityReport: File | null;
  };
  industrialMiningOperation: {
    blastingMethod: string;
    boreHoleDepth: string;
    productionVolume: string;
    machineryUsed: string;
    shaftDepth: string;
    explosivesType: string;
  };
  licenseAreaDetails: {
    landName: string;
    landOwner: string;
    villageName: string;
    gramaNiladhariDivision: string;
    divisionalSecretary: string;
    administrativeDistrict: string;
    deedCopy: File | null;
    surveyPlan: File | null;
    leaseAgreement: File | null;
  };
  mineRestorationPlan: File | null;
  bondDetails: string;
  mineralsToMine: string;
  licenseFeeReceipt: File | null;
  declaration: {
    date: string;
    signature: string;
    mineManager: string;
  }
}

export default function TypeALicense() {
  const [formData, setFormData] = useState<FormData>({
    explorationLicenseNo: '',
    individualDetails: {
      applicantName: '',
      nationalIdNo: '',
      address: '',
      nationality: '',
      employment: '',
      sriLankaDetails: {
        placeBusiness: '',
        residence: ''
      }
    },
    corporationDetails: {
      companyName: '',
      countryIncorporation: '',
      headOffice: '',
      sriLankaAddress: '',
      legalFinancialData: {
        capitalization: '',
        articlesOfAssociation: null,
        annualReports: null
      }
    },
    technicalData: {
      licensedBoundarySurvey: null,
      projectTeamCredentials: null,
      economicViabilityReport: null
    },
    industrialMiningOperation: {
      blastingMethod: '',
      boreHoleDepth: '',
      productionVolume: '',
      machineryUsed: '',
      shaftDepth: '',
      explosivesType: ''
    },
    licenseAreaDetails: {
      landName: '',
      landOwner: '',
      villageName: '',
      gramaNiladhariDivision: '',
      divisionalSecretary: '',
      administrativeDistrict: '',
      deedCopy: null,
      surveyPlan: null,
      leaseAgreement: null
    },
    mineRestorationPlan: null,
    bondDetails: '',
    mineralsToMine: '',
    licenseFeeReceipt: null,
    declaration: {
      date: '',
      signature: '',
      mineManager: ''
    }
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

  // Updated handleSubmit function to properly map form fields to API expectations
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create FormData object for file uploads
    const data = new FormData();
    
    // Handle simple fields at the root level
    data.append('exploration_license_no', formData.explorationLicenseNo);
    data.append('minerals_to_be_mined', formData.mineralsToMine);
    data.append('nature_of_bound', formData.bondDetails);
    
    // Handle individual details
    data.append('applicant_name', formData.individualDetails.applicantName);
    data.append('national_id', formData.individualDetails.nationalIdNo);
    data.append('address', formData.individualDetails.address);
    data.append('nationality', formData.individualDetails.nationality);
    data.append('employment', formData.individualDetails.employment);
    data.append('place_of_business', formData.individualDetails.sriLankaDetails.placeBusiness);
    data.append('residence', formData.individualDetails.sriLankaDetails.residence);
    
    // Handle corporation details
    data.append('company_name', formData.corporationDetails.companyName);
    data.append('country_of_incorporation', formData.corporationDetails.countryIncorporation);
    data.append('head_office_address', formData.corporationDetails.headOffice);
    data.append('registered_address_in_sri_lanka', formData.corporationDetails.sriLankaAddress);
    data.append('capitalization', formData.corporationDetails.legalFinancialData.capitalization);
    
    // Handle industrial mining operation details
    data.append('blasting_method', formData.industrialMiningOperation.blastingMethod);
    data.append('depth_of_borehole', formData.industrialMiningOperation.boreHoleDepth);
    data.append('production_volume', formData.industrialMiningOperation.productionVolume);
    data.append('machinery_used', formData.industrialMiningOperation.machineryUsed);
    data.append('underground_mining_depth', formData.industrialMiningOperation.shaftDepth);
    data.append('explosives_type', formData.industrialMiningOperation.explosivesType);
    
    // Handle license area details
    data.append('land_name', formData.licenseAreaDetails.landName);
    data.append('land_owner_name', formData.licenseAreaDetails.landOwner);
    data.append('village_name', formData.licenseAreaDetails.villageName);
    data.append('grama_niladhari_division', formData.licenseAreaDetails.gramaNiladhariDivision);
    data.append('divisional_secretary_division', formData.licenseAreaDetails.divisionalSecretary);
    data.append('administrative_district', formData.licenseAreaDetails.administrativeDistrict);
    
    // Handle declaration fields
    data.append('applicant_signature', formData.declaration.signature);
    data.append('mine_manager_signature', formData.declaration.mineManager);
    
    // Set placeholder values for required fields not explicitly in the form
    data.append('industrial_mining_license_no', '');  // Or use a generated/default value
    data.append('period_of_validity', '5');  // Default to 5 years
    data.append('royalty_payable', '0');  // Default value
    
    // Handle file uploads
    // Corporation documents
    if (formData.corporationDetails.legalFinancialData.articlesOfAssociation) {
      data.append('articles_of_association', formData.corporationDetails.legalFinancialData.articlesOfAssociation);
    }
    if (formData.corporationDetails.legalFinancialData.annualReports) {
      data.append('annual_reports', formData.corporationDetails.legalFinancialData.annualReports);
    }
    
    // Technical documents
    if (formData.technicalData.licensedBoundarySurvey) {
      data.append('licensed_boundary_survey', formData.technicalData.licensedBoundarySurvey);
    }
    if (formData.technicalData.projectTeamCredentials) {
      data.append('project_team_credentials', formData.technicalData.projectTeamCredentials);
    }
    if (formData.technicalData.economicViabilityReport) {
      data.append('economic_viability_report', formData.technicalData.economicViabilityReport);
    }
    
    // License area documents
    if (formData.licenseAreaDetails.deedCopy) {
      data.append('deed_copy', formData.licenseAreaDetails.deedCopy);
    }
    if (formData.licenseAreaDetails.surveyPlan) {
      data.append('survey_plan', formData.licenseAreaDetails.surveyPlan);
    }
    if (formData.licenseAreaDetails.leaseAgreement) {
      data.append('lease_agreement', formData.licenseAreaDetails.leaseAgreement);
    }
    
    // Other documents
    if (formData.mineRestorationPlan) {
      data.append('mine_restoration_plan', formData.mineRestorationPlan);
    }
    if (formData.licenseFeeReceipt) {
      data.append('license_fee_receipt', formData.licenseFeeReceipt);
    }

    try {
      // Add a console log to help with debugging
      console.log('Submitting form data to API...');
      
      // Use a relative URL instead of hardcoded localhost:5000
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: data,
      });
      
      if (response.ok) {
        alert('License application submitted successfully!');
        console.log('Response:', await response.json());
      } else {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        console.error('Submission error:', errorData);
        alert(`Failed to submit license application: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Network or server error';
      alert(`Error submitting license application: ${errorMessage}`);
    }
  };

  const handleFileChange = (section: keyof FormData | '', field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      if (section === '') {
        // Handle root level file fields
        setFormData(prev => ({
          ...prev,
          [field]: e.target.files![0]
        }));
      } else {
        // Handle nested file fields
        setFormData(prev => {
          const sectionData = prev[section] as Record<string, unknown>;
          return {
            ...prev,
            [section]: {
              ...sectionData,
              [field]: e.target.files![0]
            }
          };
        });
      }
    }
  };

  return (
    <div className={`relative min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'} overflow-hidden`}>
      <Navbar />
      <div className="relative z-10 min-h-screen pt-32 pb-16">
        <div className="max-w-3xl mx-auto py-6 sm:px-6 lg:px-8">
          <h1 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            IML Type A License Application
          </h1>
          <div className={`${isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-white'} shadow-lg rounded-lg p-6`}>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* 1. Exploration License */}
              <div className="space-y-4">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  1. Exploration License No
                </h2>
                <div>
                  <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Exploration License No (where applicable)
                  </label>
                  <input
                    type="text"
                    className={`mt-1 block w-full rounded-md ${
                      isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                    } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                    value={formData.explorationLicenseNo}
                    onChange={(e) => setFormData({...formData, explorationLicenseNo: e.target.value})}
                  />
                </div>
              </div>

              {/* 2. Individual Details */}
              <div className="space-y-4">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  2. Individual Details
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Name of Applicant / Authorized Agent
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.individualDetails.applicantName}
                      onChange={(e) => setFormData({
                        ...formData,
                        individualDetails: { ...formData.individualDetails, applicantName: e.target.value }
                      })}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      National Identity Card No
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.individualDetails.nationalIdNo}
                      onChange={(e) => setFormData({
                        ...formData,
                        individualDetails: { ...formData.individualDetails, nationalIdNo: e.target.value }
                      })}
                    />
                  </div>
                  {/* Add other individual fields similarly */}
                </div>
              </div>

              {/* 3. Corporation Details */}
              <div className="space-y-4">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  3. Corporation Details
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Name of Company/Partnership
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.corporationDetails.companyName}
                      onChange={(e) => setFormData({
                        ...formData,
                        corporationDetails: { ...formData.corporationDetails, companyName: e.target.value }
                      })}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Articles of Association
                    </label>
                    <input
                      type="file"
                      className="mt-1 block w-full"
                      onChange={handleFileChange('corporationDetails', 'articlesOfAssociation')}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Last three years Annual Reports
                    </label>
                    <input
                      type="file"
                      multiple
                      className="mt-1 block w-full"
                      onChange={handleFileChange('corporationDetails', 'annualReports')}
                    />
                  </div>
                </div>
              </div>

              {/* 4. Technical/Professional Data */}
              <div className="space-y-4">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  4. Technical/Professional Data
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Licensed Boundary Survey
                    </label>
                    <input
                      type="file"
                      className="mt-1 block w-full"
                      onChange={handleFileChange('technicalData', 'licensedBoundarySurvey')}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Professional/Technical Credentials
                    </label>
                    <input
                      type="file"
                      className="mt-1 block w-full"
                      onChange={handleFileChange('technicalData', 'projectTeamCredentials')}
                    />
                  </div>
                </div>
              </div>

              {/* 5. Industrial Mining Operation */}
              <div className="space-y-4">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  5. Type of Industrial Mining Operation
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Blasting Method
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.industrialMiningOperation.blastingMethod}
                      onChange={(e) => setFormData({
                        ...formData,
                        industrialMiningOperation: { ...formData.industrialMiningOperation, blastingMethod: e.target.value }
                      })}
                    />
                  </div>
                  {/* Add other mining operation fields */}
                </div>
              </div>

              {/* 6. License Area Details */}
              <div className="space-y-4">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  6. Details of License Area
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Name of Land
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.licenseAreaDetails.landName}
                      onChange={(e) => setFormData({
                        ...formData,
                        licenseAreaDetails: { ...formData.licenseAreaDetails, landName: e.target.value }
                      })}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Deed and Survey Plan
                    </label>
                    <input
                      type="file"
                      className="mt-1 block w-full"
                      onChange={handleFileChange('licenseAreaDetails', 'deedCopy')}
                    />
                  </div>
                </div>
              </div>

              {/* 7. Mine Restoration Plan */}
              <div className="space-y-4">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  7. Detailed Mine Restoration Plan
                </h2>
                <div>
                  <input
                    type="file"
                    className="mt-1 block w-full"
                    onChange={handleFileChange('', 'mineRestorationPlan')}
                  />
                </div>
              </div>

              {/* 8. Bond Details */}
              <div className="space-y-4">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  8. Nature of Amount of Bond
                </h2>
                <div>
                  <input
                    type="text"
                    className={`mt-1 block w-full rounded-md ${
                      isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                    } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                    value={formData.bondDetails}
                    onChange={(e) => setFormData({...formData, bondDetails: e.target.value})}
                  />
                </div>
              </div>

              {/* 9. Minerals */}
              <div className="space-y-4">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  9. Names of Mineral/Minerals to be Mined
                </h2>
                <div>
                  <input
                    type="text"
                    className={`mt-1 block w-full rounded-md ${
                      isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                    } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                    value={formData.mineralsToMine}
                    onChange={(e) => setFormData({...formData, mineralsToMine: e.target.value})}
                  />
                </div>
              </div>

              {/* 10. License Fee */}
              <div className="space-y-4">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  10. License Fee Receipt
                </h2>
                <div>
                  <input
                    type="file"
                    className="mt-1 block w-full"
                    onChange={handleFileChange('', 'licenseFeeReceipt')}
                  />
                </div>
              </div>

              {/* Declaration */}
              <div className="space-y-4 border-t pt-6">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Declaration
                </h2>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  I, the undersigned, do hereby certify that the statements contained in this application are true and
                  correct to the best of my knowledge and undertake to comply with the provisions the Mines & Minerals Act No.33 of 1992,
                  and the Regulation made thereunder.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Date
                    </label>
                    <input
                      type="date"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.declaration.date}
                      onChange={(e) => setFormData({
                        ...formData,
                        declaration: { ...formData.declaration, date: e.target.value }
                      })}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Mine Manager
                    </label>
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
                      } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                      value={formData.declaration.mineManager}
onChange={(e) => setFormData({
  ...formData,
  declaration: { ...formData.declaration, mineManager: e.target.value }
})}
/>
</div>
<div>
<label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
  Signature (Type your name to sign)
</label>
<input
  type="text"
  className={`mt-1 block w-full rounded-md ${
    isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
  } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
  value={formData.declaration.signature}
  onChange={(e) => setFormData({
    ...formData,
    declaration: { ...formData.declaration, signature: e.target.value }
  })}
/>
</div>
</div>
</div>

{/* Submit Button */}
<div className="border-t pt-6">
<button
  type="submit"
  className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
    isDarkMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-blue-600 hover:bg-blue-700'
  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
>
  Submit License Application
</button>
</div>
</form>
</div>
</div>
</div>

{/* Background Three.js Canvas */}
<canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" />
</div>
);
}