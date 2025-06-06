import React from "react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SNSLinks({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "col-span-2 flex gap-4 justify-center items-center mx-auto mb-4 *:hover:bg-accent *:hover:text-black transition-all duration-500",
        className
      )}
    >
      <Button size="icon" asChild>
        <a
          href="https://www.behance.net/doublecheap"
          target="_blank"
          rel="noopener noreferrer"
          title="Behance"
        >
          <Icon icon="fa6-brands:behance" width="576" height="512" />
        </a>
      </Button>
      <Button size="icon" asChild>
        <a
          href="https://github.com/chiaweiliu"
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
        >
          <Icon icon="fa6-brands:github" width="496" height="512" />
        </a>
      </Button>
      <Button size="icon" asChild>
        <a
          href="https://www.instagram.com/liuliuliuchiawei/"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <Icon icon="brandico:instagram-filled" width="1000" height="1000" />
        </a>
      </Button>
      <Button size="icon" asChild>
        <a
          href="https://www.facebook.com/chiawei.liu.37"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <Icon icon="brandico:facebook" width="486.04" height="1000" />
        </a>
      </Button>
    </div>
  );
}
