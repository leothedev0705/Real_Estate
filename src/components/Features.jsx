import { motion } from 'framer-motion';
import {
  HomeIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  MagnifyingGlassIcon,
  BanknotesIcon,
  HandThumbUpIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Exclusive Listings',
    description: 'Access to premium properties not available on other platforms.',
    icon: HomeIcon,
  },
  {
    name: 'Verified Properties',
    description: 'All properties are thoroughly vetted and verified for your peace of mind.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Expert Agents',
    description: 'Work with experienced real estate professionals who know the market.',
    icon: UserGroupIcon,
  },
  {
    name: 'Smart Search',
    description: "Advanced search tools to help you find exactly what you're looking for.",
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'Competitive Pricing',
    description: 'Get the best value for your investment with our market analysis.',
    icon: BanknotesIcon,
  },
  {
    name: 'Customer Satisfaction',
    description: '98% of our clients recommend our services to friends and family.',
    icon: HandThumbUpIcon,
  },
];

export default function Features() {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-base font-semibold leading-7 text-indigo-600"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Everything you need to find your dream home
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            We provide comprehensive real estate services designed to make your property journey seamless and successful.
          </motion.p>
</div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
</div>
</div>
</div>
            );
            }
