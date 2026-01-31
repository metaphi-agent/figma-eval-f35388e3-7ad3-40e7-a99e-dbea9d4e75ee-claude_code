export default function ProjectManagement() {
  const steps = [
    {
      number: '1',
      title: 'Create a project',
      description: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'
    },
    {
      number: '2',
      title: 'Assign related people',
      description: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'
    },
    {
      number: '3',
      title: 'Make it done',
      description: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] leading-tight mb-6">
              Manage your projects fast
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-10">
              With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
            </p>

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right mockup - Calendar and event management */}
          <div className="relative">
            <div className="relative">
              {/* Background calendar */}
              <img
                src="./assets/images/content-calendar-bg.png"
                alt="Calendar background"
                className="absolute opacity-50 top-0 left-0 w-1/2"
                loading="lazy"
              />
              {/* Main calendar card */}
              <img
                src="./assets/images/content-calendar-card.png"
                alt="Calendar card showing team events"
                className="relative z-10 mb-4"
                loading="lazy"
              />
              {/* Event detail card */}
              <img
                src="./assets/images/content-event-card.png"
                alt="Event details card with schedule"
                className="relative z-20"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
