import { useState } from "react";
import { Link } from "react-router-dom";
import { Button3D } from "@/components/ui/button-3d";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

const mockCartItems = [
  { id: 1, name: "Quantum Headset", price: 299, quantity: 1, image: "🎧" },
  { id: 2, name: "Neural Mouse", price: 149, quantity: 2, image: "🖱️" },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(mockCartItems);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
    toast.success("Item removed from cart");
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 25;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-neon-blue mb-4">Shopping Cart</h1>
          <p className="text-xl text-muted-foreground">
            {cartItems.length} items in your cart
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.length === 0 ? (
              <div className="bg-card border border-neon rounded-2xl p-12 text-center space-y-4">
                <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto" />
                <h3 className="text-2xl font-bold text-muted-foreground">Your cart is empty</h3>
                <Link to="/products">
                  <Button3D variant="cyber">Browse Products</Button3D>
                </Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-card border border-neon rounded-2xl p-6 hover:shadow-neon-blue transition-all"
                >
                  <div className="flex gap-6">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center text-5xl shrink-0">
                      {item.image}
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{item.name}</h3>
                        <p className="text-2xl font-bold text-neon-cyan mt-2">${item.price}</p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 bg-muted rounded-lg p-2">
                          <Button3D
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button3D>
                          <span className="w-12 text-center font-bold text-primary">
                            {item.quantity}
                          </span>
                          <Button3D
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button3D>
                        </div>

                        <Button3D
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button3D>
                      </div>
                    </div>

                    {/* Item Total */}
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground mb-2">Total</p>
                      <p className="text-2xl font-bold text-neon-cyan">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-muted/50 border-2 border-accent/30 rounded-2xl p-6 space-y-6 sticky top-24">
              <h3 className="text-2xl font-bold text-neon-cyan">Order Summary</h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span className="font-bold text-foreground">${subtotal}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span className="font-bold text-foreground">${shipping}</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between text-lg">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-neon-cyan text-2xl">${total}</span>
                </div>
              </div>

              <Link to="/checkout">
                <Button3D variant="cyber" size="lg" className="w-full" disabled={cartItems.length === 0}>
                  Proceed to Checkout
                </Button3D>
              </Link>

              <Link to="/products">
                <Button3D variant="outline" className="w-full">
                  Continue Shopping
                </Button3D>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
