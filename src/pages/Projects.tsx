import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, Eye, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Residential', 'Commercial', 'Renovation', 'Ongoing'];

  const projects = [
    {
      id: 1,
      title: 'Modern Family Home',
      category: 'Residential',
      status: 'Completed',
      location: 'Oakwood Heights',
      completionDate: '2024',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Contemporary 4-bedroom home featuring sustainable design elements and smart home technology.',
      details: {
        size: '3,200 sq ft',
        duration: '8 months',
        budget: '$450,000',
      }
    },
    {
      id: 2,
      title: 'Downtown Office Complex',
      category: 'Commercial',
      status: 'Completed',
      location: 'Business District',
      completionDate: '2023',
      image: 'https://images.pexels.com/photos/2138922/pexels-photo-2138922.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: '15-story office building with modern amenities and LEED certification.',
      details: {
        size: '180,000 sq ft',
        duration: '18 months',
        budget: '$12M',
      }
    },
    {
      id: 3,
      title: 'Historic Building Restoration',
      category: 'Renovation',
      status: 'Completed',
      location: 'Old Town',
      completionDate: '2023',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Carefully restored 1920s building while preserving its original architectural character.',
      details: {
        size: '8,500 sq ft',
        duration: '12 months',
        budget: '$650,000',
      }
    },
    {
      id: 4,
      title: 'Luxury Shopping Center',
      category: 'Commercial',
      status: 'Completed',
      location: 'Westfield Mall Area',
      completionDate: '2023',
      image: 'https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-end retail complex featuring premium stores and dining facilities.',
      details: {
        size: '95,000 sq ft',
        duration: '14 months',
        budget: '$8.5M',
      }
    },
    {
      id: 5,
      title: 'Green Residential Community',
      category: 'Ongoing',
      status: 'In Progress',
      location: 'Eco Village',
      completionDate: '2025',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Sustainable housing development with 45 eco-friendly homes and community amenities.',
      details: {
        size: '25 acres',
        duration: '24 months',
        budget: '$15M',
      }
    },
    {
      id: 6,
      title: 'Executive Mansion',
      category: 'Residential',
      status: 'Completed',
      location: 'Hill Crest Estates',
      completionDate: '2024',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Luxury custom home with premium finishes and panoramic city views.',
      details: {
        size: '6,500 sq ft',
        duration: '14 months',
        budget: '$1.2M',
      }
    },
    {
      id: 7,
      title: 'Industrial Warehouse Complex',
      category: 'Commercial',
      status: 'Completed',
      location: 'Industrial Park',
      completionDate: '2023',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'State-of-the-art distribution center with advanced logistics capabilities.',
      details: {
        size: '250,000 sq ft',
        duration: '10 months',
        budget: '$6.8M',
      }
    },
    {
      id: 8,
      title: 'Victorian Home Renovation',
      category: 'Renovation',
      status: 'Completed',
      location: 'Heritage District',
      completionDate: '2024',
      image: 'https://images.pexels.com/photos/1396128/pexels-photo-1396128.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete restoration of a Victorian-era home with modern amenities.',
      details: {
        size: '4,200 sq ft',
        duration: '10 months',
        budget: '$580,000',
      }
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-gold-500">Projects</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our portfolio of completed projects that showcase our commitment 
            to quality, innovation, and client satisfaction.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center space-x-2 text-gray-700">
              <Filter className="h-5 w-5" />
              <span className="font-medium">Filter by:</span>
            </div>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-gold-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-navy-900/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Eye className="h-8 w-8 mx-auto mb-2" />
                      <span className="font-semibold">View Details</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <span className="text-gray-500 text-sm">{project.completionDate}</span>
                  </div>

                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-3">{project.location}</p>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                    <div>
                      <div className="text-gray-500">Size</div>
                      <div className="font-semibold text-navy-900">{project.details.size}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Duration</div>
                      <div className="font-semibold text-navy-900">{project.details.duration}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Budget</div>
                      <div className="font-semibold text-navy-900">{project.details.budget}</div>
                    </div>
                  </div>

                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center text-gold-600 hover:text-gold-700 font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready for Your Next Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join our growing list of satisfied clients. Let's discuss how we can 
              bring your construction vision to life with the same excellence you see here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="bg-gold-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-600 transition-colors shadow-lg"
              >
                Get Free Quote
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-navy-900 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;