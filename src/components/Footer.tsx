import React from "react";
import { Link } from "react-router-dom";
import {
  HardHat,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Residential Construction",
    "Commercial Construction",
    "Renovations",
    "Architecture & Design",
    "Project Management",
  ];

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gold-500 p-2 rounded-lg">
                <HardHat className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold">GizNet Const</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Building your future with strength and precision. We are a leading
              construction company committed to delivering exceptional quality
              in every project we undertake.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold-500" />
                <span className="text-gray-300">+234 (906) 625-2115</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold-500" />
                <span className="text-gray-300">cletusgizo@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gold-500" />
                <span className="text-gray-300">Remote</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-gold-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 hover:text-gold-500 transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="#"
              className="text-gray-300 hover:text-gold-500 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-300">
              © 2024 GizNet. All rights reserved. |
              <span className="text-gold-500 ml-1">
                Building Excellence for Our Clients
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
