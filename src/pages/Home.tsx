import { Link } from "react-router-dom";
import { Button3D } from "@/components/ui/button-3d";
import { ChevronRight, Zap, Shield, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const Home = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
        {/* Animated Background Lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 animate-pulse" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50 animate-pulse delay-700" />
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50 animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary font-semibold shadow-neon-blue">
                <span className="animate-pulse-neon">● LIVE</span> Next-Gen E-Commerce
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-neon-blue">Speed.</span>
                <br />
                <span className="text-neon-purple">Privacy.</span>
                <br />
                <span className="text-neon-cyan">Precision.</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-lg">
                Experience the future of online shopping with 3D product visualization, 
                encrypted transactions, and lightning-fast delivery.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <Button3D variant="cyber" size="lg" className="w-full sm:w-auto group">
                    Enter Store
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button3D>
                </Link>
                <Link to="/dashboard">
                  <Button3D variant="outline" size="lg" className="w-full sm:w-auto">
                    Dashboard
                  </Button3D>
                </Link>
              </div>
            </div>

            {/* 3D Product Visualization */}
            <div className="relative h-[500px] flex items-center justify-center animate-in fade-in slide-in-from-right duration-1000">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-full blur-3xl animate-pulse-neon" />
              
              {/* 3D Rotating Cube */}
              <div
                className="relative w-64 h-64 transform-gpu"
                style={{
                  transform: `rotateY(${rotation}deg) rotateX(${rotation * 0.5}deg)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-neon-blue border border-primary/50" 
                     style={{ transform: "translateZ(100px)" }} />
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent rounded-2xl shadow-neon-purple border border-secondary/50" 
                     style={{ transform: "rotateY(180deg) translateZ(100px)" }} />
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-2xl shadow-neon-cyan border border-accent/50" 
                     style={{ transform: "rotateY(90deg) translateZ(100px)" }} />
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-neon-blue border border-primary/50" 
                     style={{ transform: "rotateY(-90deg) translateZ(100px)" }} />
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary rounded-2xl shadow-neon-purple border border-secondary/50" 
                     style={{ transform: "rotateX(90deg) translateZ(100px)" }} />
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-secondary rounded-2xl shadow-neon-cyan border border-accent/50" 
                     style={{ transform: "rotateX(-90deg) translateZ(100px)" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-neon-blue">Why Choose CyberShop?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-card border border-neon rounded-2xl p-8 hover:scale-105 transition-transform card-3d group">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-neon-blue transition-shadow">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neon-blue">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Optimized infrastructure ensures instant page loads and seamless 3D rendering.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card border border-neon rounded-2xl p-8 hover:scale-105 transition-transform card-3d group">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-neon-purple transition-shadow">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neon-purple">Secure & Private</h3>
              <p className="text-muted-foreground">
                End-to-end encryption and anonymous browsing protect your data.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card border border-neon rounded-2xl p-8 hover:scale-105 transition-transform card-3d group">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-neon-cyan transition-shadow">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neon-cyan">24/7 Delivery</h3>
              <p className="text-muted-foreground">
                Round-the-clock fulfillment with real-time tracking and instant updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 border border-primary/30 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 cyber-grid opacity-30" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-neon-blue">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join thousands of users already shopping in the next dimension.
              </p>
              <Link to="/products">
                <Button3D variant="cyber" size="lg" className="group">
                  Browse Products
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button3D>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
