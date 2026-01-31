export default function Features() {
  const features = [
    {
      title: 'Project management',
      description: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
      icon: './assets/icons/icon-project-management.png'
    },
    {
      title: 'Time tracking',
      description: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
      icon: './assets/icons/icon-time-tracking.png'
    },
    {
      title: 'Beautiful mobile app',
      description: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
      icon: './assets/icons/icon-mobile-app.png'
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-left">
              <img
                src={feature.icon}
                alt={`${feature.title} icon`}
                className="w-auto h-auto max-w-full mb-6"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
