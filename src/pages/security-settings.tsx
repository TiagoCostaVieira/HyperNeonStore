import { Button3D } from "@/components/ui/button-3d";
import { ArrowLeft, Lock, Shield, Eye, EyeOff, Key, Smartphone, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SecuritySettings = () => {
    const navigate = useNavigate();
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const securityDevices = [
        { id: 1, name: "Windows PC", browser: "Chrome 119", location: "New York, USA", lastActive: "Current session" },
        { id: 2, name: "MacBook Pro", browser: "Safari 17", location: "New York, USA", lastActive: "2 days ago" },
        { id: 3, name: "iPhone 15", browser: "Safari", location: "Boston, USA", lastActive: "1 week ago" },
    ];

    const loginHistory = [
        { id: 1, device: "Windows PC", browser: "Chrome 119", location: "New York, USA", date: "2025-11-18 14:30", status: "Success" },
        { id: 2, device: "iPhone 15", browser: "Safari", location: "Boston, USA", date: "2025-11-15 09:15", status: "Success" },
        { id: 3, device: "Unknown Device", browser: "Firefox 120", location: "Tokyo, Japan", date: "2025-11-10 03:45", status: "Failed" },
    ];

    const getStatusColor = (status: string) => {
        return status === "Success"
            ? "text-accent border-accent/30 bg-accent/10"
            : "text-red-500 border-red-500/30 bg-red-500/10";
    };

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header */}
                <div className="mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-muted-foreground hover:text-neon-blue transition-colors mb-6 group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        Back to Dashboard
                    </button>

                    <div className="flex items-center gap-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-4xl shadow-neon-blue">
                            <Shield className="w-10 h-10 text-white" />
                        </div>
                        <div>
                            <h1 className="text-5xl font-bold text-neon-blue">Security Settings</h1>
                            <p className="text-xl text-muted-foreground">Protect your account and privacy</p>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Change Password */}
                        <div className="bg-card border border-neon rounded-2xl p-6">
                            <h2 className="text-2xl font-bold text-neon-purple mb-6 flex items-center gap-3">
                                <Key className="w-6 h-6" />
                                Change Password
                            </h2>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                        <Lock className="w-4 h-4" />
                                        Current Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showCurrentPassword ? "text" : "password"}
                                            className="w-full bg-background border border-neon/30 rounded-xl px-4 py-3 text-foreground focus:border-neon-cyan focus:shadow-neon-cyan/20 focus:outline-none transition-all pr-12"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-neon-cyan transition-colors"
                                        >
                                            {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                        <Lock className="w-4 h-4" />
                                        New Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showNewPassword ? "text" : "password"}
                                            className="w-full bg-background border border-neon/30 rounded-xl px-4 py-3 text-foreground focus:border-neon-cyan focus:shadow-neon-cyan/20 focus:outline-none transition-all pr-12"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowNewPassword(!showNewPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-neon-cyan transition-colors"
                                        >
                                            {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                        <Lock className="w-4 h-4" />
                                        Confirm New Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            className="w-full bg-background border border-neon/30 rounded-xl px-4 py-3 text-foreground focus:border-neon-cyan focus:shadow-neon-cyan/20 focus:outline-none transition-all pr-12"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-neon-cyan transition-colors"
                                        >
                                            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                        </button>
                                    </div>
                                </div>

                                <Button3D className="w-full mt-4">Update Password</Button3D>
                            </div>
                        </div>

                        {/* Two-Factor Authentication */}
                        <div className="bg-card border border-neon rounded-2xl p-6">
                            <h2 className="text-2xl font-bold text-neon-purple mb-6 flex items-center gap-3">
                                <Shield className="w-6 h-6" />
                                Two-Factor Authentication
                            </h2>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 border border-neon/30 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <Smartphone className="w-5 h-5 text-neon-cyan" />
                                        <div>
                                            <p className="font-semibold">Authenticator App</p>
                                            <p className="text-sm text-muted-foreground">Use an app like Google Authenticator</p>
                                        </div>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-11 h-6 bg-muted-foreground/30 peer-checked:bg-neon-cyan rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-background after:rounded-full after:h-5 after:w-5 after:transition-all after:border after:border-neon/30"></div>
                                    </label>
                                </div>

                                <div className="flex items-center justify-between p-4 border border-neon/30 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-neon-cyan" />
                                        <div>
                                            <p className="font-semibold">Email Verification</p>
                                            <p className="text-sm text-muted-foreground">Send codes to your email</p>
                                        </div>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" defaultChecked className="sr-only peer" />
                                        <div className="w-11 h-6 bg-muted-foreground/30 peer-checked:bg-neon-cyan rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-background after:rounded-full after:h-5 after:w-5 after:transition-all after:border after:border-neon/30"></div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Login History */}
                        <div className="bg-card border border-neon rounded-2xl p-6">
                            <h2 className="text-2xl font-bold text-neon-purple mb-6">Recent Login Activity</h2>

                            <div className="space-y-4">
                                {loginHistory.map((login) => (
                                    <div key={login.id} className="flex items-center justify-between p-4 border border-neon/30 rounded-xl">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold">{login.device}</span>
                                                <span className={`px-2 py-1 rounded-full text-xs font-bold border ${getStatusColor(login.status)}`}>
                                                    {login.status}
                                                </span>
                                            </div>
                                            <p className="text-sm text-muted-foreground">{login.browser} • {login.location}</p>
                                            <p className="text-xs text-muted-foreground">{login.date}</p>
                                        </div>
                                        <Button3D variant="outline" size="sm">
                                            Report
                                        </Button3D>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Active Devices */}
                        <div className="bg-card border border-neon rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-neon-cyan mb-4">Active Devices</h3>
                            <div className="space-y-4">
                                {securityDevices.map((device) => (
                                    <div key={device.id} className="p-3 border border-neon/30 rounded-lg">
                                        <p className="font-semibold">{device.name}</p>
                                        <p className="text-sm text-muted-foreground">{device.browser}</p>
                                        <p className="text-xs text-muted-foreground">{device.location}</p>
                                        <p className="text-xs text-neon-cyan mt-1">{device.lastActive}</p>
                                    </div>
                                ))}
                            </div>
                            <Button3D variant="outline" className="w-full mt-4">
                                Manage Devices
                            </Button3D>
                        </div>

                        {/* Security Score */}
                        <div className="bg-card border border-accent/30 rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-accent mb-2">Security Score</h3>
                            <div className="text-3xl font-bold text-neon-cyan mb-2">85%</div>
                            <div className="w-full bg-muted-foreground/30 rounded-full h-2">
                                <div className="bg-accent h-2 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">Good - Keep improving your security</p>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-card border border-primary/30 rounded-2xl p-6 space-y-3">
                            <h3 className="text-xl font-bold text-neon-blue">Quick Actions</h3>
                            <Button3D variant="outline" className="w-full">
                                Download Login Data
                            </Button3D>
                            <Button3D variant="outline" className="w-full">
                                Privacy Settings
                            </Button3D>
                            <Button3D variant="outline" className="w-full border-red-500/50 text-red-500 hover:bg-red-500/10">
                                Delete Account
                            </Button3D>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecuritySettings;