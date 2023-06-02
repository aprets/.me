'use client';

import { MouseEventHandler } from 'react';
import { HiXMark } from 'react-icons/hi2';

export const TagBadge = <As extends 'button' | 'span'>({
  tag,
  isSelected,
  small,
  onClick,
  as,
  onRemove,
}: {
  tag: string;
  isSelected: boolean;
  small?: boolean;
  onClick?: MouseEventHandler<As extends 'button' ? HTMLButtonElement : HTMLSpanElement>;
  as?: As;
  onRemove?: MouseEventHandler<SVGElement>;
}) => {
  const Component = as ?? 'button';
  return (
    <Component
      type="button"
      className={`flex items-center gap-1 rounded-full font-medium text-xs transition-colors ${
        isSelected ? 'bg-primary-600 text-white hover:bg-primary-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      } ${small ? 'px-2 py-1' : 'px-3 py-1.5'}`}
      onClick={onClick}
    >
      {tag}
      {onRemove && <HiXMark className="h-4 w-4 cursor-pointer" onClick={onRemove} />}
    </Component>
  );
};
