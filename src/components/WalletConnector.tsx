
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Wallet, CheckCircle, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WalletConnectorProps {
  onConnect: (address: string) => void;
  isConnected: boolean;
  address?: string;
}

const WalletConnector = ({ onConnect, isConnected, address }: WalletConnectorProps) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const { toast } = useToast();

  const connectFarcasterWallet = async () => {
    setIsConnecting(true);
    
    try {
      // Simulate wallet connection - in real implementation this would connect to Farcaster
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate a mock Farcaster wallet address
      const mockAddress = "0x" + Math.random().toString(16).substr(2, 40);
      
      onConnect(mockAddress);
      
      toast({
        title: "Farcaster Wallet Connected!",
        description: "Your wallet has been successfully connected.",
      });
    } catch (error) {
      toast({
        title: "Connection Failed",
        description: "Failed to connect to Farcaster wallet. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsConnecting(false);
    }
  };

  const connectMetaMask = async () => {
    setIsConnecting(true);
    
    try {
      // Check if MetaMask is installed
      if (typeof window.ethereum !== 'undefined') {
        // Request account access
        const accounts = await window.ethereum.request({ 
          method: 'eth_requestAccounts' 
        });
        
        if (accounts.length > 0) {
          onConnect(accounts[0]);
        }
      } else {
        toast({
          title: "MetaMask Not Found",
          description: "Please install MetaMask to connect your wallet.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Connection Failed",
        description: "Failed to connect to MetaMask. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsConnecting(false);
    }
  };

  if (isConnected && address) {
    return (
      <div className="flex items-center space-x-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
        <CheckCircle className="w-4 h-4 text-green-600" />
        <span className="text-sm text-green-800 font-medium">
          {address.slice(0, 6)}...{address.slice(-4)}
        </span>
      </div>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
          <Wallet className="w-4 h-4 mr-2" />
          Connect Wallet
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Connect Your Wallet</DialogTitle>
          <DialogDescription>
            Choose your preferred wallet to connect to KnowEmpire
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 mt-4">
          <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={connectFarcasterWallet}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">FC</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">Farcaster Wallet</CardTitle>
                    <CardDescription className="text-sm">Recommended for best experience</CardDescription>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </div>
            </CardHeader>
          </Card>

          <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={connectMetaMask}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-sm">MM</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">MetaMask</CardTitle>
                    <CardDescription className="text-sm">Connect with MetaMask extension</CardDescription>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </div>
            </CardHeader>
          </Card>
        </div>

        {isConnecting && (
          <div className="flex items-center justify-center py-4">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"></div>
            <span className="ml-2 text-sm text-gray-600">Connecting...</span>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WalletConnector;
