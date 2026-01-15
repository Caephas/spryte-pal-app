import ParticleBackground from '../three/ParticleBackground';

export default function Hero() {
    return (
        <section className="relative py-20 px-4 bg-gradient-to-b from-white to-cream overflow-hidden">
            <ParticleBackground />
            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1
                            className="text-5xl md:text-6xl font-bold text-primary leading-tight font-display"
                        >
                            AI-Powered Stories That Teach Life Skills
                        </h1>
                        <p className="text-lg text-gray-700 font-medium">
                            Spryte Pal uses personalized storytelling to help children learn essential skills like safety, health habits, and responsible digital behavior—all while keeping their data private and secure.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#signup"
                                className="inline-flex items-center justify-center px-8 h-11 bg-primary hover:bg-secondary text-white font-bold rounded-lg transition-all transform hover:scale-105"
                            >
                                Join Waitlist
                            </a>
                            <a
                                href="#investors"
                                className="inline-flex items-center justify-center px-8 h-11 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-lg transition-colors"
                            >
                                For Investors
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src="https://mgx-backend-cdn.metadl.com/generate/images/904523/2026-01-15/6daef7b2-24c5-48b9-a8e5-4c884ddd0ed1.png"
                            alt="Spryte Character"
                            className="w-full max-w-md animate-float"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
