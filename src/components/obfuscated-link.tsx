'use client';

import type { UrlObject } from 'node:url';

import { useState, ComponentType, AnchorHTMLAttributes, MouseEventHandler, FocusEventHandler } from 'react';

const noop = () => {};

// eslint-disable-next-line unicorn/prefer-spread
const reverseString = (originalString: string) => originalString.split('').reverse().join('');

type t = AnchorHTMLAttributes<HTMLAnchorElement>['href'];

export const ObfuscatedLink = <
  T extends
    | ComponentType<
        Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'onClick' | 'onFocus' | 'onMouseOver' | 'onContextMenu'> & {
          href: string | UrlObject;
        }
      >
    | 'a',
>({
  as,
  children,
  className,
  href,
  onClick = noop,
  onFocus = noop,
  onMouseOver = noop,
  onContextMenu = noop,
  ...props
}: {
  as?: T;
  children: string;
  className?: string;
  href: string;
  onClick?: MouseEventHandler<Element>;
  onFocus?: FocusEventHandler<Element>;
  onMouseOver?: MouseEventHandler<Element>;
  onContextMenu?: MouseEventHandler<Element>;
}) => {
  const [seemsHuman, setSeemsHuman] = useState(false);
  const Component = as ?? 'a';
  return (
    <Component
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
    </Component>
  );
};
