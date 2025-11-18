import { Button3D } from "@/components/ui/button-3d";
import { ArrowLeft, User, Mail, MapPin, Phone, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
    const navigate = useNavigate();

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
                        <div className="relative group">
                            <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-4xl shadow-neon-blue">
                                👤
                            </div>
                            <button className="absolute bottom-0 right-0 w-8 h-8 bg-neon-cyan rounded-full flex items-center justify-center border-2 border-background hover:shadow-neon-cyan transition-shadow">
                                <Camera className="w-4 h-4 text-background" />
                            </button>
                        </div>
                        <div>
                            <h1 className="text-5xl font-bold text-neon-blue">Edit Profile</h1>
                            <p className="text-xl text-muted-foreground">Update your personal information</p>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Form */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Personal Information */}
                        <div className="bg-card border border-neon rounded-2xl p-6">
                            <h2 className="text-2xl font-bold text-neon-purple mb-6">Personal Information</h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                        <User className="w-4 h-4" />
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue="Cyber"
                                        className="w-full bg-background border border-neon/30 rounded-xl px-4 py-3 text-foreground focus:border-neon-cyan focus:shadow-neon-cyan/20 focus:outline-none transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                        <User className="w-4 h-4" />
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue="User"
                                        className="w-full bg-background border border-neon/30 rounded-xl px-4 py-3 text-foreground focus:border-neon-cyan focus:shadow-neon-cyan/20 focus:outline-none transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                        <Phone className="w-4 h-4" />
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        defaultValue="+1 (555) 123-4567"
                                        className="w-full bg-background border border-neon/30 rounded-xl px-4 py-3 text-foreground focus:border-neon-cyan focus:shadow-neon-cyan/20 focus:outline-none transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue="New York, USA"
                                        className="w-full bg-background border border-neon/30 rounded-xl px-4 py-3 text-foreground focus:border-neon-cyan focus:shadow-neon-cyan/20 focus:outline-none transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Email & Preferences */}
                        <div className="bg-card border border-neon rounded-2xl p-6">
                            <h2 className="text-2xl font-bold text-neon-purple mb-6">Email & Preferences</h2>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        defaultValue="cyber.user@email.com"
                                        className="w-full bg-background border border-neon/30 rounded-xl px-4 py-3 text-foreground focus:border-neon-cyan focus:shadow-neon-cyan/20 focus:outline-none transition-all"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-neon-blue">Notification Preferences</h3>

                                    <div className="space-y-3">
                                        <label className="flex items-center gap-3 cursor-pointer group">
                                            <div className="relative">
                                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                                <div className="w-11 h-6 bg-muted-foreground/30 peer-checked:bg-neon-cyan rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-background after:rounded-full after:h-5 after:w-5 after:transition-all after:border after:border-neon/30"></div>
                                            </div>
                                            <span className="text-foreground group-hover:text-neon-cyan transition-colors">
                                                Order Updates
                                            </span>
                                        </label>

                                        <label className="flex items-center gap-3 cursor-pointer group">
                                            <div className="relative">
                                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                                <div className="w-11 h-6 bg-muted-foreground/30 peer-checked:bg-neon-cyan rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-background after:rounded-full after:h-5 after:w-5 after:transition-all after:border after:border-neon/30"></div>
                                            </div>
                                            <span className="text-foreground group-hover:text-neon-cyan transition-colors">
                                                Promotional Emails
                                            </span>
                                        </label>

                                        <label className="flex items-center gap-3 cursor-pointer group">
                                            <div className="relative">
                                                <input type="checkbox" className="sr-only peer" />
                                                <div className="w-11 h-6 bg-muted-foreground/30 peer-checked:bg-neon-cyan rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-background after:rounded-full after:h-5 after:w-5 after:transition-all after:border after:border-neon/30"></div>
                                            </div>
                                            <span className="text-foreground group-hover:text-neon-cyan transition-colors">
                                                Security Alerts
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Actions */}
                    <div className="space-y-6">
                        {/* Save Actions */}
                        <div className="bg-card border border-neon rounded-2xl p-6 space-y-4">
                            <h3 className="text-xl font-bold text-neon-cyan">Save Changes</h3>
                            <p className="text-sm text-muted-foreground">
                                Review and save your profile changes
                            </p>
                            <div className="space-y-3">
                                <Button3D className="w-full">Save Changes</Button3D>
                                <Button3D variant="outline" className="w-full" onClick={() => navigate(-1)}>
                                    Cancel
                                </Button3D>
                            </div>
                        </div>

                        {/* Danger Zone */}
                        <div className="bg-card border border-accent/30 rounded-2xl p-6 space-y-4">
                            <h3 className="text-xl font-bold text-accent">Danger Zone</h3>
                            <p className="text-sm text-muted-foreground">
                                Permanent actions that cannot be undone
                            </p>
                            <div className="space-y-3">
                                <Button3D variant="outline" className="w-full border-accent/50 text-accent hover:bg-accent/10">
                                    Delete Account
                                </Button3D>
                                <Button3D variant="outline" className="w-full border-secondary/50 text-secondary hover:bg-secondary/10">
                                    Deactivate Account
                                </Button3D>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;