import React from 'react';
import { ArrowRight, Activity, Wallet, History, Coins } from 'lucide-react';
import SolanaLogo from '../assets/solana-sol-logo.svg';

// Define animation styles as a constant
const animationStyles = `
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
`;

const AppUtil: React.FC = () => {
  const features = [
    {
      icon: <Wallet className="w-12 h-12 text-white" />,
      title: "Built on Solana",
      description: "Leveraging Solana's high-performance blockchain for fast and efficient transactions",
      showSolanaLogo: true
    },
    {
      icon: <Activity className="w-12 h-12 text-white" />,
      title: "Seamless DApp Access",
      description: "Connect and interact with decentralized applications effortlessly"
    },
    {
      icon: <History className="w-12 h-12 text-white" />,
      title: "Transaction History",
      description: "Monitor all your activities with comprehensive transaction history"
    },
    {
      icon: <Coins className="w-12 h-12 text-white" />,
      title: "Unlimited Transactions",
      description: "No limits on transactions and token balance tracking"
    }
  ];

  return (
    <section className="py-32 px-0 sm:px-0 lg:px-0 overflow-hidden">
      <div className="max-w-[100vw] mx-auto">
        <div className="text-center mb-10 px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the full potential of decentralized finance with our comprehensive suite of features
          </p>
        </div>

        <div className="relative">
          <div className="overflow-x-auto pb-16 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory">
            <div className="flex gap-16 min-w-max pl-[calc(50vw-400px)] pr-[calc(50vw-500px)] py-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-black to-gray-900 rounded-2xl p-16 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl w-[500px] h-[700px] flex flex-col snap-center relative hover-animate-jump-shake"
                >
                  <div className="bg-gray-900 w-24 h-24 rounded-xl flex items-center justify-center mb-12">
                    {feature.icon}
                  </div>
                  <h3 className="text-4xl font-semibold mb-10 text-white">{feature.title}</h3>
                  <p className="text-gray-300 text-2xl flex-grow leading-relaxed">{feature.description}</p>
                  {feature.showSolanaLogo && (
                    <div className="absolute bottom-8 right-8 w-32 h-32">
                      <img
                        src={SolanaLogo}
                        alt="Solana Logo"
                        className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center px-4">
          <button className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 text-lg">
            Learn More
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Inject styles safely */}
      <style>{animationStyles}</style>
    </section>
  );
};

export default AppUtil;