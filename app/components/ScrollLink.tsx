"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ScrollLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
  section?: string;
}

export default function ScrollLink({ href, className, children, section }: ScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (section && typeof window !== 'undefined') {
      sessionStorage.setItem('homeScrollSection', section);
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}

