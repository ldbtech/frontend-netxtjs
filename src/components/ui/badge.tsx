// src/components/ui/badge.tsx
import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className }) => {
    return (
        <div className={`bg-red-600 text-white rounded-full text-xs px-2 ${className}`}>
            {children}
        </div>
    );
};

export { Badge };