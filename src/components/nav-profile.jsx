"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function NavProfile({ user }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="mt-10 flex justify-center flex-col items-center gap-3">
        <div className="rounded-md overflow-hidden scale-150 transition-all duration-500 group-data-[collapsible=icon]:scale-100">
          <Image
            src={user.image}
            alt={`Foto Profil ${user.name}`}
            width={100}
            height={100}
            className="object-cover"
          />
        </div>
        <div className="mt-6 flex flex-col items-center truncate group-data-[collapsible=icon]:hidden">
          <span className="orbitron text-sm font-medium leading-none text-foreground">
            {user.name}
          </span>{" "}
          <span className="text-xs text-muted-foreground truncate">
            {user.role}
          </span>
        </div>
      </div>
    );
  }

  const currentImageSrc = theme === "dark" ? user.image : user.image2;

  return (
    <div className="mt-10 flex justify-center flex-col items-center gap-3">
      <div className="rounded-md overflow-hidden scale-150 transition-all duration-500 group-data-[collapsible=icon]:scale-100">
        <Image
          src={currentImageSrc}
          alt={`Foto Profil ${user.name}`}
          width={100}
          height={100}
          className="object-cover"
        />
      </div>
      <div className="mt-6 flex flex-col items-center truncate group-data-[collapsible=icon]:hidden">
        <span className="orbitron text-sm font-medium leading-none text-foreground">
          {user.name}
        </span>{" "}
        <span className="text-xs text-muted-foreground truncate">
          {user.role}
        </span>
      </div>
    </div>
  );
}