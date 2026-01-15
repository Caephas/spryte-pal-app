import { TrendingUp, Shield, Users } from 'lucide-react';

const investorPoints = [
    {
        icon: TrendingUp,
        title: 'Growing Market',
        description: 'EdTech market projected to reach $404B by 2025, with AI-powered learning leading growth.',
    },
    {
        icon: Shield,
        title: 'Privacy-First Advantage',
        description: 'Unique positioning in market with on-device processing and no data training.',
    },
    {
        icon: Users,
        title: 'Strong Demand',
        description: 'Parents actively seeking safe, effective educational tools for digital-native children.',
    },
];

export default function Investors() {
    return (
        <section id="investors" className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2
                            className="text-4xl md:text-5xl font-bold text-primary font-display"
                        >
                            Investment Opportunity
                        </h2>
                        <p className="text-lg text-gray-700">
                            Join us in revolutionizing children's education through AI-powered storytelling. We're building the future of personalized learning.
                        </p>
                        <div className="space-y-4">
                            {investorPoints.map((point) => (
                                <div key={point.title} className="flex gap-3 items-start">
                                    <point.icon className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-primary mb-1">{point.title}</h4>
                                        <p className="text-gray-600">{point.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="inline-flex items-center justify-center px-8 h-11 bg-secondary hover:bg-primary text-white font-bold rounded-lg transition-colors">
                            Contact for Investment Details
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src="https://mgx-backend-cdn.metadl.com/generate/images/904523/2026-01-15/aa2ff470-8ebb-4a87-ac9e-e6ae1f8a9167.png"
                            alt="Market growth chart"
                            className="w-full max-w-md rounded-2xl shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
