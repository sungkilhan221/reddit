"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { PiArrowFatDown, PiArrowFatUp } from "react-icons/pi";

export function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button>
          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
          Please wait
        </Button>
      ) : (
        <Button type="submit">{text}</Button>
      )}
    </>
  );
}

export function SaveButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button className="mt-2 w-full" disabled size="sm">
          <Loader2 className="mr-2 w-3 h-3 animate-spin" />
          Please wait
        </Button>
      ) : (
        <Button size="sm" className="mt-2 w-full" type="submit">
          Save
        </Button>
      )}
    </>
  );
}

export function UpVote() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button variant="ghost" size="icon" disabled>
          <Loader2 className="w-4 h-4 animate-spin" />
        </Button>
      ) : (
        <Button
          variant="ghost"
          size="icon"
          type="submit"
          className="hover:bg-gray-200 group"
        >
          <PiArrowFatUp className="h-6 w-6 text-muted-foreground group-hover:text-primary" />
        </Button>
      )}
    </>
  );
}

export function DownVote() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button variant="ghost" size="icon" disabled>
          <Loader2 className="w-4 h-4 animate-spin" />
        </Button>
      ) : (
        <Button
          variant="ghost"
          size="icon"
          type="submit"
          className="hover:bg-gray-200 group"
        >
          <PiArrowFatDown className="h-6 w-6 text-muted-foreground group-hover:text-primary" />
        </Button>
      )}
    </>
  );
}
