
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">KE</span>
          </div>
          <span className="text-xl font-bold">KnowEmpire</span>
        </div>
        <p className="text-gray-400 mb-4">
          The crypto-native P2P marketplace for the future of commerce.
        </p>
        <div className="flex justify-center space-x-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
