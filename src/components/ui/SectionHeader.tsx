import React from 'react';
import { Sparkles } from 'lucide-react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  light = false
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : ''}`}>
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
            light
              ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
              : 'bg-amber-900/10 text-amber-800 border border-amber-800/20'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 fill-current" />
          <span>{badge}</span>
        </span>
      )}

      <h2
        className={`font-serif text-2xl sm:text-4xl font-bold tracking-tight mb-4 ${
          light ? 'text-amber-100' : 'text-amber-950'
        }`}
      >
        {title}
      </h2>

      {/* Gold Hairline Divider */}
      <div className={`gold-divider my-4 ${centered ? 'mx-auto w-36' : 'w-24'}`} />

      {subtitle && (
        <p
          className={`text-sm sm:text-base leading-relaxed ${
            light ? 'text-amber-200/80' : 'text-stone-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
