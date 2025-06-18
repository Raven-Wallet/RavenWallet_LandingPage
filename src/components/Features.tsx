import { Shield, Zap, Users, Lock, TrendingUp, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Military-Grade Security",
      description: "Multi-signature wallets and advanced encryption protect your assets with institutional-level security."
    },
    {
      icon: Zap,
      title: "Lightning Performance",
      description: "Execute transactions in under 400ms with Solana's high-throughput blockchain infrastructure."
    },
    {
      icon: Users,
      title: "Cross-Platform Sync",
      description: "Seamlessly manage your portfolio across web, mobile, and desktop with unified account management."
    },
    {
      icon: Lock,
      title: "Complete Self-Custody",
      description: "Maintain full control over your private keys and digital assets with no third-party dependencies."
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description: "Professional portfolio tracking and comprehensive DeFi analytics to maximize your returns."
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Trusted by leading institutions and recognized by top security auditors worldwide."
    }
  ];

  return (
    <section className="py-32 px-0 sm:px-0 lg:px-0 overflow-hidden">
      <div className="max-w-[100vw] mx-auto">
        <div className="text-center mb-10 px-4">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-2 mb-6">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Enterprise Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built for Professionals
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Next-generation wallet technology designed for institutional investors and DeFi professionals.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-x-auto pb-16 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory">
            <div className="flex gap-16 min-w-max pl-[calc(50vw-400px)] pr-[calc(50vw-500px)] py-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-16 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl w-[500px] h-[700px] flex flex-col snap-center hover-animate-jump-shake"
                >
                  <div className="w-24 h-24 bg-gray-900 rounded-xl flex items-center justify-center mb-12">
                    <feature.icon className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-4xl text-white font-semibold mb-10">{feature.title}</h3>
                  <p className="text-gray-300 text-2xl leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes jump-shake {
          0% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-30px) rotate(5deg); }
          50% { transform: translateY(0) rotate(0deg); }
          75% { transform: translateY(-15px) rotate(-5deg); }
          85% { transform: translateY(0) rotate(2deg); }
          92% { transform: translateY(-7px) rotate(-2deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        .hover-animate-jump-shake:hover {
          animation: jump-shake 0.8s ease;
          transform-origin: center bottom;
        }
      `}</style>
    </section>
  );
};

export default Features;