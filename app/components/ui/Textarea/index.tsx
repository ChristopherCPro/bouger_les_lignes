import { forwardRef } from "react";
import { cn } from "~/utils/ui";

interface TextareaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, ...TextareaProps }, ref) => (
    <div className="flex w-full flex-col gap-3 text-white">
      <label htmlFor={TextareaProps.id || TextareaProps.name}>{label}</label>
      <textarea
        ref={ref}
        className={cn(
          "rounded-md border p-1",
          error ? "border-red-400 bg-red-400/10" : "border-white bg-white/10",
        )}
        {...TextareaProps}
        rows={4}
        cols={5}
      />
      {error && <p className="text-red-400">{error}</p>}
    </div>
  ),
);

Textarea.displayName = "Input";

export default Textarea;
