import { cn } from '@/lib/utils';
import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    // Custom properties
    label?: string;
    error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({
    className,
    type = "text",
    label,
    error,
    ...props
}, ref) => {
    return (
        <div className='flex flex-col gap-1 w-full'>
            {label && <label className='text-sm font-medium text-gray-700'>{label}</label>}

            <input
                type={type}
                className={cn(
                    "px-3 py-2 border border-gray-300 font-medium rounded-md shadow-sm focus:ring-2 focus:border-blue-500 w-full text-base",
                    {
                        "border border-red-500 focus:ring-red-500 focus:border-red-500": error
                    },
                    className
                )}
                ref={ref}
                {...props}
            />

            {error && <span className='text-sm font-medium text-red-500'>{error}</span>}
        </div>
    )
})

Input.displayName = "Input"