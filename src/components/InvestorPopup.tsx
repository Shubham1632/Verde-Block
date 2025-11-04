import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "sonner";

interface InvestorPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const InvestorPopup = ({ isOpen, onClose }: InvestorPopupProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    investmentRange: "",
    isAccredited: false,
    notifyLaunch: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.investmentRange) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Send via EmailJS (client-side)
    try {
      const env = import.meta.env as unknown as Record<
        string,
        string | undefined
      >;
      const serviceId = env.VITE_EMAILJS_SERVICE_ID;
      const templateId = env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error("EmailJS environment variables are not set");
        toast.error(
          "Email service not configured. Please contact the site administrator."
        );
        return;
      }

      const templateParams = {
        name: formData.name,
        email: formData.email,
        investmentRange: formData.investmentRange,
        isAccredited: formData.isAccredited ? "Yes" : "No",
        notifyLaunch: formData.notifyLaunch ? "Yes" : "No",
        submittedAt: new Date().toISOString(),
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast.success("Thank you for your interest! We'll be in touch soon.");
      onClose();

      // Reset form
      setFormData({
        name: "",
        email: "",
        investmentRange: "",
        isAccredited: false,
        notifyLaunch: false,
      });
    } catch (error) {
      console.error("EmailJS send error", error);
      toast.error("Submission failed. Please try again later.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Join VerdeBlock's{" "}
            <span className="text-gradient">Investor Network</span>
          </DialogTitle>
          <DialogDescription className="text-base">
            Be part of Milan's green skyline. Register your interest and unlock
            tokenized investment opportunities.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="investment">Investment Interest *</Label>
            <select
              id="investment"
              className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
              value={formData.investmentRange}
              onChange={(e) =>
                setFormData({ ...formData, investmentRange: e.target.value })
              }
              required
            >
              <option value="">Select range</option>
              <option value="5k-25k">€5,000 - €25,000</option>
              <option value="25k-50k">€25,000 - €50,000</option>
              <option value="50k-100k">€50,000 - €100,000</option>
              <option value="100k+">€100,000+</option>
            </select>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="accredited"
                checked={formData.isAccredited}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, isAccredited: checked as boolean })
                }
              />
              <label
                htmlFor="accredited"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I'm an accredited investor
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="notify"
                checked={formData.notifyLaunch}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, notifyLaunch: checked as boolean })
                }
              />
              <label
                htmlFor="notify"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Notify me for pilot launch
              </label>
            </div>
          </div>

          <Button type="submit" className="w-full" size="lg">
            Submit Interest
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting, you agree to be contacted by VerdeBlock regarding
            investment opportunities.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InvestorPopup;
