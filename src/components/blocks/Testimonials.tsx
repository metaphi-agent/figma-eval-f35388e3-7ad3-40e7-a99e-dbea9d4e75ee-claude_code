export default function Testimonials() {
  const testimonials = [
    {
      quote: '"You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change."',
      author: 'Corey Heber',
      role: 'Founder, XYZ Company',
      avatar: '👤'
    },
    {
      quote: '"Simply the best. Better than all the rest. I\'d recommend this product to beginners and advanced users alike."',
      author: 'Ian Martin',
      role: 'Product Manager',
      avatar: '👤'
    }
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[var(--color-light-gray)] rounded-2xl p-8">
              <p className="text-xl text-[var(--color-text-primary)] leading-relaxed mb-8">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[var(--color-primary)] opacity-20 flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-[var(--color-text-primary)]">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
