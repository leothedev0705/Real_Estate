import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const teamMembers = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'With over 20 years of experience in luxury real estate, John leads our team with passion and expertise.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Lead Real Estate Agent',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Sarah specializes in high-end residential properties and has closed over $100M in sales.',
  },
  {
    name: 'Michael Chen',
    role: 'Property Consultant',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Michael brings his architectural expertise to help clients find their perfect dream home.',
  },
];

const stats = [
  { label: 'Years in Business', value: '15+' },
  { label: 'Properties Sold', value: '1000+' },
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Total Sales', value: '$2B+' },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Luxury Real Estate</title>
        <meta
          name="description"
          content="Learn about our team of experienced real estate professionals and our commitment to excellence."
        />
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
        {/* Hero Section */}
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20 dark:from-primary-900/20">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
              >
                About Us
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
              >
                We are a premier luxury real estate agency dedicated to helping our clients find their
                perfect home. With years of experience and a deep understanding of the luxury market, we
                provide unparalleled service and expertise.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white dark:bg-gray-800 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mx-auto flex max-w-xs flex-col gap-y-4"
                >
                  <dt className="text-base leading-7 text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                    {stat.value}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Our Team
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Meet our experienced team of real estate professionals dedicated to helping you find
                your dream home.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
              {teamMembers.map((person) => (
                <motion.li
                  key={person.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <img
                    className="aspect-[3/2] w-full rounded-2xl object-cover"
                    src={person.image}
                    alt={person.name}
                  />
                  <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900 dark:text-white">
                    {person.name}
                  </h3>
                  <p className="text-base leading-7 text-primary-600 dark:text-primary-400">
                    {person.role}
                  </p>
                  <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                    {person.bio}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
