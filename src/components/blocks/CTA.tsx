import Button from '../ui/Button';

export default function CTA() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-[500px]">
            <h2 className="heading-2 text-[#161C2D] mb-4">
              Build better landing page fast
            </h2>
            <p className="body-text text-[#161C2D]/70">
              With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <Button variant="outline">
              Learn more
            </Button>
            <Button variant="primary">
              Get it now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
