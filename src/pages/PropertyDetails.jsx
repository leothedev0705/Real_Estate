import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  HomeIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  BuildingOfficeIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';

// Mock data - In a real app, this would come from an API
const property = {
  id: 1,
  title: 'Modern Villa with Ocean View',
  description:
    'This stunning modern villa offers breathtaking ocean views and luxurious living spaces. The property features high-end finishes, an infinity pool, and a spacious outdoor entertainment area.',
  price: '$2,500,000',
  location: 'Malibu, CA',
  beds: 5,
  baths: 4,
  sqft: '4,500',
  yearBuilt: 2020,
  propertyType: 'Villa',
  images: [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1600607687644-c7f34c5a3613?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  ],
  features: [
    'Infinity Pool',
    'Ocean View',
    'Smart Home System',
    'Wine Cellar',
    'Home Theater',
    'Gourmet Kitchen',
    'Private Beach Access',
    'Solar Panels',
  ],
};

const PropertyDetails = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <>
      <Helmet>
        <title>{property.title} | Luxury Real Estate</title>
        <meta name="description" content={property.description} />
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Image Gallery */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-2 aspect-w-16 aspect-h-9"
            >
              <img
                src={property.images[selectedImage]}
                alt={`Property view ${selectedImage + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
            <div className="hidden lg:grid gap-4">
              {property.images.slice(1, 4).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="aspect-w-4 aspect-h-3 cursor-pointer"
                  onClick={() => setSelectedImage(index + 1)}
                >
                  <img
                    src={image}
                    alt={`Property view ${index + 2}`}
                    className="w-full h-full object-cover rounded-lg hover:opacity-75 transition-opacity"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Property Information */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose dark:prose-invert max-w-none"
              >
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {property.title}
                </h1>
                <p className="text-xl text-primary-600 dark:text-primary-400">{property.price}</p>
                <p className="text-gray-600 dark:text-gray-300">{property.description}</p>

                {/* Property Features */}
                <h2 className="text-2xl font-bold mt-8 text-gray-900 dark:text-white">
                  Property Features
                </h2>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {property.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <HomeIcon className="h-5 w-5 mr-2 text-primary-600 dark:text-primary-400" />
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Property Details Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Property Details
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPinIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">{property.location}</span>
                </div>
                <div className="flex items-center">
                  <CurrencyDollarIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">{property.price}</span>
                </div>
                <div className="flex items-center">
                  <BuildingOfficeIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {property.beds} beds • {property.baths} baths • {property.sqft} sq ft
                  </span>
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Built in {property.yearBuilt}
                  </span>
                </div>
              </div>

              {/* Contact Form */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Schedule a Viewing
                </h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 rounded-md border dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2 rounded-md border dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-md border dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails; 