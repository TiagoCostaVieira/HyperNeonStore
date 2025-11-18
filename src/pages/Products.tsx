import { useState } from "react";
import { Link } from "react-router-dom";
import { Filter, Search } from "lucide-react";
import { Button3D } from "@/components/ui/button-3d";
import { Input } from "@/components/ui/input";

const mockProducts = [
  { id: 1, name: "Quantum Headset", price: 299, category: "Audio", image: "🎧" },
  { id: 2, name: "Neural Mouse", price: 149, category: "Input", image: "🖱️" },
  { id: 3, name: "Holographic Display", price: 899, category: "Display", image: "🖥️" },
  { id: 4, name: "Cyber Keyboard", price: 199, category: "Input", image: "⌨️" },
  { id: 5, name: "Quantum Camera", price: 499, category: "Camera", image: "📷" },
  { id: 6, name: "Neural VR Headset", price: 699, category: "VR", image: "🥽" },
  { id: 7, name: "Smart Watch Ultra", price: 399, category: "Wearable", image: "⌚" },
  { id: 8, name: "Wireless Earbuds", price: 179, category: "Audio", image: "🎵" },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ["All", "Audio", "Input", "Display", "Camera", "VR", "Wearable"];

  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 space-y-6">
          <h1 className="text-5xl font-bold text-neon-blue">Product Catalog</h1>
          <p className="text-xl text-muted-foreground">Explore our collection of next-gen tech</p>

          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 bg-muted border-primary/30 focus:border-primary h-12"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">Filter:</span>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button3D
                key={category}
                variant={selectedCategory === category ? "cyber" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category === "All" ? null : category)}
              >
                {category}
              </Button3D>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <div className="group bg-card border border-neon rounded-2xl overflow-hidden hover:shadow-neon-blue transition-all card-3d cursor-pointer">
                {/* Product Image/Icon */}
                <div className="relative h-64 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 cyber-grid opacity-20" />
                  <span className="text-8xl relative z-10 group-hover:scale-110 transition-transform">
                    {product.image}
                  </span>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-bold rounded-full shadow-neon-cyan">
                    {product.category}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-neon-cyan">${product.price}</span>
                    <Button3D variant="outline" size="sm" className="group-hover:shadow-neon-blue">
                      View Details
                    </Button3D>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-muted-foreground">No products found</p>
            <p className="text-muted-foreground mt-2">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
