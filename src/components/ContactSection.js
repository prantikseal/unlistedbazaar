'use client';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp
} from 'react-icons/fa';

const contactInfo = {
  address: '123 Business District, Mumbai, Maharashtra 400001',
  email: 'contact@unlistedbazaar.com',
    phone: '+91 83330 08904',
  social: [
    { icon: FaWhatsapp, link: 'https://wa.me/918333008904', name: 'WhatsApp' },
    { icon: FaFacebook, link: '#', name: 'Facebook' },
    { icon: FaTwitter, link: '#', name: 'Twitter' },
    { icon: FaInstagram, link: '#', name: 'Instagram' },
    { icon: FaLinkedin, link: '#', name: 'LinkedIn' }
  ]
};

export default function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600">
            We&apos;re here to help with all your unlisted securities needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <MapPinIcon className="w-6 h-6 text-[#04dd2a] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Visit Us</h3>
                <p className="text-gray-600">{contactInfo.address}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <EnvelopeIcon className="w-6 h-6 text-[#04dd2a] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Email Us</h3>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-600 hover:text-[#04dd2a] transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <PhoneIcon className="w-6 h-6 text-[#04dd2a] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Call Us</h3>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-600 hover:text-[#04dd2a] transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-8">
              <h3 className="font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {contactInfo.social.map((platform) => (
                  <motion.a
                    key={platform.name}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gray-100 p-3 rounded-full hover:bg-[#04dd2a] 
                             hover:text-white transition-colors"
                  >
                    <platform.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 bg-gray-50 p-8 rounded-xl"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 
                         focus:ring-2 focus:ring-[#04dd2a] focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 
                         focus:ring-2 focus:ring-[#04dd2a] focus:border-transparent"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 
                         focus:ring-2 focus:ring-[#04dd2a] focus:border-transparent"
                placeholder="Your message"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#04dd2a] text-white py-3 rounded-lg 
                       hover:bg-[#04dd2a]/90 transition-colors"
              onClick={() => window.open(`https://wa.me/918333008904?text=I am interested in buying from unlistedbazaar ${contactInfo.address} ${contactInfo.email} ${contactInfo.phone}`)}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
} 