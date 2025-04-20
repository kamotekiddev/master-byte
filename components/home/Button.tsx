import { cva, VariantProps } from "class-variance-authority";
import React, { ComponentProps } from "react";

const buttonVariants = cva(
    "text-xl p-4 px-8 rounded-md transition duration-100 ease-linear",
    {
        variants: {
            variant: {
                outline: "border-2",
            },
            color: {
                secondary: "",
                accent: "",
            },
        },
        compoundVariants: [
            // outline variant
            {
                variant: "outline",
                color: "secondary",
                // className: "border-white/20 hover:bg-white/20",
                className:
                    "border-white/20 hover:border-accent hover:text-accent",
            },
            {
                variant: "outline",
                color: "accent",
                className:
                    "border-accent hover:bg-accent hover:text-background-primary",
            },
        ],
        defaultVariants: {
            color: "secondary",
            variant: "outline",
        },
    }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

type ButtonProps = ButtonVariants & ComponentProps<"button">;

function Button({ children, variant, color }: ButtonProps) {
    return (
        <button className={buttonVariants({ variant, color })}>
            {children}
        </button>
    );
}

export default Button;
