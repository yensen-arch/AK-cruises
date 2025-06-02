
import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  formatPhone?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, formatPhone, onChange, value, ...props }, ref) => {
    // Phone formatting handler
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!onChange) return;
      
      // Get only numbers from input
      const numbers = e.target.value.replace(/\D/g, '');
      
      // Format the number
      let formattedValue = numbers;
      if (numbers.length > 0) {
        // Handle US/CA phone format (XXX) XXX-XXXX
        if (numbers.length <= 3) {
          formattedValue = numbers;
        } else if (numbers.length <= 6) {
          formattedValue = `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
        } else {
          formattedValue = `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
        }
      }
      
      // Create a synthetic event with the new value
      const syntheticEvent = {
        ...e,
        target: {
          ...e.target,
          value: formattedValue
        }
      };
      
      onChange(syntheticEvent);
    };
    
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        onChange={formatPhone ? handlePhoneChange : onChange}
        value={value}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
