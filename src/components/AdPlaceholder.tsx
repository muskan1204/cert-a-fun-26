import { cn } from "@/lib/utils";

interface AdPlaceholderProps {
  id: string;
  className?: string;
  size?: "banner" | "rectangle" | "square" | "leaderboard";
}

export const AdPlaceholder = ({ id, className, size = "banner" }: AdPlaceholderProps) => {
  const sizeClasses = {
    banner: "h-20 md:h-24",
    rectangle: "h-64 w-full md:w-80",
    square: "h-64 w-64",
    leaderboard: "h-24"
  };

  return (
    <div 
      id={id}
      className={cn(
        "bg-muted border-2 border-dashed border-border rounded-lg flex items-center justify-center text-muted-foreground text-sm font-medium",
        sizeClasses[size],
        className
      )}
    >
      {/* Google AdSense Placeholder: {id} */}
      <div className="text-center">
        <div className="text-xs opacity-70">Ad Space</div>
        <div className="text-xs opacity-50">{id}</div>
      </div>
    </div>
  );
};