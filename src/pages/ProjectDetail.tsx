import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, DollarSign, Ruler, Clock, CheckCircle } from 'lucide-react';

const ProjectDetail = () => {
  // Project data
  const project = {
    id: 1,
    title: 'Modern Family Home',
    category: 'Residential',
    status: 'Completed',
    location: 'Oakwood Heights, CA',
    completionDate: '2024-01-15',
    startDate: '2023-05-15',
    client: 'The Johnson Family',
    architect: 'Sarah Johnson',
    projectManager: 'Mike Chen',
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1396128/pexels-photo-1396128.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'A stunning contemporary 4-bedroom family home featuring sustainable design elements, smart home technology, and premium finishes throughout. This project showcases our commitment to modern living while maintaining energy efficiency and environmental responsibility.',
    details: {
      size: '3,200 sq ft',
      duration: '8 months',
      budget: '$450,000',
      bedrooms: '4',
      bathrooms: '3.5',
      parking: '2-car garage',
    },
    features: [
      'Energy-efficient LED lighting throughout',
      'Smart home automation system',
      'Solar panel installation',
      'Premium hardwood flooring',
      'Gourmet kitchen with granite countertops',
      'Master suite with walk-in closet',
      'Open concept living areas',
      'Landscaped backyard with patio',
    ],
    challenges: [
      'Working within a tight urban lot',
      'Integrating modern design with neighborhood aesthetics',
      'Meeting strict energy efficiency requirements',
      'Coordinating smart home technology installation',
    ],
    solutions: [
      'Maximized vertical space with innovative design',
      'Used complementary materials for neighborhood harmony',
      'Exceeded energy standards with advanced insulation',
      'Pre-planned all technology infrastructure',
    ],
    testimonial: {
      text: 'Gizo Construction really impressed us with their work. They listened to our ideas and brought them to life perfectly. The team was always available and kept us updated throughout the process. We\'re thrilled with our new home!',
      author: 'Jennifer Johnson',
      role: 'Homeowner',
    },
  };

  const [selectedImage, setSelectedImage] = React.useState(0);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/projects"
            className="inline-flex items-center text-gold-600 hover:text-gold-700 font-medium mb-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Projects
          </Link>
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-navy-900 mb-2">{project.title}</h1>
              <div className="flex items-center space-x-4 text-gray-600">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {project.status}
                </span>
                <span className="bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                to="/quote"
                className="bg-gold-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-colors"
              >
                Start Similar Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Image */}
            <div className="lg:col-span-3">
              <motion.div
                className="relative overflow-hidden rounded-lg"
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.images[selectedImage]}
                  alt={`${project.title} - Image ${selectedImage + 1}`}
                  className="w-full h-96 lg:h-[600px] object-cover"
                />
              </motion.div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="space-y-4">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-lg w-full ${
                    selectedImage === index ? 'ring-2 ring-gold-500' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-24 object-cover hover:scale-105 transition-transform duration-200"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Project Overview</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                <h3 className="text-2xl font-bold text-navy-900 mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-gold-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-4">Challenges</h3>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="text-gray-600 flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-4">Solutions</h3>
                    <ul className="space-y-2">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="text-gray-600 flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Client Testimonial */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-navy-900 mb-4">Client Testimonial</h3>
                  <blockquote className="text-gray-600 italic text-lg leading-relaxed mb-4">
                    "{project.testimonial.text}"
                  </blockquote>
                  <div className="flex items-center">
                    <div>
                      <div className="font-semibold text-navy-900">{project.testimonial.author}</div>
                      <div className="text-gray-500 text-sm">{project.testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Project Info Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                className="bg-white p-8 rounded-lg shadow-lg sticky top-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-navy-900 mb-6">Project Details</h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gold-500" />
                    <div>
                      <div className="font-medium text-navy-900">Location</div>
                      <div className="text-gray-600">{project.location}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-gold-500" />
                    <div>
                      <div className="font-medium text-navy-900">Completion Date</div>
                      <div className="text-gray-600">
                        {new Date(project.completionDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gold-500" />
                    <div>
                      <div className="font-medium text-navy-900">Duration</div>
                      <div className="text-gray-600">{project.details.duration}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Ruler className="h-5 w-5 text-gold-500" />
                    <div>
                      <div className="font-medium text-navy-900">Size</div>
                      <div className="text-gray-600">{project.details.size}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-5 w-5 text-gold-500" />
                    <div>
                      <div className="font-medium text-navy-900">Budget</div>
                      <div className="text-gray-600">{project.details.budget}</div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h4 className="font-semibold text-navy-900 mb-4">Additional Details</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bedrooms:</span>
                      <span className="font-medium">{project.details.bedrooms}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bathrooms:</span>
                      <span className="font-medium">{project.details.bathrooms}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Parking:</span>
                      <span className="font-medium">{project.details.parking}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Architect:</span>
                      <span className="font-medium">{project.architect}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Project Manager:</span>
                      <span className="font-medium">{project.projectManager}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-200">
                  <Link
                    to="/quote"
                    className="w-full bg-navy-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-navy-800 transition-colors text-center block"
                  >
                    Start Your Project
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Related Projects</h2>
            <p className="text-gray-600 text-lg">
              Explore more of our {project.category.toLowerCase()} construction projects.
            </p>
          </motion.div>

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center bg-gold-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-colors"
            >
              View All Projects
              <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;