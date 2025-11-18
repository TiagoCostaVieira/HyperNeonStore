import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-neon">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Zap className="w-8 h-8 text-primary animate-pulse-neon" />
              <div className="absolute inset-0 blur-xl bg-primary/50 group-hover:bg-primary/70 transition-all" />
            </div>
            <span className="text-2xl font-bold text-neon-blue tracking-tight">
              CYBER<span className="text-accent">SHOP</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/products" className="text-foreground hover:text-primary transition-colors font-medium">
              Products
            </Link>
            <Link to="/dashboard" className="text-foreground hover:text-primary transition-colors font-medium">
              Dashboard
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative hover:bg-primary/10 hover:text-primary transition-all">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center font-bold shadow-neon-cyan">
                  0
                </span>
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-all">
                <User className="w-5 h-5" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in slide-in-from-top">
            <div className="flex flex-col gap-4">
              <Link
                to="/products"
                className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/dashboard"
                className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
