import UsdcLogo from '../assets/usd-coin-usdc-logo.svg';
import SolanaLogo from '../assets/solana-sol-logo.svg';

const Revolution = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1920px] mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-black/5 backdrop-blur-sm border border-black/10 rounded-full px-4 py-2 mb-6 transform hover:scale-105 transition-transform duration-200">
            <span className="text-sm font-medium text-black">Revolutionizing Finance</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
            A Revolution to Stable Coin Adoption
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Card - USDC */}
          <div className="bg-gradient-to-br from-black to-gray-900 border border-gray-800 rounded-2xl p-16 flex items-center justify-center min-h-[500px] lg:min-h-[700px] transform hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-2xl">
            <div className="w-80 h-80 lg:w-[500px] lg:h-[500px] flex items-center justify-center">
              <img
                src={UsdcLogo}
                alt="USDC Logo"
                className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
          {/* Right Card */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-16 min-h-[500px] lg:min-h-[700px] flex flex-col justify-center shadow-lg hover:shadow-xl transition-all duration-300">
            <p className="text-sm text-gray-500 mb-6 font-medium">Founding a revolutionized World</p>
            <h6 className="text-3xl md:text-4xl lg:text-5xl leading-tight bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
              USDC or Stables has been the back bone in the financial market,
              We want you to have control over your stables
            </h6>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bottom Left */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-16 min-h-[500px] lg:min-h-[700px] flex flex-col justify-center shadow-lg hover:shadow-xl transition-all duration-300">
            <p className="text-sm text-gray-500 mb-6 font-medium">Keys to the new world</p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl leading-tight bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
              Solana is the fastest-growing blockchain ecosystem in DeFi and Web3,
              with SOL as its currency. Famed for its speed, near-zero fees
            </h3>
          </div>
          {/* Bottom Right - Solana */}
          <div className="bg-gradient-to-br from-black to-gray-900 border border-gray-800 rounded-2xl p-16 flex items-center justify-center min-h-[500px] lg:min-h-[700px] transform hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-2xl">
            <div className="w-80 h-80 lg:w-[500px] lg:h-[500px] flex items-center justify-center">
              <img
                src={SolanaLogo}
                alt="Solana Logo"
                className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Revolution;