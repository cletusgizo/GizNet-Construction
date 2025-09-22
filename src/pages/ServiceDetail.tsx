import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Phone, Star } from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams();

  const services = {
    residential: {
      title: 'Residential Construction',
      subtitle: 'Building Dreams into Reality',
      description: 'From custom homes to multi-family developments, we specialize in creating beautiful, functional residential spaces that families love to call home.',
      hero: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1920',
      features: [
        'Custom Home Design & Construction',
        'New Home Development',
        'Multi-Family Housing Projects',
        'Luxury Home Construction',
        'Energy-Efficient Building Solutions',
        'Smart Home Integration',
        'Sustainable Building Practices',
        'Complete Project Management',
      ],
      process: [
        {
          step: '01',
          title: 'Initial Consultation',
          description: 'We meet with you to understand your vision, budget, and timeline for your dream home.',
        },
        {
          step: '02',
          title: 'Design & Planning',
          description: 'Our architects and designers create detailed plans that bring your vision to life.',
        },
        {
          step: '03',
          title: 'Permits & Approvals',
          description: 'We handle all the necessary permits and regulatory approvals for your project.',
        },
        {
          step: '04',
          title: 'Construction Phase',
          description: 'Expert craftsmen build your home with precision and attention to every detail.',
        },
        {
          step: '05',
          title: 'Final Walkthrough',
          description: 'We conduct a thorough inspection and walkthrough to ensure everything meets our standards.',
        },
      ],
      gallery: [
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1396128/pexels-photo-1396128.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      testimonials: [
        {
          name: 'Jennifer Smith',
          text: 'Gizo Construction really delivered on their promises. Our new home turned out even better than we imagined!',
          rating: 5,
        },
        {
          name: 'Robert Johnson',
          text: 'Professional, reliable, and delivered exactly what they promised. Highly recommend!',
          rating: 5,
        },
      ],
    },
    commercial: {
      title: 'Commercial Construction',
      subtitle: 'Building Success for Your Business',
      description: 'We construct commercial buildings that drive business success, from modern office complexes to retail centers and industrial facilities.',
      hero: 'https://images.pexels.com/photos/2138922/pexels-photo-2138922.jpeg?auto=compress&cs=tinysrgb&w=1920',
      features: [
        'Office Building Construction',
        'Retail Center Development',
        'Industrial Facilities',
        'Warehouse Construction',
        'Restaurant & Hospitality Buildings',
        'Healthcare Facilities',
        'Educational Buildings',
        'LEED Certified Construction',
      ],
      process: [
        {
          step: '01',
          title: 'Project Assessment',
          description: 'We evaluate your business needs and site requirements for optimal building design.',
        },
        {
          step: '02',
          title: 'Design Development',
          description: 'Our team creates functional designs that support your business operations.',
        },
        {
          step: '03',
          title: 'Regulatory Compliance',
          description: 'We ensure all commercial building codes and regulations are met.',
        },
        {
          step: '04',
          title: 'Construction Management',
          description: 'Professional project management ensures on-time, on-budget completion.',
        },
        {
          step: '05',
          title: 'Final Delivery',
          description: 'Complete inspection and handover of your fully functional commercial space.',
        },
      ],
      gallery: [
        'https://images.pexels.com/photos/2138922/pexels-photo-2138922.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      testimonials: [
        {
          name: 'David Chen',
          text: 'Our new office building has transformed our business operations. Excellent work!',
          rating: 5,
        },
        {
          name: 'Maria Rodriguez',
          text: 'Professional team that delivered our retail center on time and within budget.',
          rating: 5,
        },
      ],
    },
    // Add other services similarly...
  };

  const service = services[id as keyof typeof services];

  if (!service) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-navy-900 mb-4">Service Not Found</h1>
          <Link to="/services" className="text-gold-600 hover:text-gold-700">
            Return to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('${service.hero}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{service.title}</h1>
            <p className="text-2xl text-gold-400 mb-6">{service.subtitle}</p>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/quote"
                className="bg-gold-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-600 transition-colors shadow-lg flex items-center justify-center"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-navy-900 transition-colors flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your specific construction needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={feature}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="h-6 w-6 text-gold-500 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach that ensures quality results from start to finish.
            </p>
          </motion.div>

          <div className="space-y-8">
            {service.process.map((step, index) => (
              <motion.div
                key={step.step}
                className="flex items-start space-x-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <div className="bg-gold-500 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl">
                    {step.step}
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex-grow">
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Our Work</h2>
            <p className="text-xl text-gray-600">
              See examples of our completed projects in this category.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.gallery.map((image, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={image}
                  alt={`${service.title} project ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-navy-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">View Project</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our satisfied clients who chose our {service.title.toLowerCase()} services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-200 mb-6 leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-gold-400">{testimonial.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gold-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's discuss your {service.title.toLowerCase()} project and turn your vision into reality.
              Get your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="bg-white text-gold-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get Free Quote
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gold-600 transition-colors"
              >
                Contact Us Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;