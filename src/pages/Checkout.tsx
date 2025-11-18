import { useState } from "react";
import { Button3D } from "@/components/ui/button-3d";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Lock, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const Checkout = () => {
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      toast.success("Order placed successfully!", {
        description: "You will receive a confirmation email shortly.",
      });
    }
  };

  const steps = ["Shipping", "Payment", "Review"];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-neon-blue mb-4">Checkout</h1>
          <p className="text-xl text-muted-foreground">Complete your order securely</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {steps.map((label, index) => (
              <div key={label} className="flex-1 flex items-center">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                      step > index + 1
                        ? "bg-accent text-accent-foreground shadow-neon-cyan"
                        : step === index + 1
                        ? "bg-primary text-primary-foreground shadow-neon-blue animate-pulse-neon"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step > index + 1 ? <CheckCircle2 className="w-5 h-5" /> : index + 1}
                  </div>
                  <span
                    className={`font-semibold ${
                      step >= index + 1 ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-4 rounded-full transition-all ${
                      step > index + 1 ? "bg-accent shadow-neon-cyan" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-card border border-neon rounded-3xl p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Shipping */}
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right">
                <h2 className="text-2xl font-bold text-neon-purple flex items-center gap-2">
                  Shipping Information
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                    <Input id="firstName" required className="bg-muted border-primary/30" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                    <Input id="lastName" required className="bg-muted border-primary/30" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input id="email" type="email" required className="bg-muted border-primary/30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address" className="text-foreground">Address</Label>
                  <Input id="address" required className="bg-muted border-primary/30" />
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-foreground">City</Label>
                    <Input id="city" required className="bg-muted border-primary/30" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state" className="text-foreground">State</Label>
                    <Input id="state" required className="bg-muted border-primary/30" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip" className="text-foreground">ZIP Code</Label>
                    <Input id="zip" required className="bg-muted border-primary/30" />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right">
                <h2 className="text-2xl font-bold text-neon-purple flex items-center gap-2">
                  <CreditCard className="w-6 h-6" />
                  Payment Details
                </h2>
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg border border-accent/30">
                  <Lock className="w-4 h-4 text-accent" />
                  Your payment information is encrypted and secure
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardNumber" className="text-foreground">Card Number</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" required className="bg-muted border-primary/30" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="expiry" className="text-foreground">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" required className="bg-muted border-primary/30" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc" className="text-foreground">CVC</Label>
                    <Input id="cvc" placeholder="123" required className="bg-muted border-primary/30" />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Review */}
            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right">
                <h2 className="text-2xl font-bold text-neon-purple">Review Order</h2>
                <div className="bg-muted/50 rounded-2xl p-6 space-y-4 border border-accent/30">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-bold">$597</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-bold">$25</span>
                  </div>
                  <div className="border-t border-border pt-4 flex justify-between text-xl">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-neon-cyan text-3xl">$622</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-accent/10 p-4 rounded-lg border border-accent/30">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  By placing this order, you agree to our terms and conditions
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-4 pt-6">
              {step > 1 && (
                <Button3D
                  type="button"
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                  className="flex-1"
                >
                  Back
                </Button3D>
              )}
              <Button3D variant="cyber" type="submit" className="flex-1">
                {step === 3 ? "Place Order" : "Continue"}
              </Button3D>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
