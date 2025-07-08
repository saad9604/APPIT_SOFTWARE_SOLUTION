import { Button } from "../../ui/button";
import { cn } from "../../../lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export const OutlineButton = ({ children, className, href = "/contact" }) => {
  const isExternal = href?.startsWith("mailto:") || href?.startsWith("http");

  const content = (
    <Button variant="outline" size="xl" className="w-full">
      <span className="group-hover:-translate-x-1 um_transition">
        {children}
      </span>
      <ArrowRight
        className="!w-8 !h-8 group-hover:-rotate-12 transition-all ease-in-out duration-300"
        strokeWidth={1}
      />
    </Button>
  );

  if (isExternal) {
    return (
      <a href={href} className={cn("group", className)}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cn("group", className)}>
      {content}
    </Link>
  );
};
