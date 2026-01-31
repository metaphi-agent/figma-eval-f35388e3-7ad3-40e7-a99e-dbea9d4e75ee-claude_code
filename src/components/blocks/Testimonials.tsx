export default function Testimonials() {
  const testimonials = [
    {
      title: '"You made it so simple"',
      quote: 'My new site is so much faster and easier to work with than my old site.',
      author: 'Corey Valdez',
      role: 'Founder at Zenix',
      avatar: './assets/images/avatar-corey-valdez.png'
    },
    {
      title: '"Simply the best"',
      quote: 'Better than all the rest. I\'d recommend this product to beginners.',
      author: 'Ian Klein',
      role: 'Digital Marketer',
      avatar: './assets/images/avatar-ian-klein.png'
    }
  ];

  return (
    <section className="bg-[var(--color-light-gray)] py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="w-18 h-18 rounded-full mx-auto mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
                {testimonial.title}
              </h3>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8 opacity-70">
                {testimonial.quote}
              </p>
              <div>
                <div className="font-bold text-[var(--color-text-primary)] mb-1">
                  {testimonial.author}
                </div>
                <div className="text-sm text-[var(--color-text-secondary)] opacity-70">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
