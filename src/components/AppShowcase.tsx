import { Download, ExternalLink, Star, Smartphone, Monitor, ArrowRight } from 'lucide-react';

const AppShowcase = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-black/5 backdrop-blur-sm border border-black/10 rounded-full px-4 py-2 mb-6 transform hover:scale-105 transition-transform duration-200">
            <Smartphone className="h-4 w-4 text-black" />
            <span className="text-sm font-medium text-black">Multi-Platform</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
            Access Anywhere
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional wallet experience across all your devices with seamless synchronization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Web Platform */}
          <div className="bg-gradient-to-br from-black via-gray-900 to-black border border-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl h-48 flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-lg">
                  <Monitor className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white">Web Platform</h4>
                <p className="text-gray-300">Full desktop experience</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-300">4.9/5 • 12K+ reviews</span>
            </div>
            
            <h3 className="text-2xl font-semibold mb-3 text-white">Professional Web Wallet</h3>
            <p className="text-gray-300 mb-6">
              Advanced trading interface with institutional-grade features for DeFi operations.
            </p>
            
            <button className="w-full bg-white text-black font-medium py-3.5 px-6 rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
              <ExternalLink className="h-4 w-4" />
              Launch Web Platform
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile Apps */}
          <div className="bg-gradient-to-br from-black via-gray-900 to-black border border-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl h-48 flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-lg relative">
                  <Smartphone className="h-8 w-8 text-white" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center shadow-md">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white">Mobile Apps</h4>
                <p className="text-gray-300">iOS & Android native</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-300">4.8/5 • 45K+ reviews</span>
            </div>
            
            <h3 className="text-2xl font-semibold mb-3 text-white">Native Mobile Experience</h3>
            <p className="text-gray-300 mb-6">
              Biometric authentication, push notifications, and offline transaction signing.
            </p>
            
            <div className="flex gap-3">
              <button className="flex-1 bg-white text-black font-medium py-3.5 px-4 rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                <Download className="h-4 w-4" />
                iOS App
              </button>
              <button className="flex-1 bg-white text-black font-medium py-3.5 px-4 rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                <Download className="h-4 w-4" />
                Android
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl p-8 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-105 transition-transform duration-200">
              <div className="text-2xl font-bold text-white mb-1">99.99%</div>
              <div className="text-sm text-gray-300">Uptime</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-200">
              <div className="text-2xl font-bold text-white mb-1">&lt;400ms</div>
              <div className="text-sm text-gray-300">Speed</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-200">
              <div className="text-2xl font-bold text-white mb-1">$2.8B+</div>
              <div className="text-sm text-gray-300">Secured</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-200">
              <div className="text-2xl font-bold text-white mb-1">500K+</div>
              <div className="text-sm text-gray-300">Users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;