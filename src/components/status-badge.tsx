import React from 'react';
import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  status: 'active' | 'warning' | 'offline' | 'resolved' | 'pending' | 'scheduled';
  children?: React.ReactNode;
  className?: string;
}

export function StatusBadge({ status, children, className }: StatusBadgeProps) {
  const statusStyles = {
    active: 'bg-success/10 text-success border-success/20',
    warning: 'bg-warning/10 text-warning border-warning/20',
    offline: 'bg-destructive/10 text-destructive border-destructive/20',
    resolved: 'bg-info/10 text-info border-info/20',
    pending: 'bg-warning/10 text-warning border-warning/20',
    scheduled: 'bg-muted text-muted-foreground border-border',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
        statusStyles[status],
        className
      )}
    >
      <span className={cn('w-2 h-2 rounded-full mr-1.5', {
        'bg-success': status === 'active',
        'bg-warning': status === 'warning' || status === 'pending',
        'bg-destructive': status === 'offline',
        'bg-info': status === 'resolved',
        'bg-muted-foreground': status === 'scheduled',
      })} />
      {children || status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}
