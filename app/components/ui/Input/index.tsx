import { forwardRef } from "react";
import { cn } from "~/utils/ui";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...inputProps }, ref) => (
    <div className="flex w-full flex-col gap-3 text-white">
      <label htmlFor={inputProps.id || inputProps.name}>{label}</label>
      <input
        ref={ref}
        className={cn(
          "rounded-md border p-1",
          error ? "border-red-400 bg-red-400/10" : "border-white bg-white/10",
        )}
        {...inputProps}
      />
      {error && <p className="text-red-400">{error}</p>}
    </div>
  ),
);

Input.displayName = "Input";

export default Input;
