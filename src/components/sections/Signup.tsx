import { useState, FormEvent } from 'react';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            setEmail('');
        }
    };

    return (
        <section id="signup" className="py-20 px-4 bg-gradient-to-b from-cream to-accent/10">
            <div className="container mx-auto max-w-2xl text-center">
                <h2
                    className="text-4xl md:text-5xl font-bold text-primary mb-6 font-display"
                >
                    Get Early Access
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                    Be among the first to experience Spryte Pal. Join our waitlist and get exclusive early access when we launch.
                </p>
                {submitted ? (
                    <div className="bg-accent/20 border border-accent rounded-lg p-6 max-w-md mx-auto">
                        <p className="text-primary font-semibold">
                            🎉 Thank you for joining the waitlist! We'll be in touch soon.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="flex-1 h-12 px-4 rounded-lg border-2 border-primary/20 focus:border-primary focus:outline-none transition-colors"
                        />
                        <button
                            type="submit"
                            className="h-12 px-8 bg-primary hover:bg-secondary text-white font-bold rounded-lg transition-colors"
                        >
                            Join Waitlist
                        </button>
                    </form>
                )}
                <p className="text-sm text-gray-500 mt-6">
                    Coming Soon • Expected Launch: 2026
                </p>
            </div>
        </section>
    );
}
