interface ProgressBadgeProps {
  completed: number;
  total: number;
  showLabel?: boolean;
}

export function ProgressBadge({ completed, total, showLabel = true }: ProgressBadgeProps) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  return (
    <div className="flex items-center gap-3">
      {/* Progress bar */}
      <div className="flex-1 h-2 bg-sage-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-forest-600 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      {/* Label */}
      {showLabel && (
        <span className="text-sm text-sage-600 whitespace-nowrap">
          {completed} of {total} lessons
        </span>
      )}
    </div>
  );
}

export function CompletedBadge() {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-1 bg-forest-600 text-white text-xs font-medium rounded-full">
      <svg 
        className="w-3 h-3" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 13l4 4L19 7" 
        />
      </svg>
      Completed
    </span>
  );
}
