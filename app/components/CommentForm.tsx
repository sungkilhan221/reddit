"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useRef } from "react";
import { SubmitButton } from "./SubmitButtons";
import { createComment } from "../actions";

interface iAppProps {
  postId: string;
  userName: string;
}

export default function CommentForm({ postId, userName }: iAppProps) {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      className="mt-5"
      action={async (formData) => {
        await createComment(formData);
        ref.current?.reset();
      }}
      ref={ref}
    >
      <input type="hidden" name="postId" value={postId} />
      <Label>
        {userName ? (
          <div className="flex items-center gap-x-1 text-xs">
            Comment as
            <span className="font-semibold text-muted-foreground">
              {userName}
            </span>
          </div>
        ) : (
          "Comment right here"
        )}
      </Label>
      <Textarea
        placeholder="What are your thoughts?"
        className="w-full mt-1 mb-2"
        name="comment"
      />
      <SubmitButton text="Comment" />
    </form>
  );
}
