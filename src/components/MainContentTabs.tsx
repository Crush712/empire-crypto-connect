
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Users, Coins, Star, TrendingUp, CheckCircle } from "lucide-react";
import EscrowInfo from "@/components/EscrowInfo";

const MainContentTabs = () => {
  return (
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
  );
};

export default MainContentTabs;
