import { useState } from "react";
import { ArrowLeft, Send, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { personalInfo } from "@/data/portfolio";
import { toast } from "sonner";

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields before sending.");
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-20 pb-36 relative">
        {/* Header navigation */}
        <div className="mb-12 flex justify-between items-center">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="group font-label text-xs tracking-widest text-muted-foreground hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-[10px] font-label text-primary">Get in Touch</span>
          </div>
        </div>

        {/* Title and Intro */}
        <div className="max-w-4xl mb-16 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold">
            Let's <span className="text-gradient-neon">Connect</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            Have a project idea, a question, or just want to say hello? Drop me a message and I'll get back to you.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Details */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Contact Details</h2>
              <p className="text-muted-foreground leading-relaxed font-light">
                You can reach out using the form or connect through direct channels below.
              </p>
            </div>

            {/* Address cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/5 bg-card/30 hover:border-white/10 transition-colors">
                <div className="p-3.5 rounded-xl bg-primary/10 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-label text-muted-foreground block mb-0.5">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-white hover:text-primary transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/5 bg-card/30 hover:border-white/10 transition-colors">
                <div className="p-3.5 rounded-xl bg-secondary/10 text-secondary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-label text-muted-foreground block mb-0.5">
                    Phone Link
                  </span>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-sm font-semibold text-white hover:text-secondary transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/5 bg-card/30 hover:border-white/10 transition-colors">
                <div className="p-3.5 rounded-xl bg-tertiary/10 text-tertiary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-label text-muted-foreground block mb-0.5">
                    Location Base
                  </span>
                  <span className="text-sm font-semibold text-white">
                    Ranchi, Jharkhand / Gunupur, Odisha
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7 bg-card/40 border border-white/5 p-8 rounded-3xl shadow-ambient glass">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-label text-muted-foreground tracking-wider block">
                  Your Name
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="e.g. John Doe"
                  className="bg-black/20 border-white/10 h-12 focus-visible:ring-primary/50 text-white rounded-xl"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-label text-muted-foreground tracking-wider block">
                  Your Email Address
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="e.g. john@example.com"
                  className="bg-black/20 border-white/10 h-12 focus-visible:ring-primary/50 text-white rounded-xl"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-label text-muted-foreground tracking-wider block">
                  Your Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="Tell me about your project, idea, or just say hi..."
                  className="bg-black/20 border-white/10 min-h-[150px] focus-visible:ring-primary/50 text-white rounded-xl"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 rounded-xl bg-primary hover:bg-primary/95 text-black font-label text-xs tracking-widest font-bold uppercase transition-all duration-300 shadow-neon"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending Message...</span>
                ) : (
                  <>
                    Send Message
                    <Send className="w-3.5 h-3.5 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ContactPage;
