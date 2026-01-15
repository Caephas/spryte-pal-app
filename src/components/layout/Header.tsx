export default function Header() {
    return (
        <header className="border-b border-primary/10 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div
                        className="text-2xl font-bold text-primary font-display"
                    >
                        Spryte Pal
                    </div>
                </div>
                <nav className="hidden md:flex gap-6 font-semibold text-sm">
                    <a href="#features" className="text-primary hover:text-secondary transition-colors">
                        Features
                    </a>
                    <a href="#privacy" className="text-primary hover:text-secondary transition-colors">
                        Privacy
                    </a>
                    <a href="#investors" className="text-primary hover:text-secondary transition-colors">
                        Investors
                    </a>
                    <a href="#signup" className="text-primary hover:text-secondary transition-colors">
                        Get Early Access
                    </a>
                </nav>
            </div>
        </header>
    );
}
