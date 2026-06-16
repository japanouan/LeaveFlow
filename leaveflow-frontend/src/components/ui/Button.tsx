import { cn } from '@/lib/utils';
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    // Customproperties
    isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    disabled,
    isLoading,
    children,
    ...props
}, ref) => {
    return (
        <button
            className={cn(
                "px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-800 transition-colors",
                {
                    "opacity-50 cursor-not-allowed": isLoading || disabled,
                },
                className
            )}
            disabled={disabled}
            {...props}
        >
            { isLoading ? (
                <span>
                    {/* <svg></svg> */}
                    กำลังประมวลผล...
                </span>
            ) : (
                children
            )}
        </button>
    )
})

Button.displayName = "Button"