import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const featuredProperties = [
  {
    id: 1,
    title: 'Modern Villa with Ocean View',
    price: '$2,500,000',
    location: 'Malibu, CA',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    beds: 5,
    baths: 4,
    sqft: '4,500',
  },
  {
    id: 2,
    title: 'Luxury Penthouse Downtown',
    price: '$3,200,000',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    beds: 4,
    baths: 3.5,
    sqft: '3,800',
  },
  {
    id: 3,
    title: 'Contemporary Mountain Estate',
    price: '$4,100,000',
    location: 'Aspen, CO',
    image: 'https://images.unsplash.com/photo-1600607687644-c7f34c5a3613?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    beds: 6,
    baths: 5,
    sqft: '5,200',
  },
];

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Luxury Real Estate | Find Your Dream Home</title>
        <meta
          name="description"
          content="Discover luxury properties and premium real estate listings. Find your dream home today."
        />
      </Helmet>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-screen flex items-center justify-center text-center text-white"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
          >
            Find Your Dream Home
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto"
          >
            Discover the finest luxury properties in the most desirable locations worldwide.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10"
          >
            <Link
              to="/properties"
              className="rounded-md bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              View Properties
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Properties */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Featured Properties
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Explore our handpicked selection of premium properties
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map((property) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {property.title}
                  </h3>
                  <p className="mt-2 text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {property.price}
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{property.location}</p>
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>{property.beds} beds</span>
                    <span>{property.baths} baths</span>
                    <span>{property.sqft} sq ft</span>
                  </div>
                  <div className="mt-6">
                    <Link
                      to={`/properties/${property.id}`}
                      className="block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
