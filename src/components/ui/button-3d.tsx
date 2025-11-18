import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const button3dVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 transform perspective-1000",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-neon-blue hover:shadow-neon-purple hover:scale-105 active:scale-95 border border-primary/50",
        cyber:
          "bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-neon-blue hover:shadow-neon-purple hover:scale-105 active:scale-95 border border-primary/50 animate-pulse-neon",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary/10 hover:shadow-neon-blue hover:scale-105 active:scale-95",
        ghost:
          "hover:bg-primary/10 hover:text-primary active:scale-95",
        terminal:
          "bg-muted border-2 border-accent text-accent font-mono shadow-neon-cyan hover:bg-accent/10 hover:scale-105 active:scale-95",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface Button3DProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button3dVariants> {
  asChild?: boolean;
}

const Button3D = React.forwardRef<HTMLButtonElement, Button3DProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(button3dVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button3D.displayName = "Button3D";

export { Button3D, button3dVariants };
