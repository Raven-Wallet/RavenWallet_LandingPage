export default function KairosNavbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
            Raven Wallet
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#faq" className="text-gray-600 hover:text-black transition-all duration-200 relative group">
            FAQ
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a href="#about" className="text-gray-600 hover:text-black transition-all duration-200 relative group">
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a href="#features" className="text-gray-600 hover:text-black transition-all duration-200 relative group">
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a href="#security" className="text-gray-600 hover:text-black transition-all duration-200 relative group">
            Security
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="text-gray-600 hover:text-black transition-all duration-200 relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full"></span>
          </a>
        </div>

        {/* Launch Button */}
        <div className="flex items-center">
          <button className="bg-gray-900 text-white px-6 py-2.5 rounded-lg hover:bg-gray-900 transition-all duration-200 font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
            Launch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button className="text-gray-600 hover:text-black transition-colors duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}