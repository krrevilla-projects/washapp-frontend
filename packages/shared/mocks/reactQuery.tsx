import "@testing-library/jest-dom";
import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const testQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
  // logger: {
  //   log: console.log,
  //   warn: console.warn,
  //   error: console.error,
  // },
});

export const reactQueryWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>
);
