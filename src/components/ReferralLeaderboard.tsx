
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Star } from "lucide-react";

const ReferralLeaderboard = () => {
  const topReferrers = [
    { rank: 1, name: "CryptoMaven", referrals: 47, wallet: "0x1234...5678", type: "seller" },
    { rank: 2, name: "DigitalNomad", referrals: 38, wallet: "0x2345...6789", type: "seller" },
    { rank: 3, name: "BlockchainBoss", referrals: 32, wallet: "0x3456...7890", type: "seller" },
    { rank: 4, name: "DeFiDegen", referrals: 29, wallet: "0x4567...8901", type: "seller" },
    { rank: 5, name: "NFTCollector", referrals: 24, wallet: "0x5678...9012", type: "seller" },
  ];

  const topSellers = [
    { rank: 1, name: "ArtisanCraft", sales: 156, wallet: "0x1111...2222", category: "Goods" },
    { rank: 2, name: "DevConsult", sales: 142, wallet: "0x2222...3333", category: "Services" },
    { rank: 3, name: "DigitalCreator", sales: 138, wallet: "0x3333...4444", category: "Digital" },
    { rank: 4, name: "HandmadeHero", sales: 121, wallet: "0x4444...5555", category: "Goods" },
    { rank: 5, name: "CodeMaster", sales: 109, wallet: "0x5555...6666", category: "Services" },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-5 h-5 text-yellow-500" />;
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Award className="w-5 h-5 text-amber-600" />;
      default:
        return <Star className="w-5 h-5 text-purple-500" />;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-400 to-yellow-500";
      case 2:
        return "bg-gradient-to-r from-gray-300 to-gray-400";
      case 3:
        return "bg-gradient-to-r from-amber-400 to-amber-500";
      default:
        return "bg-gradient-to-r from-purple-400 to-purple-500";
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Community Leaderboard</h2>
          <p className="text-lg text-gray-600">Top performers in the KnowEmpire community</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Top Referrers */}
          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-purple-600" />
                <span>Top Referrers</span>
              </CardTitle>
              <CardDescription>
                Members who brought the most people to KnowEmpire
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topReferrers.map((referrer) => (
                  <div
                    key={referrer.rank}
                    className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getRankColor(referrer.rank)}`}>
                        <span className="text-white font-bold text-sm">#{referrer.rank}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{referrer.name}</div>
                        <div className="text-sm text-gray-500">{referrer.wallet}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-purple-600">{referrer.referrals}</div>
                      <div className="text-sm text-gray-500">referrals</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Sellers */}
          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-purple-600" />
                <span>Top Sellers</span>
              </CardTitle>
              <CardDescription>
                Sellers with the highest transaction volume
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topSellers.map((seller) => (
                  <div
                    key={seller.rank}
                    className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getRankColor(seller.rank)}`}>
                        <span className="text-white font-bold text-sm">#{seller.rank}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{seller.name}</div>
                        <div className="text-sm text-gray-500">{seller.wallet}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-purple-600">{seller.sales}</div>
                      <div className="text-sm text-gray-500">sales</div>
                      <Badge variant="secondary" className="mt-1">
                        {seller.category}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReferralLeaderboard;
