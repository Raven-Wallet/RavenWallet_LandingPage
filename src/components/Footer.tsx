import { ArrowRight, Twitter, Github, MessageCircle, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-black/5 backdrop-blur-sm border border-black/10 rounded-full px-4 py-2 mb-6 transform hover:scale-105 transition-transform duration-200">
            <Award className="h-4 w-4 text-black" />
            <span className="text-sm font-medium text-black">Join the Elite</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
            Ready for Premium Web3?
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join 500,000+ investors who trust our platform with their digital assets.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-3.5 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button className="px-8 py-3.5 bg-white text-black rounded-xl font-medium hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-gray-200">
              View Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <div className="border-t border-gray-200 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <div>
                <span className="font-bold text-2xl bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">Raven Wallet</span>
                <p className="text-sm text-gray-600">Premium Web3</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
                <Twitter className="h-5 w-5 text-black" />
              </button>
              <button className="p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
                <Github className="h-5 w-5 text-black" />
              </button>
              <button className="p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
                <MessageCircle className="h-5 w-5 text-black" />
              </button>
            </div>
          </div>
          
          <div className="mt-12 pt-5 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-6">
              <span>&copy; 2025 Raven Wallet. All rights reserved.</span>
              <a href="#" className="hover:text-black transition-colors duration-200">Privacy</a>
              <a href="#" className="hover:text-black transition-colors duration-200">Terms</a>
              <a href="#" className="hover:text-black transition-colors duration-200">Security</a>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>Built for the Solana ecosystem</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;