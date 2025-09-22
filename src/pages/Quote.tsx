import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Calculator, CheckCircle, FileText, DollarSign, Calendar } from 'lucide-react';

const Quote = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Project Type
    projectType: '',
    serviceType: '',
    
    // Step 2: Project Details
    projectSize: '',
    timeline: '',
    budget: '',
    location: '',
    description: '',
    
    // Step 3: Contact Info
    name: '',
    email: '',
    phone: '',
    preferredContact: 'email',
    
    // Files
    files: [] as File[],
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    { id: 'residential', name: 'Residential', description: 'Homes, apartments, condos' },
    { id: 'commercial', name: 'Commercial', description: 'Offices, retail, warehouses' },
    { id: 'renovation', name: 'Renovation', description: 'Remodeling existing structures' },
    { id: 'industrial', name: 'Industrial', description: 'Factories, manufacturing facilities' },
  ];

  const serviceTypes = {
    residential: [
      'New Home Construction',
      'Home Addition',
      'Custom Home',
      'Multi-Family Housing',
    ],
    commercial: [
      'Office Building',
      'Retail Center',
      'Warehouse',
      'Restaurant/Hospitality',
    ],
    renovation: [
      'Kitchen Remodel',
      'Bathroom Renovation',
      'Whole House Renovation',
      'Commercial Renovation',
    ],
    industrial: [
      'Manufacturing Facility',
      'Distribution Center',
      'Production Plant',
      'Industrial Complex',
    ],
  };

  const budgetRanges = [
    '$50K - $100K',
    '$100K - $250K',
    '$250K - $500K',
    '$500K - $1M',
    '$1M - $5M',
    '$5M+',
    'Not Sure',
  ];

  const timelineOptions = [
    '1-3 months',
    '3-6 months',
    '6-12 months',
    '1-2 years',
    '2+ years',
    'Flexible',
  ];

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFormData(prev => ({
        ...prev,
        files: [...prev.files, ...newFiles],
      }));
    }
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index),
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote request submitted:', formData);
    setIsSubmitted(true);
  };

  const steps = [
    { number: 1, title: 'Project Type', icon: <FileText className="h-5 w-5" /> },
    { number: 2, title: 'Project Details', icon: <Calculator className="h-5 w-5" /> },
    { number: 3, title: 'Contact Info', icon: <CheckCircle className="h-5 w-5" /> },
    { number: 4, title: 'Review & Submit', icon: <DollarSign className="h-5 w-5" /> },
  ];

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          className="max-w-2xl mx-auto px-4 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white p-12 rounded-lg shadow-xl">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-navy-900 mb-4">
              Quote Request Submitted!
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Thank you for your interest in Gizo Construction. We've received your quote request 
              and will get back to you within 24 hours with a detailed proposal.
            </p>
            <div className="bg-gold-50 p-4 rounded-lg mb-6">
              <p className="text-gold-800 font-medium">
                Reference ID: #BQ-{Date.now().toString().slice(-6)}
              </p>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setCurrentStep(1);
                setFormData({
                  projectType: '',
                  serviceType: '',
                  projectSize: '',
                  timeline: '',
                  budget: '',
                  location: '',
                  description: '',
                  name: '',
                  email: '',
                  phone: '',
                  preferredContact: 'email',
                  files: [],
                });
              }}
              className="bg-navy-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-800 transition-colors"
            >
              Submit Another Quote
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-navy-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get Your Free <span className="text-gold-500">Quote</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tell us about your project and receive a detailed, personalized quote within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                    currentStep >= step.number 
                      ? 'bg-gold-500 border-gold-500 text-white' 
                      : 'border-gray-300 text-gray-400'
                  }`}>
                    {step.icon}
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <div className={`text-sm font-medium ${
                      currentStep >= step.number ? 'text-gold-600' : 'text-gray-400'
                    }`}>
                      Step {step.number}
                    </div>
                    <div className={`text-sm ${
                      currentStep >= step.number ? 'text-gray-900' : 'text-gray-400'
                    }`}>
                      {step.title}
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-4 ${
                    currentStep > step.number ? 'bg-gold-500' : 'bg-gray-300'
                  }`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Project Type */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-navy-900 mb-6">What type of project do you have?</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {projectTypes.map((type) => (
                      <div
                        key={type.id}
                        className={`p-6 border-2 rounded-lg cursor-pointer transition-colors ${
                          formData.projectType === type.id
                            ? 'border-gold-500 bg-gold-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => handleInputChange('projectType', type.id)}
                      >
                        <h3 className="font-semibold text-lg text-navy-900 mb-2">{type.name}</h3>
                        <p className="text-gray-600 text-sm">{type.description}</p>
                      </div>
                    ))}
                  </div>

                  {formData.projectType && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Specific Service Needed
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => handleInputChange('serviceType', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select a service...</option>
                        {serviceTypes[formData.projectType as keyof typeof serviceTypes]?.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-navy-900 mb-6">Tell us more about your project</h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Calendar className="inline h-4 w-4 mr-1" />
                          Timeline
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => handleInputChange('timeline', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                          required
                        >
                          <option value="">Select timeline...</option>
                          {timelineOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <DollarSign className="inline h-4 w-4 mr-1" />
                          Budget Range
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => handleInputChange('budget', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                          required
                        >
                          <option value="">Select budget...</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Project Size/Area
                        </label>
                        <input
                          type="text"
                          value={formData.projectSize}
                          onChange={(e) => handleInputChange('projectSize', e.target.value)}
                          placeholder="e.g., 2,500 sq ft, 3 bedrooms, 15,000 sq ft warehouse"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Project Location
                        </label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                          placeholder="City, State or Full Address"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Description
                      </label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        rows={6}
                        placeholder="Describe your project in detail. Include any specific requirements, materials preferences, design ideas, or special considerations..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none"
                        required
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Upload className="inline h-4 w-4 mr-1" />
                        Upload Files (Optional)
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                        <input
                          type="file"
                          multiple
                          onChange={handleFileUpload}
                          className="hidden"
                          id="file-upload"
                          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                        />
                        <label htmlFor="file-upload" className="cursor-pointer">
                          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-gray-600 mb-1">Click to upload plans, photos, or documents</p>
                          <p className="text-sm text-gray-500">PDF, JPG, PNG, DOC up to 10MB each</p>
                        </label>
                      </div>
                      {formData.files.length > 0 && (
                        <div className="mt-4 space-y-2">
                          {formData.files.map((file, index) => (
                            <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded">
                              <span className="text-sm text-gray-700">{file.name}</span>
                              <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="text-red-500 hover:text-red-700 text-sm"
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Contact Info */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-navy-900 mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Contact Method
                        </label>
                        <select
                          value={formData.preferredContact}
                          onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        >
                          <option value="email">Email</option>
                          <option value="phone">Phone</option>
                          <option value="both">Both Email and Phone</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Review */}
              {currentStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-navy-900 mb-6">Review Your Quote Request</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg text-navy-900 mb-4">Project Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div><strong>Project Type:</strong> {formData.projectType}</div>
                        <div><strong>Service:</strong> {formData.serviceType}</div>
                        <div><strong>Size:</strong> {formData.projectSize}</div>
                        <div><strong>Timeline:</strong> {formData.timeline}</div>
                        <div><strong>Budget:</strong> {formData.budget}</div>
                        <div><strong>Location:</strong> {formData.location}</div>
                      </div>
                      <div className="mt-4">
                        <strong>Description:</strong>
                        <p className="mt-1 text-gray-700">{formData.description}</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg text-navy-900 mb-4">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div><strong>Name:</strong> {formData.name}</div>
                        <div><strong>Email:</strong> {formData.email}</div>
                        <div><strong>Phone:</strong> {formData.phone}</div>
                        <div><strong>Preferred Contact:</strong> {formData.preferredContact}</div>
                      </div>
                    </div>

                    {formData.files.length > 0 && (
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-lg text-navy-900 mb-4">Uploaded Files</h3>
                        <div className="space-y-2">
                          {formData.files.map((file, index) => (
                            <div key={index} className="text-sm text-gray-700">
                              📎 {file.name}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-200">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    currentStep === 1
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Previous
                </button>

                <div className="text-sm text-gray-500">
                  Step {currentStep} of 4
                </div>

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={
                      (currentStep === 1 && (!formData.projectType || !formData.serviceType)) ||
                      (currentStep === 2 && (!formData.timeline || !formData.budget || !formData.projectSize || !formData.location || !formData.description)) ||
                      (currentStep === 3 && (!formData.name || !formData.email || !formData.phone))
                    }
                    className="bg-gold-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-navy-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-800 transition-colors"
                  >
                    Submit Quote Request
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;