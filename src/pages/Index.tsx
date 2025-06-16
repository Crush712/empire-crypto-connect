
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MainContentTabs from "@/components/MainContentTabs";
import JoinFormsSection from "@/components/JoinFormsSection";
import ReferralLeaderboard from "@/components/ReferralLeaderboard";
import Footer from "@/components/Footer";

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
      <Header 
        walletConnected={walletConnected}
        walletAddress={walletAddress}
        onWalletConnect={handleWalletConnect}
        onJoinNow={scrollToForms}
      />

      <HeroSection 
        onStartSelling={scrollToForms}
        onJoinWaitlist={handleJoinWaitlist}
      />

      <MainContentTabs />

      <JoinFormsSection 
        activeForm={activeForm}
        walletAddress={walletAddress}
        walletConnected={walletConnected}
        onSetActiveForm={setActiveForm}
      />

      <ReferralLeaderboard />

      <Footer />
    </div>
  );
};

export default Index;
