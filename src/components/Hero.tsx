import { ArrowRight, Smartphone, Globe, Shield} from 'lucide-react';
import { useState, useEffect } from 'react';
import UsdcLogo from '../assets/usd-coin-usdc-logo.svg';
import SolanaLogo from '../assets/solana-sol-logo.svg';

// Custom hook for smooth counting animation
const useCountAnimation = (targetValue: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    const startValue = count;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentValue = startValue + (targetValue - startValue) * easeOutQuart;
      setCount(Number(currentValue.toFixed(2)));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [targetValue, duration]);

  return count;
};

const Hero = () => {
  const [balance, setBalance] = useState(3247.89);
  const animatedBalance = useCountAnimation(balance);

  // Update balance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a random balance between 2800 and 3500
      const newBalance = Math.random() * (3500 - 2800) + 2800;
      setBalance(Number(newBalance.toFixed(2)));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center p-4 lg:p-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full max-w-8xl mx-auto rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl">
          <div className="px-6 py-12 lg:px-12 lg:py-16 text-center bg-gradient-to-br from-black via-gray-900 to-black">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 transform hover:scale-105 transition-transform duration-200">
              <Shield className="h-4 w-4 text-emerald-400" />
              <span className="text-sm font-medium text-white">Enterprise Security</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8 leading-tight">
              <span className="text-white">Building Solana's Most</span>
              <br />
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Trusted Non-Custodial Wallet</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 lg:mb-12 max-w-2xl mx-auto px-4">
              We are making web3 experience more accessible and secure for everyone.
            </p>
            
            {/* Stats */}
            {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10 lg:mb-12 text-sm lg:text-base text-gray-300">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
                <TrendingUp className="h-4 w-4 text-emerald-400" />
                <span>$2.8B+ Secured</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full"></div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>500K+ Users</span>
              </div>
            </div> */}
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 lg:mb-16 px-4">
              <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 font-medium bg-white text-black rounded-lg hover:bg-gray-100 transition-all duration-200 text-sm lg:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                <Globe className="mr-2 h-4 w-4" />
                Launch Web App
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 font-medium border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white rounded-lg transition-all duration-200 text-sm lg:text-base transform hover:-translate-y-0.5">
                <Smartphone className="mr-2 h-4 w-4" />
                Download Mobile
              </button>
            </div>

            {/* Wallet Interface Card */}
            <div className="max-w-4xl mx-auto px-4">
              <div className="bg-white/95 backdrop-blur-md border border-white/20 rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div>
                      <h3 className="font-semibold text-black text-lg lg:text-xl">Raven Wallet</h3>
                    </div>
                  </div>
                </div>
                
                {/* Balance */}
                <div className="text-center mb-8">
                  <p className="text-sm lg:text-base text-gray-600 mb-2">Total Balance</p>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent mb-2">
                    ${animatedBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                  <p className="text-sm lg:text-base text-emerald-500 font-medium">+24.7% (+$647.23)</p>
                </div>
                
                {/* Actions */}
                <div className="flex gap-2 sm:gap-3 justify-center mb-8">
                  <div className="bg-gray-900 text-white px-4 sm:px-6 py-2 lg:py-3 rounded-lg text-sm lg:text-base font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                    Send
                  </div>
                  <div className="bg-gray-100 text-black px-4 sm:px-6 py-2 lg:py-3 rounded-lg text-sm lg:text-base font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                    Receive
                  </div>
                  <div className="bg-gray-100 text-black px-4 sm:px-6 py-2 lg:py-3 rounded-lg text-sm lg:text-base font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                    Swap
                  </div>
                </div>
                
                {/* Assets */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-black text-lg lg:text-xl">Assets</h4>
                    <span className="text-sm lg:text-base text-gray-600">8 tokens</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-colors duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center">
                          <img src={SolanaLogo} alt="Solana" className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black">Solana</h4>
                          <p className="text-sm text-black">SOL</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-black">245.67</p>
                        <p className="text-sm text-black">$28,456.80</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-colors duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center">
                          <img src={UsdcLogo} alt="USDC" className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black">USD Coin</h4>
                          <p className="text-sm text-text-black">USDC</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-black">18,873.07</p>
                        <p className="text-sm text-black">$18,873.07</p>
                      </div>
                    </div>

                    <div className="text-center p-3 lg:p-4 border border-dashed border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                      <p className="text-sm lg:text-base text-gray-600">+ 6 more assets</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;