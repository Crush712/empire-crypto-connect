
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Users, Coins, Star, TrendingUp, CheckCircle, Wallet, Menu, X } from "lucide-react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      {/* Mobile-Optimized Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">KE</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-900">KnowEmpire</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center space-x-3">
              <WalletConnector 
                onConnect={handleWalletConnect}
                isConnected={walletConnected}
                address={walletAddress}
              />
              <Button onClick={scrollToForms} size="sm" className="bg-purple-600 hover:bg-purple-700">
                Join Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="sm:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="sm:hidden mt-4 pb-4 border-t border-purple-100 pt-4">
              <div className="space-y-3">
                <WalletConnector 
                  onConnect={handleWalletConnect}
                  isConnected={walletConnected}
                  address={walletAddress}
                />
                <Button 
                  onClick={() => {
                    scrollToForms();
                    setMobileMenuOpen(false);
                  }} 
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  Join Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile-Optimized Hero Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Sell Anything. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
                Powered by Crypto.
              </span> <br />
              Protected by Escrow.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              The crypto-native P2P marketplace where you can safely buy and sell goods, digital products, and services with built-in escrow protection.
            </p>
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center mb-8 sm:mb-12 px-4">
              <Button 
                onClick={scrollToForms} 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              >
                Start Selling
              </Button>
              <Button 
                onClick={handleJoinWaitlist} 
                variant="outline" 
                size="lg" 
                className="border-purple-200 text-purple-700 hover:bg-purple-50 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              >
                Join Waitlist
              </Button>
            </div>
            <LiveSellerCount />
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Main Content Tabs */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Learn More About KnowEmpire</h2>
            <p className="text-base sm:text-lg text-gray-600 px-4">Everything you need to know about our platform</p>
          </div>
          
          <Tabs defaultValue="overview" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto sm:h-12 bg-gray-100 rounded-lg p-1 gap-1 sm:gap-0">
              <TabsTrigger 
                value="overview" 
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md transition-all text-xs sm:text-sm py-2 sm:py-0"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="users"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md transition-all text-xs sm:text-sm py-2 sm:py-0"
              >
                Who Can Use
              </TabsTrigger>
              <TabsTrigger 
                value="escrow"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md transition-all text-xs sm:text-sm py-2 sm:py-0"
              >
                Escrow Safety
              </TabsTrigger>
              <TabsTrigger 
                value="rewards"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md transition-all text-xs sm:text-sm py-2 sm:py-0"
              >
                Rewards
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6 sm:mt-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                <Card className="border-purple-100 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600 mb-2" />
                    <CardTitle className="text-lg sm:text-xl">Escrow Protected</CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      Every transaction is secured by our escrow system, protecting both buyers and sellers.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-purple-100 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <Coins className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600 mb-2" />
                    <CardTitle className="text-lg sm:text-xl">Crypto-Native</CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      Built for the crypto economy with native token rewards and blockchain-based payments.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-purple-100 hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
                  <CardHeader className="pb-4">
                    <Users className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600 mb-2" />
                    <CardTitle className="text-lg sm:text-xl">Global Community</CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      Connect with buyers and sellers worldwide in a trustless, decentralized marketplace.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="users" className="mt-6 sm:mt-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Physical Goods</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Sell handmade items, collectibles, electronics, and more with secure escrow protection.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Services</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Offer consulting, design, development, marketing, and professional services.</p>
                </div>
                <div className="text-center sm:col-span-2 lg:col-span-1">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Digital Products</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Sell courses, ebooks, software, NFTs, and other digital assets.</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="escrow" className="mt-6 sm:mt-8 space-y-6">
              <EscrowInfo />
            </TabsContent>
            
            <TabsContent value="rewards" className="mt-6 sm:mt-8 space-y-6">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-6 sm:p-8 text-white text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Earn $KNOW Tokens</h3>
                <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90">Get rewarded for participating in the KnowEmpire ecosystem</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
                    <div className="text-2xl sm:text-3xl font-bold mb-2">500 $KNOW</div>
                    <div className="text-xs sm:text-sm opacity-80">Registration Bonus</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
                    <div className="text-2xl sm:text-3xl font-bold mb-2">100 $KNOW</div>
                    <div className="text-xs sm:text-sm opacity-80">Per Referral</div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Mobile-Optimized Join Forms */}
      <section id="join-forms" className="py-12 sm:py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Join KnowEmpire</h2>
            <p className="text-base sm:text-lg text-gray-600 px-4">Choose your path to get started</p>
          </div>
          
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center mb-6 sm:mb-8 max-w-md mx-auto">
            <Button 
              onClick={() => setActiveForm('seller')}
              variant={activeForm === 'seller' ? 'default' : 'outline'}
              className={`w-full sm:w-auto text-sm sm:text-base py-2 sm:py-3 ${
                activeForm === 'seller' ? 'bg-purple-600 hover:bg-purple-700' : 'border-purple-200 text-purple-700 hover:bg-purple-50'
              }`}
            >
              Become a Seller
            </Button>
            <Button 
              onClick={() => setActiveForm('buyer')}
              variant={activeForm === 'buyer' ? 'default' : 'outline'}
              className={`w-full sm:w-auto text-sm sm:text-base py-2 sm:py-3 ${
                activeForm === 'buyer' ? 'bg-purple-600 hover:bg-purple-700' : 'border-purple-200 text-purple-700 hover:bg-purple-50'
              }`}
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
                <p className="text-gray-500 text-sm sm:text-base">Select an option above to get started</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Referral Leaderboard */}
      <ReferralLeaderboard />

      {/* Mobile-Optimized Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">KE</span>
            </div>
            <span className="text-lg sm:text-xl font-bold">KnowEmpire</span>
          </div>
          <p className="text-gray-400 mb-4 text-sm sm:text-base px-4">
            The crypto-native P2P marketplace for the future of commerce.
          </p>
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6 justify-center text-xs sm:text-sm text-gray-400">
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
