
import { Button } from "@/components/ui/button";
import SellerRegistrationForm from "@/components/SellerRegistrationForm";
import BuyerWaitlistForm from "@/components/BuyerWaitlistForm";

interface JoinFormsSectionProps {
  activeForm: 'seller' | 'buyer' | null;
  walletAddress: string;
  walletConnected: boolean;
  onSetActiveForm: (form: 'seller' | 'buyer') => void;
}

const JoinFormsSection = ({ 
  activeForm, 
  walletAddress, 
  walletConnected, 
  onSetActiveForm 
}: JoinFormsSectionProps) => {
  return (
    <section id="join-forms" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join KnowEmpire</h2>
          <p className="text-lg text-gray-600">Choose your path to get started</p>
        </div>
        
        <div className="flex justify-center space-x-4 mb-8">
          <Button 
            onClick={() => onSetActiveForm('seller')}
            variant={activeForm === 'seller' ? 'default' : 'outline'}
            className={activeForm === 'seller' ? 'bg-purple-600 hover:bg-purple-700' : 'border-purple-200 text-purple-700 hover:bg-purple-50'}
          >
            Become a Seller
          </Button>
          <Button 
            onClick={() => onSetActiveForm('buyer')}
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
  );
};

export default JoinFormsSection;
