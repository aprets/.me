'use client';

import Link from 'next/link';
import { useState, type MouseEventHandler, type FocusEventHandler } from 'react';

const noop = () => {};

const reverseString = (originalString: string) => originalString.split('').reverse().join('');

export const ObfuscatedLink = ({
  children,
  className,
  href,
  onClick = noop,
  onFocus = noop,
  onMouseOver = noop,
  onContextMenu = noop,
  ...props
}: {
  children: string;
  className?: string;
  href: string;
  onClick?: MouseEventHandler<Element>;
  onFocus?: FocusEventHandler<Element>;
  onMouseOver?: MouseEventHandler<Element>;
  onContextMenu?: MouseEventHandler<Element>;
}) => {
  const [seemsHuman, setSeemsHuman] = useState(false);
  return (
    <Link
      className={`${className ?? ''} ${seemsHuman ? '' : 'spammer-no-spamming'}`}
      href={seemsHuman ? href : 'https://youtu.be/dQw4w9WgXcQ'}
      onClick={seemsHuman ? onClick : undefined}
      onFocus={(event) => {
        onFocus(event);
        setSeemsHuman(true);
      }}
      onMouseOver={(event) => {
        onMouseOver(event);
        setSeemsHuman(true);
      }}
      onContextMenu={(event) => {
        onContextMenu(event);
        setSeemsHuman(true);
      }}
      {...props}
    >
      {seemsHuman ? children : reverseString(children)}
    </Link>
  );
};
