const features = [
  {
    icon: (
      <svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.6667 23.5L8 16.5L14.6667 9.5" stroke="#5454D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M29.3333 9.5L36 16.5L29.3333 23.5" stroke="#5454D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 4L20 29" stroke="#5454D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Project management',
    description: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'
  },
  {
    icon: (
      <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18.5" cy="18.5" r="16" stroke="#5454D4" strokeWidth="2.5"/>
        <path d="M18.5 10V18.5L24 24" stroke="#5454D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Time tracking',
    description: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'
  },
  {
    icon: (
      <svg width="26" height="38" viewBox="0 0 26 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="22" height="34" rx="3" stroke="#5454D4" strokeWidth="2.5"/>
        <circle cx="13" cy="30" r="2" fill="#5454D4"/>
      </svg>
    ),
    title: 'Beautiful mobile app',
    description: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'
  }
];

export default function Features() {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <div className="mb-5">
                {feature.icon}
              </div>
              <h3 className="heading-3 text-[#161C2D] mb-4">
                {feature.title}
              </h3>
              <p className="small-text text-[#161C2D]/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
