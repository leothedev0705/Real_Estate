import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      text: "Found my dream home through this platform. The process was seamless and professional.",
      role: "Homeowner"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      text: "Exceptional service! The team went above and beyond to help us find the perfect property.",
      role: "Property Investor"
    },
    {
      id: 3,
      name: "Michael Brown",
      text: "Very impressed with the quality of listings and customer service. Highly recommended!",
      role: "First-time Buyer"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
