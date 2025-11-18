import { Github, Twitter, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card/50 backdrop-blur-xl border-t border-neon mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold text-neon-blue">
                CYBER<span className="text-accent">SHOP</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Speed. Privacy. Precision.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Best Sellers
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Account</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-muted-foreground hover:text-primary transition-colors">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/checkout" className="text-muted-foreground hover:text-primary transition-colors">
                  Checkout
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Shipping Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 CyberShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
