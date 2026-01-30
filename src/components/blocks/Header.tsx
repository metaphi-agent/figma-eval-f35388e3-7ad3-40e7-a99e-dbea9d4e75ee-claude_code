import Button from '../ui/Button';

export default function Header() {
  const navItems = ['Demos', 'Pages', 'Support', 'Contact'];

  return (
    <header className="py-6">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-[#161C2D]" style={{ fontFamily: 'Rubik, sans-serif' }}>
            Brainwave.io
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[15px] font-bold text-[#161C2D] hover:text-[#5454D4] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <Button variant="primary" size="sm">
            Get started Free
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
