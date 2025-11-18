import { Button3D } from "@/components/ui/button-3d";
import { Package, TrendingUp, Clock, Star } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ← Adicione este import

const mockStats = [
  { label: "Total Orders", value: "24", icon: Package, color: "primary" },
  { label: "Total Spent", value: "$4,847", icon: TrendingUp, color: "secondary" },
  { label: "Pending", value: "3", icon: Clock, color: "accent" },
  { label: "Reviews", value: "18", icon: Star, color: "primary" },
];

const mockOrders = [
  { id: "ORD-2024-001", date: "2025-11-15", status: "Delivered", total: 597, items: 2 },
  { id: "ORD-2024-002", date: "2025-11-12", status: "In Transit", total: 299, items: 1 },
  { id: "ORD-2024-003", date: "2025-11-08", status: "Processing", total: 448, items: 3 },
];

const Dashboard = () => {
  const navigate = useNavigate(); // ← Adicione esta linha no componente

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "text-accent border-accent/30 bg-accent/10";
      case "In Transit":
        return "text-primary border-primary/30 bg-primary/10";
      case "Processing":
        return "text-secondary border-secondary/30 bg-secondary/10";
      default:
        return "text-muted-foreground border-border bg-muted";
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-4xl shadow-neon-blue">
              👤
            </div>
            <div>
              <h1 className="text-5xl font-bold text-neon-blue">CyberUser</h1>
              <p className="text-xl text-muted-foreground">cyber.user@email.com</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mockStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-card border border-neon rounded-2xl p-6 hover:shadow-neon-blue transition-all card-3d group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-${stat.color}/10 group-hover:shadow-neon-${stat.color} transition-shadow`}>
                  <Icon className={`w-6 h-6 text-${stat.color}`} />
                </div>
                <p className="text-3xl font-bold text-neon-cyan mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Recent Orders */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-neon-purple">Recent Orders</h2>
            <Button3D variant="outline">View All</Button3D>
          </div>

          <div className="space-y-4">
            {mockOrders.map((order) => (
              <div
                key={order.id}
                className="bg-card border border-neon rounded-2xl p-6 hover:shadow-neon-blue transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Order Info */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <span className="text-xl font-bold text-primary font-mono">{order.id}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{order.date}</span>
                      <span>•</span>
                      <span>{order.items} items</span>
                    </div>
                  </div>

                  {/* Order Actions */}
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-neon-cyan">${order.total}</span>
                    <Button3D variant="outline" size="sm">
                      Track Order
                    </Button3D>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Account Settings - ATUALIZADO */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-muted/50 border border-accent/30 rounded-2xl p-8 space-y-4">
            <h3 className="text-2xl font-bold text-neon-cyan">Account Settings</h3>
            <p className="text-muted-foreground">Manage your personal information and preferences</p>
            <Button3D variant="outline" onClick={() => navigate('/edit-profile')}>
              Edit Profile
            </Button3D>
          </div>

          <div className="bg-muted/50 border border-primary/30 rounded-2xl p-8 space-y-4">
            <h3 className="text-2xl font-bold text-neon-blue">Security</h3>
            <p className="text-muted-foreground">Update password and security settings</p>
            <Button3D variant="outline" onClick={() => navigate('/security-settings')}>Security Settings</Button3D>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;