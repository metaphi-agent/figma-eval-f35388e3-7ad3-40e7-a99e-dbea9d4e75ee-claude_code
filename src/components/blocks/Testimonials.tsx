const testimonials = [
  {
    quote: '"You made it so simple"',
    text: 'My new site is so much faster and easier to work with than my old site.',
    name: 'Corey Valdez',
    role: 'Founder of Jelius',
    image: './assets/images/testimonial-1.png'
  },
  {
    quote: '"Simply the best"',
    text: 'Better than all the rest. I\'d recommend this product to beginners.',
    name: 'Ian Klein',
    role: 'Digital Marketer',
    image: './assets/images/testimonial-2.png'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#F5F7FA]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              {index === 1 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-[170px] bg-[#E7E9ED]"></div>
              )}
              <div className={index === 1 ? 'md:pl-8' : ''}>
                <img
                  src={testimonial.image}
                  alt={`Testimonial from ${testimonial.name}`}
                  loading="lazy"
                  className="w-full h-auto rounded-lg mb-6"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
