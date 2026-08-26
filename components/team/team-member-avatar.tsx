"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TeamMemberAvatarProps {
  name: string;
  src: string;
  className?: string;
}

export function TeamMemberAvatar({ name, src, className }: TeamMemberAvatarProps) {
  const [hasError, setHasError] = useState(false);

  // Extract initials
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <div 
      className={cn(
        "relative overflow-hidden bg-forest/10 flex items-center justify-center",
        className
      )}
    >
      {!hasError ? (
        <Image
          src={src}
          alt={`Photo of ${name}`}
          fill
          className="object-cover"
          onError={() => setHasError(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <span className="text-forest font-bold tracking-widest opacity-80 text-lg">
          {initials}
        </span>
      )}
    </div>
  );
}
