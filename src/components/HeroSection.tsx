
import { Button } from "@/components/ui/button";
import LiveSellerCount from "@/components/LiveSellerCount";

interface HeroSectionProps {
  onStartSelling: () => void;
  onJoinWaitlist: () => void;
}

const HeroSection = ({ onStartSelling, onJoinWaitlist }: HeroSectionProps) => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Sell Anything. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
              Powered by Crypto.
            </span> <br />
            Protected by Escrow.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The crypto-native P2P marketplace where you can safely buy and sell goods, digital products, and services with built-in escrow protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={onStartSelling} 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4"
            >
              Start Selling
            </Button>
            <Button 
              onClick={onJoinWaitlist} 
              variant="outline" 
              size="lg" 
              className="border-purple-200 text-purple-700 hover:bg-purple-50 text-lg px-8 py-4"
            >
              Join Waitlist
            </Button>
          </div>
          <LiveSellerCount />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
