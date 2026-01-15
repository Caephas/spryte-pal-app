export default function Footer() {
    return (
        <footer className="bg-primary text-white py-12 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3
                            className="text-2xl font-bold mb-4 font-display"
                        >
                            Spryte Pal
                        </h3>
                        <p className="text-white/80">
                            AI-powered storytelling for children's essential life skills education.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Contact</h4>
                        <div className="space-y-2 text-white/80">
                            <p>hello@sprytepal.com</p>
                            <p>+123-456-7890</p>
                            <p>www.sprytepal.com</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Quick Links</h4>
                        <div className="space-y-2 text-white/80">
                            <a href="#features" className="block hover:text-secondary transition-colors">
                                Features
                            </a>
                            <a href="#privacy" className="block hover:text-secondary transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#investors" className="block hover:text-secondary transition-colors">
                                For Investors
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/20 pt-8 text-center text-white/60">
                    <p>
                        © 2026 Spryte Pal. All rights reserved. Built with care for children who want a friendly, magical companion to learn with.
                    </p>
                </div>
            </div>
        </footer>
    );
}
