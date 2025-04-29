import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative isolate overflow-hidden bg-primary-900 px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16"
        >
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Find Your Dream Home?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Let us help you discover the perfect property that matches your lifestyle and aspirations.
            Our expert team is ready to guide you through every step.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/properties"
              className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-primary-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Browse Properties
            </Link>
            <Link
              to="/contact"
              className="text-lg font-semibold leading-6 text-white hover:text-gray-300"
            >
              Contact Us <span aria-hidden="true">→</span>
            </Link>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#gradient)"
              fillOpacity="0.15"
            />
            <defs>
              <radialGradient id="gradient">
                <stop stopColor="white" />
                <stop offset={1} stopColor="white" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default CTA;
