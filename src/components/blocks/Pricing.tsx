import Button from '../ui/Button';

const plans = [
  {
    name: 'Basic',
    tag: 'BASIC',
    price: '$29',
    period: 'One time purchase',
    description: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    featured: false
  },
  {
    name: 'Standard',
    tag: 'STANDARD',
    price: '$49',
    period: 'One time purchase',
    description: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    featured: true
  },
  {
    name: 'Premium',
    tag: 'PREMIUM',
    price: '$99',
    period: 'One time purchase',
    description: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    featured: false
  }
];

export default function Pricing() {
  return (
    <section className="relative">
      {/* Wave separator */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-[#FCFDFE]">
        <svg viewBox="0 0 1600 63" fill="none" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0 63H1600V0C1600 0 1400 63 800 63C200 63 0 0 0 0V63Z" fill="#161C2D"/>
        </svg>
      </div>

      {/* Dark background section */}
      <div className="bg-[#161C2D] pt-24 pb-20">
        <div className="container-custom">
          {/* Section Title */}
          <div className="text-center max-w-[600px] mx-auto mb-16">
            <h2 className="heading-2 text-white mb-4">
              Pricing & Plans
            </h2>
            <p className="body-text text-white/70">
              With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-[10px] p-8 text-center"
              >
                <span className="inline-block px-4 py-1 bg-[#5454D4]/10 text-[#5454D4] text-sm font-bold rounded-full mb-4">
                  {plan.tag}
                </span>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-[#161C2D]">{plan.price}</span>
                </div>
                <p className="text-sm text-[#161C2D]/50 mb-6">{plan.period}</p>
                <p className="small-text text-[#161C2D]/70 mb-8">
                  {plan.description}
                </p>
                <Button
                  variant={plan.featured ? 'primary' : 'outline'}
                  className="w-full"
                >
                  Get started for free
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
