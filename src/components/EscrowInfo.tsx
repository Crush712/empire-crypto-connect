
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, CheckCircle, AlertTriangle } from "lucide-react";

const EscrowInfo = () => {
  const steps = [
    {
      icon: <Lock className="w-6 h-6 text-purple-600" />,
      title: "Funds Secured",
      description: "Buyer's payment is held in escrow until delivery is confirmed"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      title: "Delivery Confirmed",
      description: "Buyer confirms receipt and satisfaction with the goods/service"
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Payment Released",
      description: "Funds are automatically released to the seller"
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How Escrow Protection Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our escrow system ensures safe transactions for both buyers and sellers, eliminating the risk of fraud and disputes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-gray-100">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-green-800">
                <CheckCircle className="w-5 h-5" />
                <span>For Buyers</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-green-700">Your payment is protected until you receive your order</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-green-700">Dispute resolution available if issues arise</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-green-700">Full refund if seller doesn't deliver</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-800">
                <Shield className="w-5 h-5" />
                <span>For Sellers</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-blue-700">Guaranteed payment once you fulfill your obligations</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-blue-700">Protection against fraudulent chargeback claims</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-blue-700">Clear terms and conditions for all transactions</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-lg">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">Important Note</h3>
              <p className="text-amber-700">
                All transactions are governed by our escrow smart contract. By using KnowEmpire, you agree to abide by the terms and conditions of our escrow system. Disputes are resolved through our decentralized arbitration process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EscrowInfo;
