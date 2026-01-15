import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import HowItWorks from './components/sections/HowItWorks';
import Privacy from './components/sections/Privacy';
import Research from './components/sections/Research';
import Investors from './components/sections/Investors';
import Signup from './components/sections/Signup';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Privacy />
        <Research />
        <Investors />
        <Signup />
      </main>
      <Footer />
    </div>
  );
}

export default App;
