
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Shield, Gift, Users } from "lucide-react";

const SellerRegistrationForm = () => {
  const [formData, setFormData] = useState({
    displayName: "",
    bio: "",
    country: "",
    walletAddress: "",
    portfolioLink: "",
    referralCode: "",
    categories: [] as string[],
    escrowAgreement: false,
    captcha: "",
  });
  const [referralLink, setReferralLink] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const categories = [
    { id: "goods", label: "Physical Goods" },
    { id: "services", label: "Services" },
    { id: "digital", label: "Digital Products" },
  ];

  const countries = [
    "United States", "Canada", "United Kingdom", "Germany", "France", 
    "Australia", "Japan", "South Korea", "Singapore", "Netherlands",
    "Switzerland", "India", "Brazil", "Mexico", "Other"
  ];

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        categories: [...prev.categories, categoryId]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        categories: prev.categories.filter(id => id !== categoryId)
      }));
    }
  };

  const generateReferralCode = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.displayName || !formData.bio || !formData.country || 
        !formData.walletAddress || formData.categories.length === 0 || 
        !formData.escrowAgreement) {
      toast({
        title: "Please fill in all required fields",
        description: "Make sure to select at least one category and agree to the escrow terms.",
        variant: "destructive",
      });
      return;
    }

    // Generate referral link
    const referralCode = generateReferralCode();
    const link = `https://knowempire.com/ref/${referralCode}`;
    setReferralLink(link);
    setIsSubmitted(true);

    toast({
      title: "🎉 Registration Successful!",
      description: "Welcome to KnowEmpire! You've earned 500 $KNOW tokens.",
    });
  };

  if (isSubmitted) {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="w-8 h-8 text-green-600" />
          </div>
          <CardTitle className="text-green-800">Welcome to KnowEmpire!</CardTitle>
          <CardDescription className="text-green-600">
            Your seller account has been created successfully.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-800 mb-2">🎁 Rewards Earned</h3>
            <p className="text-green-600">500 $KNOW tokens added to your account!</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-800 mb-2">📱 Your Referral Link</h3>
            <div className="flex items-center space-x-2">
              <Input value={referralLink} readOnly className="flex-1" />
              <Button 
                onClick={() => navigator.clipboard.writeText(referralLink)}
                variant="outline"
                size="sm"
              >
                Copy
              </Button>
            </div>
            <p className="text-sm text-green-600 mt-2">
              Share this link to earn 100 $KNOW for each person who joins!
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-purple-200">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Users className="w-5 h-5 text-purple-600" />
          <span>Become a Seller</span>
        </CardTitle>
        <CardDescription>
          Join thousands of sellers on KnowEmpire and start earning crypto rewards
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Categories */}
          <div className="space-y-3">
            <Label className="text-base font-medium">What will you sell? *</Label>
            <div className="grid grid-cols-1 gap-3">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-3">
                  <Checkbox
                    id={category.id}
                    checked={formData.categories.includes(category.id)}
                    onCheckedChange={(checked) => 
                      handleCategoryChange(category.id, checked as boolean)
                    }
                  />
                  <Label htmlFor={category.id} className="cursor-pointer">
                    {category.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Display Name */}
          <div className="space-y-2">
            <Label htmlFor="displayName">Display Name *</Label>
            <Input
              id="displayName"
              placeholder="Your public display name"
              value={formData.displayName}
              onChange={(e) => setFormData(prev => ({ ...prev, displayName: e.target.value }))}
              required
            />
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <Label htmlFor="bio">Bio *</Label>
            <Textarea
              id="bio"
              placeholder="Tell buyers about yourself and what you offer..."
              value={formData.bio}
              onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
              rows={3}
              required
            />
          </div>

          {/* Country */}
          <div className="space-y-2">
            <Label htmlFor="country">Country *</Label>
            <Select onValueChange={(value) => setFormData(prev => ({ ...prev, country: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Wallet Address */}
          <div className="space-y-2">
            <Label htmlFor="walletAddress">Wallet Address *</Label>
            <Input
              id="walletAddress"
              placeholder="0x..."
              value={formData.walletAddress}
              onChange={(e) => setFormData(prev => ({ ...prev, walletAddress: e.target.value }))}
              required
            />
          </div>

          {/* Portfolio Link */}
          <div className="space-y-2">
            <Label htmlFor="portfolioLink">Portfolio/Sample Link <span className="text-gray-500">(Optional)</span></Label>
            <Input
              id="portfolioLink"
              placeholder="https://your-portfolio.com"
              value={formData.portfolioLink}
              onChange={(e) => setFormData(prev => ({ ...prev, portfolioLink: e.target.value }))}
            />
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

          {/* Escrow Agreement */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="escrowAgreement"
                checked={formData.escrowAgreement}
                onCheckedChange={(checked) => 
                  setFormData(prev => ({ ...prev, escrowAgreement: checked as boolean }))
                }
                required
              />
              <div className="flex-1">
                <Label htmlFor="escrowAgreement" className="cursor-pointer">
                  I agree to fulfill my obligations. I understand that the escrow system protects both the buyer and the seller. *
                </Label>
              </div>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-purple-600 hover:bg-purple-700"
            size="lg"
          >
            Register as Seller
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SellerRegistrationForm;
