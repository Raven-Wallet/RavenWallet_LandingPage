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
    <section className="py-24 px-6 bg-muted/20">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-20">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-10 bg-gradient-to-br from-black to-gray-900  h-full flex flex-col bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="h-7 w-7   text-white" />
              </div>
              <h3 className="text-2xl text-white font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground text-white text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;