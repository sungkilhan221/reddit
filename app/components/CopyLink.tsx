"use client";

import { useToast } from "@/components/ui/use-toast";
import { Share } from "lucide-react";

export function CopyLink({ id }: { id: string }) {
  const { toast } = useToast();

  async function copyToClipboard() {
    await navigator.clipboard.writeText(`${location.origin}/post/${id}`);
    toast({
      title: "Success!",
      description: "Your link has been copied to the clipboard!",
    });
  }

  return (
    <button className="flex items-center gap-x-1" onClick={copyToClipboard}>
      <Share className="w-4 h-4 text-muted-foreground" />
      <p className="text-muted-foreground font-medium text-xs">Share</p>
    </button>
  );
}
