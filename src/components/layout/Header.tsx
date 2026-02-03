export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
        <a href="/" className="flex items-center gap-2 group">
          <span className="text-2xl md:text-3xl font-bold text-primary font-display tracking-tight group-hover:text-secondary transition-colors">
            Spryte Pal
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <a
            href="#features"
            className="hover:text-primary transition-colors py-2"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="hover:text-primary transition-colors py-2"
          >
            How it Works
          </a>
          <a
            href="#stories"
            className="hover:text-primary transition-colors py-2"
          >
            Stories
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#signup"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-primary text-white font-bold rounded-full hover:bg-secondary transition-all transform hover:scale-105 shadow-md hover:shadow-lg text-sm"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </header>
  );
}
