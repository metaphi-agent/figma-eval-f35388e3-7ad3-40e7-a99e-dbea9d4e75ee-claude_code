const contentItems = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5454D4" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 12l2 2 4-4"/>
      </svg>
    ),
    title: 'Create a project',
    description: 'With lots of unique blocks, you can easily build a page without coding.'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5454D4" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 12l2 2 4-4"/>
      </svg>
    ),
    title: 'Assign related people',
    description: 'With lots of unique blocks, you can easily build a page without coding.'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5454D4" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 12l2 2 4-4"/>
      </svg>
    ),
    title: 'Make it done on-time',
    description: 'With lots of unique blocks, you can easily build a page without coding.'
  }
];

export default function Content02() {
  return (
    <section className="py-20">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center max-w-[600px] mx-auto mb-16">
          <h2 className="heading-2 text-[#161C2D] mb-4">
            Manage your projects fast
          </h2>
          <p className="body-text text-[#161C2D]/70">
            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Image */}
          <div className="lg:w-1/2">
            <img
              src="./assets/images/project-features.png"
              alt="Project management features preview"
              loading="lazy"
              className="w-full h-auto"
            />
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 space-y-8">
            {contentItems.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#5454D4]/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="heading-3 text-[#161C2D] mb-2">
                    {item.title}
                  </h3>
                  <p className="small-text text-[#161C2D]/70">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
