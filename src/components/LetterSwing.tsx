import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type LetterSwingProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

export function LetterSwing({ as: Tag = "h2", children, className, ...props }: LetterSwingProps) {
  if (typeof children !== "string") {
    return <Tag className={className} {...props}>{children}</Tag>;
  }

  const words = children.split(" ");
  let cursor = 0;

  return (
    <Tag className={cn("letter-swing", className)} aria-label={children} {...props}>
      {words.map((word, wordIndex) => {
        const characters = Array.from(word);
        const startIndex = cursor;
        cursor += characters.length + 1;

        return (
          <span key={`${word}-${wordIndex}`} aria-hidden="true" className="letter-swing-word">
            {characters.map((character, index) => (
              <span
                key={`${character}-${index}`}
                className="letter-swing-character"
                style={{ "--letter-index": startIndex + index } as CSSProperties}
              >
                {character}
              </span>
            ))}
            {wordIndex < words.length - 1 ? (
              <span
                className="letter-swing-character"
                style={{ "--letter-index": startIndex + characters.length } as CSSProperties}
              >
                {"\u00A0"}
              </span>
            ) : null}
          </span>
        );
      })}
    </Tag>
  );
}
