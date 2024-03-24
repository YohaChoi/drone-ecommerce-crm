"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { PropsWithChildren } from "react";

const convex = new ConvexReactClient(
  'https://beaming-dragon-871.convex.cloud'
);

export function Providers({ children }: PropsWithChildren) {
  return (
    <ClerkProvider publishableKey="pk_test_ZGV2b3RlZC1hbGllbi0yMi5jbGVyay5hY2NvdW50cy5kZXYk">
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
          {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
