import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type LetterSwingProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

export function LetterSwing({ as: Tag = "h2", children, className }: LetterSwingProps) {
  if (typeof children !== "string") {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag className={cn("letter-swing", className)} aria-label={children}>
      {Array.from(children).map((character, index) => (
        <span
          key={`${character}-${index}`}
          aria-hidden="true"
          className="letter-swing-character"
          style={{ "--letter-index": index } as React.CSSProperties}
        >
          {character === " " ? "\u00A0" : character}
        </span>
      ))}
    </Tag>
  );
}