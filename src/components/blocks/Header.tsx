import Button from '../ui/Button';

export default function Header() {
  return (
    <header className="bg-white border-b border-[var(--color-border)] sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-[var(--color-text-primary)]">
              Brainwave.io
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-150">
              Home
            </a>
            <a href="#pages" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-150">
              Pages
            </a>
            <a href="#support" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-150">
              Support
            </a>
            <a href="#contact" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-150">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button variant="primary" size="md">
              Get started for free
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
