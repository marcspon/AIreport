import React from "react";

import { userMessages, assistantMessages } from "./messages";

import MessageCard from "./message-card";
import Na from "./na";
import { Spinner } from "@nextui-org/react";
export default function Component({ chatList, isLoading }) {
  return (
    <div className="flex flex-col gap-4 px-1">
      {chatList.map(({ role, message }, index) => (
        <MessageCard
          key={index}
          attempts={index === 1 ? 2 : 1}
          avatar={
            role === "assistant"
              ? "https://wjnyranqqnagprhqmoer.supabase.co/storage/v1/object/public/images/edk.png"
              : "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatar_ai.png"
          }
          currentAttempt={index === 1 ? 2 : 1}
          message={message}
          messageClassName={
            role === "user" ? "bg-content3 text-content3-foreground" : ""
          }
          showFeedback={role === "assistant"}
        />
      ))}
      {isLoading && <Spinner color="primary" size="sm"></Spinner>}
      <div className="w-full h-12"></div>
    </div>
  );
}
