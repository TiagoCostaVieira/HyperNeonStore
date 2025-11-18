import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button3D } from "@/components/ui/button-3d";
import { ShoppingCart, Heart, Star, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const mockProduct = {
  id: 1,
  name: "Quantum Headset",
  price: 299,
  category: "Audio",
  image: "🎧",
  description: "Experience audio in a new dimension with our Quantum Headset. Featuring neural sound processing and adaptive noise cancellation.",
  features: [
    "Neural Sound Processing",
    "48-hour battery life",
    "Quantum-grade noise cancellation",
    "Wireless charging",
    "3D spatial audio",
  ],
  reviews: [
    { id: 1, author: "CyberUser42", rating: 5, comment: "Best headset I've ever used. The sound quality is incredible!" },
    { id: 2, author: "TechNinja", rating: 5, comment: "Worth every credit. Neural processing is mind-blowing." },
    { id: 3, author: "AudioPhile", rating: 4, comment: "Amazing product, battery life is insane." },
  ],
};

const ProductDetail = () => {
  const { id } = useParams();
  const [rotation, setRotation] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    toast.success("Added to cart!", {
      description: `${quantity}x ${mockProduct.name}`,
    });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link to="/products">
          <Button3D variant="ghost" className="mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </Button3D>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Preview - 3D Rotatable */}
          <div className="relative">
            <div className="bg-card border border-neon rounded-3xl p-12 sticky top-24">
              <div className="relative h-[500px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-full blur-3xl animate-pulse-neon" />
                
                {/* Interactive 3D Product */}
                <div
                  className="relative cursor-grab active:cursor-grabbing transform-gpu text-9xl"
                  style={{
                    transform: `rotateY(${rotation}deg) rotateX(15deg)`,
                    transformStyle: "preserve-3d",
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const newRotation = (x / rect.width) * 360;
                    setRotation(newRotation);
                  }}
                >
                  {mockProduct.image}
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Drag to rotate • 360° view
              </p>
            </div>
          </div>

          {/* Product Info - Terminal Style */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary font-semibold">
                {mockProduct.category}
              </div>
              <h1 className="text-5xl font-bold text-neon-blue">{mockProduct.name}</h1>
              <p className="text-xl text-muted-foreground">{mockProduct.description}</p>
            </div>

            {/* Price & Actions */}
            <div className="bg-muted/50 border border-accent/30 rounded-2xl p-6 space-y-6">
              <div className="flex items-baseline gap-4">
                <span className="text-5xl font-bold text-neon-cyan">${mockProduct.price}</span>
                <span className="text-muted-foreground line-through">$399</span>
                <span className="px-3 py-1 bg-accent/20 text-accent text-sm font-bold rounded-full">25% OFF</span>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground font-mono">QUANTITY:</span>
                <div className="flex items-center gap-2">
                  <Button3D
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button3D>
                  <span className="w-12 text-center font-bold text-primary">{quantity}</span>
                  <Button3D
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button3D>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button3D variant="cyber" size="lg" className="flex-1" onClick={handleAddToCart}>
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </Button3D>
                <Button3D variant="outline" size="lg">
                  <Heart className="w-5 h-5" />
                </Button3D>
              </div>
            </div>

            {/* Features */}
            <div className="bg-card border border-neon rounded-2xl p-6 space-y-4">
              <h3 className="text-xl font-bold text-neon-purple">Features</h3>
              <ul className="space-y-3">
                {mockProduct.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full shadow-neon-cyan" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-neon-blue mb-8">User Reviews</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {mockProduct.reviews.map((review) => (
              <div key={review.id} className="bg-card border border-neon rounded-2xl p-6 space-y-4 hover:shadow-neon-blue transition-all card-3d">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary">{review.author}</span>
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
