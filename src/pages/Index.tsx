
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Users, Coins, Star, TrendingUp, CheckCircle, Wallet } from "lucide-react";
import SellerRegistrationForm from "@/components/SellerRegistrationForm";
import BuyerWaitlistForm from "@/components/BuyerWaitlistForm";
import LiveSellerCount from "@/components/LiveSellerCount";
import EscrowInfo from "@/components/EscrowInfo";
import ReferralLeaderboard from "@/components/ReferralLeaderboard";
import WalletConnector from "@/components/WalletConnector";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [activeForm, setActiveForm] = useState<'seller' | 'buyer' | null>(null);
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string>("");
  const { toast } = useToast();

  const scrollToForms = () => {
    const formsSection = document.getElementById('join-forms');
    formsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWalletConnect = (address: string) => {
    setWalletConnected(true);
    setWalletAddress(address);
    toast({
      title: "Wallet Connected!",
      description: `Connected to ${address.slice(0, 6)}...${address.slice(-4)}`,
    });
  };

  const handleJoinWaitlist = () => {
    if (!walletConnected) {
      toast({
        title: "Connect your wallet first",
        description: "Please connect your Farcaster wallet to join the waitlist",
        variant: "destructive",
      });
      return;
    }
    setActiveForm('buyer');
    scrollToForms();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Header */}
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
              onConnect={handleWalletConnect}
              isConnected={walletConnected}
              address={walletAddress}
            />
            <Button onClick={scrollToForms} className="bg-purple-600 hover:bg-purple-700">
              Join Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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
                onClick={scrollToForms} 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4"
              >
                Start Selling
              </Button>
              <Button 
                onClick={handleJoinWaitlist} 
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

      {/* Main Content Tabs */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learn More About KnowEmpire</h2>
            <p className="text-lg text-gray-600">Everything you need to know about our platform</p>
          </div>
          
          <Tabs defaultValue="overview" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 h-12 bg-gray-100 rounded-lg p-1">
              <TabsTrigger 
                value="overview" 
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md transition-all"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="users"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md transition-all"
              >
                Who Can Use
              </TabsTrigger>
              <TabsTrigger 
                value="escrow"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md transition-all"
              >
                Escrow Safety
              </TabsTrigger>
              <TabsTrigger 
                value="rewards"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md transition-all"
              >
                Rewards
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-8 space-y-6">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-purple-100 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Shield className="w-10 h-10 text-purple-600 mb-2" />
                    <CardTitle>Escrow Protected</CardTitle>
                    <CardDescription>
                      Every transaction is secured by our escrow system, protecting both buyers and sellers.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-purple-100 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Coins className="w-10 h-10 text-purple-600 mb-2" />
                    <CardTitle>Crypto-Native</CardTitle>
                    <CardDescription>
                      Built for the crypto economy with native token rewards and blockchain-based payments.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-purple-100 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Users className="w-10 h-10 text-purple-600 mb-2" />
                    <CardTitle>Global Community</CardTitle>
                    <CardDescription>
                      Connect with buyers and sellers worldwide in a trustless, decentralized marketplace.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="users" className="mt-8 space-y-6">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Physical Goods</h3>
                  <p className="text-gray-600">Sell handmade items, collectibles, electronics, and more with secure escrow protection.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Services</h3>
                  <p className="text-gray-600">Offer consulting, design, development, marketing, and professional services.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Products</h3>
                  <p className="text-gray-600">Sell courses, ebooks, software, NFTs, and other digital assets.</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="escrow" className="mt-8 space-y-6">
              <EscrowInfo />
            </TabsContent>
            
            <TabsContent value="rewards" className="mt-8 space-y-6">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Earn $KNOW Tokens</h3>
                <p className="text-lg mb-8 opacity-90">Get rewarded for participating in the KnowEmpire ecosystem</p>
                <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="text-3xl font-bold mb-2">500 $KNOW</div>
                    <div className="text-sm opacity-80">Registration Bonus</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="text-3xl font-bold mb-2">100 $KNOW</div>
                    <div className="text-sm opacity-80">Per Referral</div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Join Forms */}
      <section id="join-forms" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join KnowEmpire</h2>
            <p className="text-lg text-gray-600">Choose your path to get started</p>
          </div>
          
          <div className="flex justify-center space-x-4 mb-8">
            <Button 
              onClick={() => setActiveForm('seller')}
              variant={activeForm === 'seller' ? 'default' : 'outline'}
              className={activeForm === 'seller' ? 'bg-purple-600 hover:bg-purple-700' : 'border-purple-200 text-purple-700 hover:bg-purple-50'}
            >
              Become a Seller
            </Button>
            <Button 
              onClick={() => setActiveForm('buyer')}
              variant={activeForm === 'buyer' ? 'default' : 'outline'}
              className={activeForm === 'buyer' ? 'bg-purple-600 hover:bg-purple-700' : 'border-purple-200 text-purple-700 hover:bg-purple-50'}
            >
              Join Buyer Waitlist
            </Button>
          </div>

          <div className="max-w-2xl mx-auto">
            {activeForm === 'seller' && <SellerRegistrationForm />}
            {activeForm === 'buyer' && (
              <BuyerWaitlistForm 
                walletAddress={walletAddress}
                isWalletConnected={walletConnected}
              />
            )}
            {!activeForm && (
              <div className="text-center py-8">
                <p className="text-gray-500">Select an option above to get started</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Referral Leaderboard */}
      <ReferralLeaderboard />

      {/* Footer */}
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
    </div>
  );
};

export default Index;
