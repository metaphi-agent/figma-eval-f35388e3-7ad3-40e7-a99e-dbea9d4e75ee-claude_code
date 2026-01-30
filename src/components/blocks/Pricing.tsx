import Button from '../ui/Button';

export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: 29,
      description: 'With lots of unique blocks, you can easily build a page without coding.',
      features: [
        'Commercial use',
        '100+ HTML UI Elements',
        'Unlimited Domain Support',
        '6 Month Premium Support',
        'Lifetime Updates'
      ],
      featured: false
    },
    {
      name: 'Standard',
      price: 49,
      description: 'With lots of unique blocks, you can easily build a page without coding.',
      features: [
        'Commercial use',
        '100+ HTML UI Elements',
        'Unlimited Domain Support',
        '6 Month Premium Support',
        'Lifetime Updates'
      ],
      featured: true
    },
    {
      name: 'Premium',
      price: 99,
      description: 'With lots of unique blocks, you can easily build a page without coding.',
      features: [
        'Commercial use',
        '100+ HTML UI Elements',
        'Unlimited Domain Support',
        '6 Month Premium Support',
        'Lifetime Updates'
      ],
      featured: false
    }
  ];

  return (
    <section className="bg-[var(--color-dark-navy)] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Pricing & Plans
          </h2>
          <p className="text-lg text-gray-400 max-w-[600px] mx-auto">
            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.featured
                  ? 'bg-white shadow-[var(--shadow-xl)]'
                  : 'bg-[var(--color-dark-navy-light)] border-2 border-gray-700'
              }`}
            >
              <div className="text-center mb-8">
                <div className={`text-sm font-semibold mb-4 ${plan.featured ? 'text-[var(--color-primary)]' : 'text-gray-400'}`}>
                  {plan.name}
                </div>
                <div className={`text-5xl font-bold mb-2 ${plan.featured ? 'text-[var(--color-text-primary)]' : 'text-white'}`}>
                  ${plan.price}
                </div>
                <div className={`text-sm ${plan.featured ? 'text-[var(--color-text-secondary)]' : 'text-gray-400'}`}>
                  / month
                </div>
              </div>

              <p className={`text-center mb-8 ${plan.featured ? 'text-[var(--color-text-secondary)]' : 'text-gray-400'}`}>
                {plan.description}
              </p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 ${plan.featured ? 'text-[var(--color-success)]' : 'text-gray-500'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.featured ? 'text-[var(--color-text-primary)]' : 'text-gray-300'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button variant={plan.featured ? 'primary' : 'outline'} className="w-full">
                Get started for free
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
