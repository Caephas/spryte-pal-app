import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-6 font-display tracking-tight">
              Spryte Pal
            </h3>
            <p className="text-white/80 max-w-md leading-relaxed mb-6">
              Empowering the next generation with AI-powered storytelling. We
              believe every story is an opportunity to learn, grow, and dream.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-accent">Contact Us</h4>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                hello@sprytepal.com
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                +1 (555) 123-4567
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3 text-white/80">
              <li>
                <a
                  href="#features"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>
            © {new Date().getFullYear()} Spryte Pal. All rights reserved.{" "}
            <br className="md:hidden" /> Designed with ❤️ for kids everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
