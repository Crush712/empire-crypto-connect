
import { Button } from "@/components/ui/button";
import WalletConnector from "@/components/WalletConnector";

interface HeaderProps {
  walletConnected: boolean;
  walletAddress: string;
  onWalletConnect: (address: string) => void;
  onJoinNow: () => void;
}

const Header = ({ walletConnected, walletAddress, onWalletConnect, onJoinNow }: HeaderProps) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">KE</span>
          </div>
          <span className="text-xl font-bold text-gray-900">KnowEmpire</span>
        </div>
        <div className="flex items-center space-x-4">
          <WalletConnector 
            onConnect={onWalletConnect}
            isConnected={walletConnected}
            address={walletAddress}
          />
          <Button onClick={onJoinNow} className="bg-purple-600 hover:bg-purple-700">
            Join Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
