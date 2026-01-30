import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="pt-8 pb-20">
      <div className="container-custom">
        {/* Content */}
        <div className="text-center max-w-[619px] mx-auto mb-12">
          <h1 className="heading-1 text-[#161C2D] mb-6">
            Get things done by awesome remote team
          </h1>
          <p className="body-text text-[#161C2D]/70 mb-8">
            We share common trends and strategies for improving your rental income and making sure you stay in high demand.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button variant="primary">
              Get started for free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Button>
            <Button variant="secondary">
              Learn more
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative max-w-[844px] mx-auto">
          <img
            src="./assets/images/hero-dashboard.png"
            alt="Dashboard preview showing project management interface"
            className="w-full h-auto rounded-[10px] shadow-[0_42px_44px_-10px_rgba(1,23,48,0.12)]"
          />
        </div>
      </div>
    </section>
  );
}
