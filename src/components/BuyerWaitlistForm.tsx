
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Mail, CheckCircle, Wallet } from "lucide-react";

interface BuyerWaitlistFormProps {
  walletAddress?: string;
  isWalletConnected?: boolean;
}

const BuyerWaitlistForm = ({ walletAddress, isWalletConnected }: BuyerWaitlistFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interests: [] as string[],
    referralCode: "",
    captcha: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const interestOptions = [
    { id: "goods", label: "Physical Goods" },
    { id: "services", label: "Services" },
    { id: "digital", label: "Digital Products" },
  ];

  // Auto-fill wallet address when connected
  useEffect(() => {
    if (isWalletConnected && walletAddress) {
      setFormData(prev => ({
        ...prev,
        email: walletAddress
      }));
    }
  }, [walletAddress, isWalletConnected]);

  const handleInterestChange = (interestId: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        interests: [...prev.interests, interestId]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        interests: prev.interests.filter(id => id !== interestId)
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || formData.interests.length === 0 || formData.captcha !== "8") {
      toast({
        title: "Please fill in all required fields",
        description: "Make sure to complete the captcha and select your interests.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitted(true);
    toast({
      title: "🎉 You're on the waitlist!",
      description: "We'll notify you when KnowEmpire launches for buyers.",
    });
  };

  if (isSubmitted) {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <CardTitle className="text-green-800">You're on the waitlist!</CardTitle>
          <CardDescription className="text-green-600">
            We'll notify you as soon as KnowEmpire opens for buyers.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-white p-4 rounded-lg border border-green-200 text-center">
            <p className="text-green-800 font-medium">What's next?</p>
            <p className="text-green-600 text-sm mt-1">
              You'll be among the first to access our marketplace and get exclusive early buyer benefits!
            </p>
            {isWalletConnected && walletAddress && (
              <div className="mt-3 flex items-center justify-center space-x-2 text-green-600">
                <Wallet className="w-4 h-4" />
                <span className="text-sm">Wallet: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-purple-200">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Mail className="w-5 h-5 text-purple-600" />
          <span>Join Buyer Waitlist</span>
        </CardTitle>
        <CardDescription>
          {isWalletConnected 
            ? "Your wallet is connected! Complete the form below." 
            : "Be the first to know when KnowEmpire opens for buyers"
          }
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isWalletConnected && walletAddress && (
          <div className="mb-6 p-3 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-sm text-green-800 font-medium">
                Wallet Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
              </span>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Name or Username *</Label>
            <Input
              id="name"
              placeholder="Your name or username"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">
              {isWalletConnected ? "Wallet Address *" : "Email or Wallet Address *"}
            </Label>
            <Input
              id="email"
              placeholder={isWalletConnected ? "Auto-filled from wallet" : "your@email.com or 0x..."}
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
              disabled={isWalletConnected}
              className={isWalletConnected ? "bg-gray-50" : ""}
            />
          </div>

          {/* Interests */}
          <div className="space-y-3">
            <Label className="text-base font-medium">What are you interested in buying? *</Label>
            <div className="grid grid-cols-1 gap-3">
              {interestOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-3">
                  <Checkbox
                    id={option.id}
                    checked={formData.interests.includes(option.id)}
                    onCheckedChange={(checked) => 
                      handleInterestChange(option.id, checked as boolean)
                    }
                  />
                  <Label htmlFor={option.id} className="cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Referral Code */}
          <div className="space-y-2">
            <Label htmlFor="referralCode">Referral Code <span className="text-gray-500">(Optional)</span></Label>
            <Input
              id="referralCode"
              placeholder="Enter referral code"
              value={formData.referralCode}
              onChange={(e) => setFormData(prev => ({ ...prev, referralCode: e.target.value }))}
            />
          </div>

          {/* Simple Captcha */}
          <div className="space-y-2">
            <Label htmlFor="captcha">Verify you're human: What is 5 + 3? *</Label>
            <Input
              id="captcha"
              placeholder="Enter the answer"
              value={formData.captcha}
              onChange={(e) => setFormData(prev => ({ ...prev, captcha: e.target.value }))}
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-purple-600 hover:bg-purple-700"
            size="lg"
          >
            Join Waitlist
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BuyerWaitlistForm;
